import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UsersCreateUseCase } from './UsersCreateUseCase';

export class UsersCreateController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password, driver_license } = request.body;

      const useCase = container.resolve(UsersCreateUseCase);

      await useCase.execute({
        name,
        email,
        password,
        driver_license,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }
}
