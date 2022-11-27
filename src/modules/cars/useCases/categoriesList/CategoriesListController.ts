import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CategoriesListUseCase } from './CategoriesListUseCase';

export class CategoriesListController {
  async handle(request: Request, response: Response): Promise<Response> {
    const useCase = container.resolve(CategoriesListUseCase);
    const all = await useCase.execute();

    return response.json(all);
  }
}
