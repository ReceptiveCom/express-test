import express from 'express';
import { userRouter } from './routes/userRouter';

const app = express();

app.get('/', (_, res) => res.send('👋  Hello World!'));

app.use('/user', userRouter);

export { app };
