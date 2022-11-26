import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

export class ListSpecificationsUseCase {
  constructor(protected repository: ISpecificationsRepository) {}

  execute(): Specification[] {
    return this.repository.list();
  }
}
