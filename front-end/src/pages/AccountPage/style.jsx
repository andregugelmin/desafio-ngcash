import styled from 'styled-components';

export const Main = styled.div`
	width: 100vw;
	min-height: 100vh;
	color: white;
	padding: 20px;
	font-size: 32px;
	padding-left: 50px;
	padding-right: 50px;
	max-width: 800px;
	margin: auto;
	margin-top: 80px;

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h1 {
		font-weight: 600;
		margin-bottom: 10px;
	}

	.filter-button {
		font-size: 18px;
		height: 60px;
		width: 90px;
		background-color: #ffffffe8;
		border: none;
		margin-right: 5px;
		margin-top: 10px;
		border-radius: 7px;
	}

	.cashout-button {
		height: 80px;
		width: 240px;
		font-size: 24px;
		border-radius: 25px;
		background-color: white;
		color: black;
		box-shadow: rgba(163, 163, 163, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
	}
`;
