import { User } from '../entities/User';

export interface IUserCreateDTO {
  name: string;
  email: string;
  password: string;
  driver_license: string;
}

export interface IUsersRepository {
  create(data: IUserCreateDTO): Promise<void>;
  list(): Promise<User[]>;
  findByName(name: string): Promise<User>;
}
