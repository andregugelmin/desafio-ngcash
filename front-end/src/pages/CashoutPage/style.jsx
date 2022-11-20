import styled from 'styled-components';

export const Container = styled.div`
	max-width: 800px;
	margin: auto;
	margin-top: 100px;
	font-size: 32px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		color: white;
		font-weight: 700;
		margin-bottom: 40px;
	}

	p {
		color: white;
		font-weight: 500;
		margin-bottom: 40px;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		max-width: 400px;
	}

	input {
		height: 35px;
		margin-bottom: 12px;
		margin-top: 5px;
		font-size: 20px;
	}

	label {
		color: white;
		font-size: 26px;
		margin-top: 10px;
	}

	.buttons {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	button {
		margin-top: 20px;
		margin-left: 10px;
		margin-right: 10px;
		height: 40px;
		width: 80px;
		border: none;
		border-radius: 5px;
		background-color: white;
		font-size: 16px;
	}
`;
