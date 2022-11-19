import { Category } from '../../models/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  private static INSTANCE: CategoriesRepository;
  protected entities: Category[];

  private constructor() {
    this.entities = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO) {
    const entity = new Category();

    Object.assign(entity, {
      name,
      description,
      created_at: new Date(),
    });

    this.entities.push(entity);
    return entity;
  }

  list(): Category[] {
    return this.entities;
  }

  findByName(name: string): Category {
    return this.entities.find((entity) => entity.name === name);
  }
}
