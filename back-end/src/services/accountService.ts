import accountRepository from '../repositories/accountRepository.js';
import transactionRepository from '../repositories/transactionRepository.js';
import { notFoundError } from '../utils/errorUtils.js';
import formatTransactions from '../utils/transactionUtils.js';

async function getUserAccount(userId: number) {
	const userAccount = await accountRepository.getByUserID(userId);

	if (!userAccount) throw notFoundError('Could not find account from user id');

	const accountData = {
		username: userAccount.username,
		id: userAccount.account.id,
		balance: userAccount.account.balance,
	};
	return accountData;
}

async function getAccountTransactions(id: number) {
	const transactions = await transactionRepository.getByAccountId(id);
	const formatedTransactions = formatTransactions(transactions);

	return formatedTransactions;
}

const accountService = {
	getUserAccount,
	getAccountTransactions,
};

export default accountService;
