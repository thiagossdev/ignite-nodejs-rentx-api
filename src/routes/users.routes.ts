import { Router } from 'express';

import usersCreateController from '../modules/accounts/useCases/usersCreate';
// import usersListController from '../modules/accounts/useCases/usersList';

export const usersRoutes = Router();

usersRoutes.post('/', usersCreateController().handle);

// usersRoutes.get('/', usersListController().handle);
