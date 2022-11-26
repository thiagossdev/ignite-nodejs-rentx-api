import { Request, Response } from 'express';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
  constructor(protected useCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body;

      await this.useCase.execute({
        name,
        description,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }
}
