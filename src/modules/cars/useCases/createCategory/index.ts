import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const createCategoryUseCase = new CreateCategoryUseCase(
  CategoriesRepository.getInstance()
);
export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
