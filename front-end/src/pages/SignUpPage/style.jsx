import styled from 'styled-components';

export const Main = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 21px;
	h1 {
		font-size: 31px;
		font-weight: 700;
		margin-top: 60px;
		margin-bottom: 60px;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.input-label {
		display: flex;
		flex-direction: column;
		padding: auto;
	}
	input {
		width: 400px;
		height: 40px;
		margin-bottom: 14px;
		font-size: 25px;
	}
	label {
		margin-bottom: 5px;
		font-weight: 600;
	}
	p {
		margin-top: 18px;
		color: #fff0f0;
	}
	p :hover {
		cursor: pointer;
	}
	button {
		width: 200px;
		height: 40px;
		font-size: 18px;
		font-weight: 700;
		margin-top: 10px;
	}
	@media (max-width: 400px) {
		font-size: 18px;
		img {
			font-size: 21px;
		}
		.input-label {
			width: 100vw;
			padding-left: 8px;
			padding-right: 8px;
		}
		input {
			max-width: 100%;
			height: 30px;
			margin-bottom: 14px;
		}
	}
`;
