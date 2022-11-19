import { Request, Response } from 'express';

import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

export class ImportCategoriesController {
  constructor(protected useCase: ImportCategoriesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const count = await this.useCase.execute(file);

    return response.status(count > 0 ? 201 : 400).json({ count });
  }
}
