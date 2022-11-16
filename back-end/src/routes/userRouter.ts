import { Router } from 'express';
import { signup, singin } from '../controllers/userController.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { createUserSchema } from '../schemas/userSchema.js';

const userRouter = Router();

userRouter.post('/signup', validateSchema(createUserSchema), signup);
userRouter.post('/signin', singin);

export default userRouter;
