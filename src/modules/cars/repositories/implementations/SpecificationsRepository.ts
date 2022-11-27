import { Repository } from 'typeorm';

import { AppDataSource } from '../../../../database/data-source';
import { Specification } from '../../entities/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from '../ISpecificationsRepository';

export class SpecificationsRepository implements ISpecificationsRepository {
  protected repository: Repository<Specification>;

  constructor() {
    this.repository = AppDataSource.getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const entity = this.repository.create({
      name,
      description,
    });

    await this.repository.save(entity);
  }

  async list(): Promise<Specification[]> {
    return this.repository.find();
  }

  async findByName(name: string): Promise<Specification> {
    return this.repository.findOneBy({ name });
  }
}
