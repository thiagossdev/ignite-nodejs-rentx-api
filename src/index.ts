import cors from 'cors';
import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';

export const app = express();
app.use(express.json());
app.use(cors());

app.use('/categories', categoriesRoutes);

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});
