import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Transactions from '../../components/Transactions';
import useAccount from '../../hooks/api/useAccount';
import useAuth from '../../hooks/useAuth';
import { Main } from './style';

export default function AccountPage() {
	const { token } = useAuth();
	const { account, loadingAccount, getAccount } = useAccount(token);
	const [transactions, setTransactions] = useState();
	const [type, setType] = useState('Date');

	const navigate = useNavigate();

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
		if (filter === 'date') {
			setTransactions(account.transactions.allTransactions);
			setType('Date');
		} else if (filter === 'cashin') {
			setTransactions(account.transactions.credited);
			setType('Cash-in');
		} else {
			setTransactions(account.transactions.debited);
			setType('Cash-out');
		}
	}
	if (loadingAccount || !account) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Header />
			<Main>
				<div className="header">
					<p>Balance: $ {(account.account.balance / 100).toFixed(2)}</p>
					<button
						className="cashout-button"
						onClick={() => navigate('/cashout', { state: { token, balance: account.account.balance / 100 } })}
					>
						Make a Cash-out
					</button>
				</div>
				<h1>Transactions:</h1>
				<p>Filter by </p>
				<button className="filter-button" onClick={() => filterTransactions('date')}>
					Date
				</button>
				<button className="filter-button" onClick={() => filterTransactions('cashin')}>
					Cash In
				</button>
				<button className="filter-button" onClick={() => filterTransactions('cashout')}>
					Cash Out
				</button>
				<Transactions type={type} transactions={transactions} />
			</Main>
		</>
	);
}
