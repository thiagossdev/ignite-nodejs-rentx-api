import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export class ListCategoriesController {
  constructor(protected useCase: ListCategoriesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.useCase.execute();

    return response.json(all);
  }
}
