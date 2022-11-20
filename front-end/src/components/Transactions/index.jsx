import dayjs from 'dayjs';
import { Container } from './style';

export default function Transactions(props) {
	const { type, transactions } = props;
	return (
		<Container>
			<h1>{type}</h1>
			{transactions.length > 0 ? (
				transactions.map((elem, i) => {
					return (
						<div key={i} className="transaction">
							<p>
								From {elem.debitedUser} to {elem.creditedUser}
							</p>
							<p>$ {(elem.value / 100).toFixed(2)}</p>
							<p>{dayjs(elem.date).format('DD/MM/YYYY HH:mm')}</p>
						</div>
					);
				})
			) : (
				<p>no transactions</p>
			)}
		</Container>
	);
}
