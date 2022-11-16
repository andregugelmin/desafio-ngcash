import accountRepository from '../repositories/accountRepository.js';
import transactionRepository from '../repositories/transactionRepository';
import { notFoundError } from '../utils/errorUtils.js';

async function getUserAccount(userId: number) {
	const userAccount = await accountRepository.getByUserID(userId);

	if (!userAccount) throw notFoundError('Could not find account from user id');

	return userAccount.account;
}

async function getAccountTransactions(id: number) {
	const transactions = await transactionRepository.getByAccountId(id);

	return transactions;
}

const accountService = {
	getUserAccount,
	getAccountTransactions,
};

export default accountService;
