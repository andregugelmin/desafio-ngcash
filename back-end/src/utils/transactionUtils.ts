export default function formatTransactions(transactions: any) {
	const cashIn = transactions.TransactionCredit.map((elem) => {
		return {
			creditedUser: elem.creditedAccount.User[0].username,
			debitedUser: elem.debitedAccount.User[0].username,
			date: elem.createdAt,
			value: elem.value,
		};
	});

	const cashOut = transactions.TransactionDebit.map((elem) => {
		return {
			creditedUser: elem.creditedAccount.User[0].username,
			debitedUser: elem.debitedAccount.User[0].username,
			date: elem.createdAt,
			value: elem.value,
		};
	});

	const allTransactions = [...cashIn, ...cashOut].sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	const transactionsSorted = {
		allTransactions: allTransactions,
		debited: cashOut,
		credited: cashIn,
	};

	return transactionsSorted;
}
