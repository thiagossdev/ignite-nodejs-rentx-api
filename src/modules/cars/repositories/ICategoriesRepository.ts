import { Category } from '../entities/Category';

export interface ICategoryCreateDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create({ name, description }: ICategoryCreateDTO): Promise<void>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
}
