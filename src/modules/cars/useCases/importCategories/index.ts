import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoriesController } from './ImportCategoriesController';
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

const importCategoriesUseCase = new ImportCategoriesUseCase(
  CategoriesRepository.getInstance()
);
export const importCategoriesController = new ImportCategoriesController(
  importCategoriesUseCase
);
