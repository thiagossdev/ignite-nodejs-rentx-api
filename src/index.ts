import cors from 'cors';
import express from 'express';

import { router } from './routes';

export const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.get('/health-check', (request, response) => {
  return response.json({ result: 'healthy instance' });
});
