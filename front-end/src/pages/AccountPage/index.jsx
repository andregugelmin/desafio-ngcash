import React, { useEffect, useState } from 'react';
import Cashout from '../../components/Cashout';
import Header from '../../components/Header';
import Transactions from '../../components/Transactions';
import useAccount from '../../hooks/api/useAccount';
import useAuth from '../../hooks/useAuth';
import { Main } from './style';

export default function AccountPage() {
	const { token } = useAuth();
	const { account, loadingAccount, getAccount } = useAccount(token);
	const [transactions, setTransactions] = useState();

	useEffect(() => {
		if (token) {
			getAccount(token);
		}
	}, [token]);

	useEffect(() => {
		if (account) {
			setTransactions(account.transactions.allTransactions);
		}
	}, [account]);

	function filterTransactions(filter) {
		if (filter === 'date') setTransactions(account.transactions.allTransactions);
		else if (filter === 'cashin') setTransactions(account.transactions.credited);
		else setTransactions(account.transactions.debited);
	}

	if (loadingAccount || !account) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Header />
			<Main>
				<Cashout token={token} />
				<p>Filter by: </p>
				<button onClick={() => filterTransactions('date')}>Date</button>
				<button onClick={() => filterTransactions('cashin')}>Cash In</button>
				<button onClick={() => filterTransactions('cashout')}>Cash Out</button>
				<p>Balance: {(account.account.balance / 100).toFixed(2)}</p>
				<Transactions transactions={transactions} />
			</Main>
		</>
	);
}
