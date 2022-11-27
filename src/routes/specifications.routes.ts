import { Router } from 'express';

import specificationsCreateController from '../modules/cars/useCases/specificationsCreate';
import specificationsListController from '../modules/cars/useCases/specificationsList';

export const specificationsRoutes = Router();

specificationsRoutes.post('/', specificationsCreateController().handle);

specificationsRoutes.get('/', specificationsListController().handle);
