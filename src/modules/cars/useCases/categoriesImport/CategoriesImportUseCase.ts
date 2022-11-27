import { parse } from 'csv-parse';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
export class ImportCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    protected repository: ICategoriesRepository
  ) {}

  parse(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise<IImportCategory[]>((resolve, reject) => {
      const categories: IImportCategory[] = [];
      const stream = fs.createReadStream(file.path);
      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async (row) => {
          const [name, description] = row;
          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', (err) => {
          fs.promises.unlink(file.path);
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<number> {
    const categories = await this.parse(file);

    const result = categories.map(async (category) => {
      const existsCategory = await this.repository.findByName(category.name);
      if (!existsCategory) {
        await this.repository.create(category);
      }
      return existsCategory === null;
    });

    const count = (await Promise.all(result)).reduce(
      (acc, created) => acc + (created ? 1 : 0),
      0
    );
    return count;
  }
}
