import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const useCase = container.resolve(ListCategoriesUseCase);
    const all = await useCase.execute();

    return response.json(all);
  }
}
