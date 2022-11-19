import { Request, Response } from 'express';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

export class CreateSpecificationController {
  constructor(protected useCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.useCase.execute({
      name,
      description,
    });

    return response.status(201).send();
  }
}
