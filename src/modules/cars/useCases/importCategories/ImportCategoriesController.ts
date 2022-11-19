import { Request, Response } from 'express';

import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

export class ImportCategoriesController {
  constructor(protected useCase: ImportCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.useCase.execute(file);

    return response.status(201).json(file);
  }
}
