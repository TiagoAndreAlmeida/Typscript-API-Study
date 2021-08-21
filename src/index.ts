import express from 'express';
import { createUser } from './controlers/user';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  createUser({
    name: 'Teste nome',
  });
  res.json({ ok: 'ok' }).status(200);
});

app.listen(PORT, () => {
  console.log('server running...');
});
