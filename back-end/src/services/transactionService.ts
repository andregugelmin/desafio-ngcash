import { Account } from '@prisma/client';
import accountRepository from '../repositories/accountRepository';
import transactionRepository from '../repositories/transactionRepository';
import { conflictError, notFoundError, unauthorizedError } from '../utils/errorUtils';

async function createTransaction(cashoutUserId: number, cashinUsername: string, value: number) {
	const creditedAccount = await await (await accountRepository.getByUsername(cashinUsername)).account;
	const debitedAccount = await await (await accountRepository.getByUserID(cashoutUserId)).account;

	validateTransaction(creditedAccount, debitedAccount, value);

	transactionRepository.insert({
		creditedAccountId: creditedAccount.id,
		debitedAccountId: debitedAccount.id,
		value,
	});
}

async function validateTransaction(creditedAccount: Account, debitedAccount: Account, value: number) {
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
