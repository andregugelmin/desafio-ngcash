import { Router } from 'express';
import { validateToken } from '../middlewares/tokenValidation';

const accountRouter = Router();

accountRouter.get('/account', validateToken);

export default accountRouter;
