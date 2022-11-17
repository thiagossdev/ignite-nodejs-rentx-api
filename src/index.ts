import cors from 'cors';
import express from 'express';

export const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});
