import { Request, Response } from 'express';
import transactionService from '../services/transactionService';

export async function cashOut(req: Request, res: Response) {
	const { userId } = res.locals;
	const { creditedUsername, value } = req.body;
	await transactionService.createTransaction(userId, creditedUsername, value);
	res.sendStatus(200);
}
