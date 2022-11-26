import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

export class ListCategoriesUseCase {
  constructor(protected repository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    return this.repository.list();
  }
}
