import { Repository } from 'typeorm';

import { AppDataSource } from '../../../../database/data-source';
import { User } from '../../entities/User';
import { IUsersRepository, IUserCreateDTO } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  protected repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({
    name,
    email,
    password,
    driver_license,
  }: IUserCreateDTO): Promise<void> {
    const entity = this.repository.create({
      name,
      email,
      password,
      driver_license,
    });

    await this.repository.save(entity);
  }

  async list(): Promise<User[]> {
    return this.repository.find();
  }

  async findByName(name: string): Promise<User> {
    return this.repository.findOneBy({ name });
  }
}
