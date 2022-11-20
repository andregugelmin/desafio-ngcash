import { Account } from '@prisma/client';
import accountRepository from '../repositories/accountRepository.js';
import transactionRepository from '../repositories/transactionRepository.js';
import { conflictError, notFoundError, unauthorizedError } from '../utils/errorUtils.js';

async function createTransaction(cashoutUserId: number, cashinUsername: string, value: number) {
	const creditedAccount = await accountRepository.getByUsername(cashinUsername);
	const debitedAccount = await accountRepository.getByUserID(cashoutUserId);

	validateTransaction(creditedAccount, debitedAccount, value);

	await transactionRepository.insert({
		creditedAccountId: creditedAccount.account.id,
		debitedAccountId: debitedAccount.account.id,
		value,
	});
}

function validateTransaction(creditedAccount: any, debitedAccount: any, value: number) {
	if (!creditedAccount || !debitedAccount) {
		throw notFoundError('Could not find user');
	}
	if (creditedAccount.account.id === debitedAccount.account.id)
		throw conflictError('You cannot transaction to your own account');

	if (creditedAccount.balance - value < 0)
		throw unauthorizedError('Credited account does not have sufficient balance amount for the transaction');
}

const transactionService = {
	createTransaction,
};

export default transactionService;
