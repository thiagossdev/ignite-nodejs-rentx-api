import { Repository } from 'typeorm';

import { AppDataSource } from '../../../../database/data-source';
import { Category } from '../../entities/Category';
import {
  ICategoriesRepository,
  ICategoryCreateDTO,
} from '../ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  protected repository: Repository<Category>;

  constructor() {
    this.repository = AppDataSource.getRepository(Category);
  }

  async create({ name, description }: ICategoryCreateDTO): Promise<void> {
    const entity = this.repository.create({
      name,
      description,
    });

    await this.repository.save(entity);
  }

  async list(): Promise<Category[]> {
    return this.repository.find();
  }

  async findByName(name: string): Promise<Category> {
    return this.repository.findOneBy({ name });
  }
}
