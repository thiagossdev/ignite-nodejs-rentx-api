import { Specification } from '../models/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from './ISpecificationsRepository';

export class SpecificationsRepository implements ISpecificationsRepository {
  protected entities: Specification[] = [];

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
