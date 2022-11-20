import { Container } from './style';

export default function Transactions(props) {
	const { transactions } = props;
	console.log(transactions);
	return (
		<Container>
			<h1>Transactions</h1>
			{transactions.length > 0 ? (
				transactions.map((elem, i) => {
					return (
						<div key={i}>
							<p>
								De {elem.debitedUser} para {elem.creditedUser}
							</p>
							<p>{(elem.value / 100).toFixed(2)}</p>
							<p>{elem.date}</p>
						</div>
					);
				})
			) : (
				<p>no transactions</p>
			)}
		</Container>
	);
}
