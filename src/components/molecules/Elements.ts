import styled from 'styled-components';

export const BackgroundBar = styled.div`
	background-color: #EBF0E9;
	border-radius: 100px;
	height: 0.2rem;
	margin-top: 1.5rem;
	display: flex;
	align-items: center;
	position: relative;

	&::before {
		content: "";
		width: ${({ title }) => title}%;
		height: 0.12rem;
		background-color: #5f9048;
		border-radius: 100px;
		margin-left: 0.2rem;
		position: absolute;
		top: 0;
		left: 0;
	}
`;

