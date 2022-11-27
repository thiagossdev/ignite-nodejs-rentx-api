import { Router } from 'express';
import multer from 'multer';

import createCategoryController from '../modules/cars/useCases/categoriesCreate';
import importCategoriesController from '../modules/cars/useCases/categoriesImport';
import listCategoriesController from '../modules/cars/useCases/categoriesList';

export const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', createCategoryController().handle);

categoriesRoutes.get('/', listCategoriesController().handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoriesController().handle
);
