import { app } from './index';

const port = process.env.PORT ?? 8000;

const server = app.listen(port, () => {
  console.log(`🚀  http://localhost:${port}`);
});

export { server };
