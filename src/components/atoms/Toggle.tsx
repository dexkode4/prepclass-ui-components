import React from "react";
import styled from "styled-components";

function Toggle() {
	return (
		<Switch>
			<input type="checkbox" />
			<span className="slider round"></span>
		</Switch>
	);
}

const Switch = styled.label`
	position: relative;
	display: inline-block;
	width: 3rem;
    height: 1.2rem;

	& input {
		opacity: 0;
		width: 0;
		height: 0;
		&:checked + .slider {
			background-color: #2196f3;
			opacity: 0.5;
		}

		&:checked + .slider:before {
			-webkit-transform: translateX(2rem);
			-ms-transform: translateX(2rem);
			transform: translateX(2rem);
		}
	}

	& .slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(255,255,255,0.7);
		-webkit-transition: 0.4s;
		transition: 0.4s;
		&:before {
			position: absolute;
			content: "";
			height: 1.5rem;
			width: 1.5rem;
			left: 0;
			bottom: -.125rem;
			background-color: white;
			-webkit-transition: 0.4s;
			transition: 0.4s;
		}
		&.round {
			border-radius: 2.1rem;
			&:before {
				border-radius: 50%;
			}
		}
	}
`;

export default Toggle;
