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
    username,
    email,
    driver_license,
    password,
  }: IUserCreateDTO): Promise<void> {
    const userAlreadyExists = await this.repository.findByName(name);

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    await this.repository.create({
      name,
      username,
      email,
      driver_license,
      password,
    });
  }
}
