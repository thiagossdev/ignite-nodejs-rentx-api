import { Category } from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

export class ListCategoriesUseCase {
  constructor(protected repository: ICategoriesRepository) {}

  execute(): Category[] {
    return this.repository.list();
  }
}
