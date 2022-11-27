import { inject, injectable } from 'tsyringe';

import {
  ISpecificationCreateDTO,
  ISpecificationsRepository,
} from '../../repositories/ISpecificationsRepository';

@injectable()
export class SpecificationsCreateUseCase {
  constructor(
    @inject('SpecificationsRepository')
    protected repository: ISpecificationsRepository
  ) {}

  async execute({ name, description }: ISpecificationCreateDTO): Promise<void> {
    const specificationAlreadyExists = await this.repository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists!');
    }

    await this.repository.create({ name, description });
  }
}
