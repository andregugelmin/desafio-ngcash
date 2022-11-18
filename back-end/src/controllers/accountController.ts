import { Request, Response } from 'express';
import accountService from '../services/accountService.js';

export async function getAccount(req: Request, res: Response) {
	const { userId } = res.locals;

	const account = await accountService.getUserAccount(userId);
	const transactions = await accountService.getAccountTransactions(account.id);

	res.send({ account, transactions }).status(200);
}
