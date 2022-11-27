import { Router } from 'express';
import multer from 'multer';

import createCategoryController from '../modules/cars/useCases/createCategory';
import importCategoriesController from '../modules/cars/useCases/importCategories';
import listCategoriesController from '../modules/cars/useCases/listCategories';

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
