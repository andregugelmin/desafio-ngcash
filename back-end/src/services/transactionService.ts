import { Account } from '@prisma/client';
import accountRepository from '../repositories/accountRepository.js';
import transactionRepository from '../repositories/transactionRepository.js';
import { conflictError, notFoundError, unauthorizedError } from '../utils/errorUtils.js';

async function createTransaction(cashoutUserId: number, cashinUsername: string, value: number) {
	const creditedAccount = await accountRepository.getByUsername(cashinUsername);
	const debitedAccount = await accountRepository.getByUserID(cashoutUserId);
	validateTransaction(creditedAccount.account, debitedAccount.account, value);

	await transactionRepository.insert({
		creditedAccountId: creditedAccount.account.id,
		debitedAccountId: debitedAccount.account.id,
		value,
	});
}

function validateTransaction(creditedAccount: Account, debitedAccount: Account, value: number) {
	if (creditedAccount.id === debitedAccount.id) throw conflictError('Credited and debited cannot be the same account');

	if (!creditedAccount || !debitedAccount) {
		throw notFoundError('Could not find credited or debited user');
	}
	if (creditedAccount.balance - value < 0)
		throw unauthorizedError('Credited account does not have sufficient balance amount for the transaction');
}

const transactionService = {
	createTransaction,
};

export default transactionService;
