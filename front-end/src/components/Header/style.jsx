import styled from 'styled-components';
export const Main = styled.header`
	position: fixed;
	right: 0;
	left: 0;
	top: 0;
	background-color: white;
	color: black;
	height: 80px;
	font-size: 36px;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: space-around;

	.icon:hover {
		cursor: pointer;
	}
`;
