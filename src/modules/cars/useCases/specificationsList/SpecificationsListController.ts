import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SpecificationsListUseCase } from './SpecificationsListUseCase';

export class SpecificationsListController {
  async handle(request: Request, response: Response): Promise<Response> {
    const useCase = container.resolve(SpecificationsListUseCase);
    const all = await useCase.execute();

    return response.json(all);
  }
}
