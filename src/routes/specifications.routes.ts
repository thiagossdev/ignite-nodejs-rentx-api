import { Router } from 'express';

import createSpecificationController from '../modules/cars/useCases/specificationsCreate';
import listSpecificationsController from '../modules/cars/useCases/specificationsList';

export const specificationsRoutes = Router();

specificationsRoutes.post('/', createSpecificationController().handle);

specificationsRoutes.get('/', listSpecificationsController().handle);
