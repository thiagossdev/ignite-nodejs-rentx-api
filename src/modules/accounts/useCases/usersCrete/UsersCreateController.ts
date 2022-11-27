import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UsersCreateUseCase } from './UsersCreateUseCase';

export class UsersCreateController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, username, email, driver_license, password } = request.body;

      const useCase = container.resolve(UsersCreateUseCase);

      await useCase.execute({
        name,
        username,
        email,
        driver_license,
        password,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }
}
