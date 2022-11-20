import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';

import useCashout from '../../hooks/api/useCashout';
import { Container } from './style';

export default function CashoutPage(props) {
	const { loadingCashout, cashout, cashoutError, cashoutData } = useCashout();
	const location = useLocation();
	const { token, balance } = location.state;
	const [userCashout, setUserCashout] = useState('');
	const [cashoutValue, setCashoutValue] = useState(0);

	const navigate = useNavigate();
	const alert = useAlert();

	function submitCashout(e) {
		e.preventDefault();

		if (cashoutValue > balance) {
			alert.error('You dont have this cashout value in your balance');
			return;
		}

		const data = {
			creditedUsername: userCashout,
			value: cashoutValue * 100,
		};

		handleCashout(data);
	}

	useEffect(() => {
		if (cashoutError) alert.error(cashoutError.response.data);
	}, [cashoutError]);

	useEffect(() => {
		if (cashoutData == 'OK') alert.success('Transaction succeed');
	}, [cashoutData]);

	const handleCashout = async (data) => {
		await cashout(token, data);
	};

	return (
		<Container>
			<h1>New cashout</h1>

			<form onSubmit={(e) => submitCashout(e)}>
				<p>Balance: ${balance.toFixed(2)}</p>
				<label>Username</label>
				<input
					type="text"
					onChange={(e) => setUserCashout(e.target.value)}
					required
					disabled={loadingCashout ? true : false}
				></input>

				<label>Value</label>
				<input
					type="number"
					onChange={(e) => setCashoutValue(e.target.value)}
					required
					min="0.00"
					max={balance}
					step="0.01"
					disabled={loadingCashout ? true : false}
				></input>

				<div className="buttons">
					<button type="submit" required disabled={loadingCashout ? true : false}>
						Cashout
					</button>
					<button required disabled={loadingCashout ? true : false} onClick={() => navigate('/account')}>
						Back
					</button>
				</div>
			</form>
		</Container>
	);
}
