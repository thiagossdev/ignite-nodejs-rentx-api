import { Router } from 'express';
import multer from 'multer';

import categoriesCreateController from '../modules/cars/useCases/categoriesCreate';
import categoriesImportController from '../modules/cars/useCases/categoriesImport';
import categoriesListController from '../modules/cars/useCases/categoriesList';

export const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', categoriesCreateController().handle);

categoriesRoutes.get('/', categoriesListController().handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  categoriesImportController().handle
);
