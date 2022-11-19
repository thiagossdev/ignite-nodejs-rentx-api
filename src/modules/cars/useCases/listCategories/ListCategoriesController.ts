import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export class ListCategoriesController {
  constructor(protected useCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.useCase.execute();

    return response.json(all);
  }
}
