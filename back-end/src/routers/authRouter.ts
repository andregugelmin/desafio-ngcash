import { Router } from 'express';
import { signup, signin } from '../controllers/authController.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { createUserSchema } from '../schemas/userSchema.js';

const authRouter = Router();

authRouter.post('/signup', validateSchema(createUserSchema), signup);
authRouter.post('/signin', signin);

export default authRouter;
