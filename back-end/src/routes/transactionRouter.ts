import { Router } from 'express';
import { cashOut } from '../controllers/transactionController.js';
import { validateToken } from '../middlewares/tokenValidation.js';

const transactionRouter = Router();

transactionRouter.post('/cashout', validateToken, cashOut);

export default transactionRouter;
