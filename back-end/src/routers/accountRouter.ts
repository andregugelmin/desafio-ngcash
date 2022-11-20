import { Router } from 'express';
import { getAccount } from '../controllers/accountController.js';
import { validateToken } from '../middlewares/tokenValidation.js';

const accountRouter = Router();

accountRouter.get('/account', validateToken, getAccount);

export default accountRouter;
