import { Specification } from '../../models/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from '../ISpecificationsRepository';

export class SpecificationsRepository implements ISpecificationsRepository {
  protected static INSTANCE: SpecificationsRepository;
  protected entities: Specification[];

  private constructor() {
    this.entities = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO) {
    const entity = new Specification();

    Object.assign(entity, {
      name,
      description,
      created_at: new Date(),
    });

    this.entities.push(entity);
    return entity;
  }

  list(): Specification[] {
    return this.entities;
  }

  findByName(name: string): Specification {
    return this.entities.find((entity) => entity.name === name);
  }
}
