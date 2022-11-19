import { Request, Response } from 'express';

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

export class ListSpecificationsController {
  constructor(protected useCase: ListSpecificationsUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.useCase.execute();

    return response.json(all);
  }
}
