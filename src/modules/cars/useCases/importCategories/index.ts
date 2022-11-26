import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoriesController } from './ImportCategoriesController';
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

export default (): ImportCategoriesController => {
  const importCategoriesUseCase = new ImportCategoriesUseCase(
    new CategoriesRepository()
  );
  const importCategoriesController = new ImportCategoriesController(
    importCategoriesUseCase
  );

  return importCategoriesController;
};
