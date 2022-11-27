import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SpecificationsCreateUseCase } from './SpecificationsCreateUseCase';

export class SpecificationsCreateController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body;

      const useCase = container.resolve(SpecificationsCreateUseCase);
      await useCase.execute({
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
