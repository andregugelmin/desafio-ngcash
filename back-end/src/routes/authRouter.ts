import { Router } from 'express';
import { signup, signin } from '../controllers/authController.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { createUserSchema } from '../schemas/userSchema.js';

const userRouter = Router();

userRouter.post('/signup', validateSchema(createUserSchema), signup);
userRouter.post('/signin', signin);

export default userRouter;
