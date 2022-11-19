import { Router } from 'express';

import { SpecificationsRepository } from '../repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../services/CreateSpecificationService';

export const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  new CreateSpecificationService(specificationsRepository).execute({
    name,
    description,
  });

  return response.status(201).send();
});

specificationsRoutes.get('/', (request, response) => {
  const all = specificationsRepository.list();

  return response.json(all);
});
