import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

export class ListSpecificationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const useCase = container.resolve(ListSpecificationsUseCase);
    const all = await useCase.execute();

    return response.json(all);
  }
}
