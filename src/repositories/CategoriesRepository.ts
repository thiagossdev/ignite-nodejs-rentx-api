import { Category } from '../models/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export class CategoriesRepository {
  protected categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
    return category;
  }

  list(): Category[] {
    return this.categories;
  }
}
