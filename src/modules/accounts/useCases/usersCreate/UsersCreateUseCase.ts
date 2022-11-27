import { inject, injectable } from 'tsyringe';

import {
  IUserCreateDTO,
  IUsersRepository,
} from '../../repositories/IUsersRepository';

@injectable()
export class UsersCreateUseCase {
  constructor(
    @inject('UsersRepository')
    protected repository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: IUserCreateDTO): Promise<void> {
    const userAlreadyExists = await this.repository.findByName(name);

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    await this.repository.create({
      name,
      email,
      password,
      driver_license,
    });
  }
}
