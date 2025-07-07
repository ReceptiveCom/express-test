import { Router } from 'express';
// import { extractJwtFromHeader, getUserId } from '../utils/auth';

const userRouter = Router();

userRouter.get('/dashboard', async (req, res) => {});

export { userRouter };
