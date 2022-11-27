import { inject, injectable } from 'tsyringe';

import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    protected repository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    return this.repository.list();
  }
}
