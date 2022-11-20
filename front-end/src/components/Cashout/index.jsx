import { useState } from 'react';
import useCashout from '../../hooks/api/useCashout';
import { Container } from './style';

export default function Cashout(props) {
	const { loadingCashout, cashout, cashoutError, cashoutData } = useCashout();
	const { token } = props;
	const [userCashout, setUserCashout] = useState('');
	const [cashoutValue, setCashoutValue] = useState(0);

	function submitCashout(e) {
		e.preventDefault();

		const data = {
			creditedUsername: userCashout,
			value: cashoutValue * 100,
		};

		handleCashout(data);
	}

	const handleCashout = async (data) => {
		await cashout(token, data);
	};

	return (
		<Container>
			<h1>New cashout</h1>
			<form onSubmit={(e) => submitCashout(e)}>
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
					disabled={loadingCashout ? true : false}
				></input>

				<button type="submit" required disabled={loadingCashout ? true : false}>
					cashout
				</button>
			</form>
		</Container>
	);
}
