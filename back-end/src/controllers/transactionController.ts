import { Request, Response } from 'express';
import transactionService from '../services/transactionService.js';

export async function cashOut(req: Request, res: Response) {
	const { id } = res.locals.user;
	const { creditedUsername, value } = req.body;
	await transactionService.createTransaction(id, creditedUsername, parseInt(value));
	res.sendStatus(200);
}
