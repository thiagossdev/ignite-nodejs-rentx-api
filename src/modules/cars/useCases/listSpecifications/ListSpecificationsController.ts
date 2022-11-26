import { Request, Response } from 'express';

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

export class ListSpecificationsController {
  constructor(protected useCase: ListSpecificationsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.useCase.execute();

    return response.json(all);
  }
}
