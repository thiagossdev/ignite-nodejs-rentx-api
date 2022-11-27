import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

export class ImportCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const useCase = container.resolve(ImportCategoriesUseCase);
    const count = await useCase.execute(file);

    return response.status(count > 0 ? 201 : 400).json({ count });
  }
}
