import { Request, Response } from 'express';
import accountService from '../services/accountService.js';

export async function getAccount(req: Request, res: Response) {
	const { id } = res.locals.user;

	const account = await accountService.getUserAccount(id);

	const transactions = await accountService.getAccountTransactions(account.id);

	res.send({ account, transactions }).status(200);
}
