import { inject, injectable } from 'tsyringe';

import {
  ICategoriesRepository,
  ICategoryCreateDTO,
} from '../../repositories/ICategoriesRepository';

@injectable()
export class CategoriesCreateUseCase {
  constructor(
    @inject('CategoriesRepository')
    protected repository: ICategoriesRepository
  ) {}

  async execute({ name, description }: ICategoryCreateDTO): Promise<void> {
    const categoryAlreadyExists = await this.repository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }

    await this.repository.create({ name, description });
  }
}
