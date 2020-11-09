import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from '../atoms/Button';

interface IJoinLiveGroup {
	groupName: string;
	day: number;
	hour: number;
	minute: number;
}

function Timer({ groupName, day, hour, minute }: IJoinLiveGroup) {
	const [days, setDays] = useState(day);
	const [hours, setHours] = useState(hour);
	const [minutes, setMinutes] = useState(minute);
	const [seconds, setSeconds] = useState(0);
	const [isOpen, setIsOpen] = useState(true);

	useEffect(() => {
		let myInterval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(sec => sec - 1);
			}
			if (days === 0) {
				clearInterval(myInterval);
			}

			if (hours === 0) {
				setDays(d => d - 1);
				setHours((h) => 23);
				setMinutes((m) => 59);
				setSeconds((sec) => 59);
			}

			if (seconds === 0) {
				if (minutes === 0) {
					setHours(h => h - 1);
					setMinutes((m) => 59);
					setSeconds((sec) => 59);
				} else {
					setMinutes(m => m - 1);
					setSeconds((sec) => 59);
				}
			}
		}, 1000);
	},[seconds,minutes,hours,days]);

	return isOpen ?
		<Container>
			<span className="ml-4 font-bold">{groupName}</span> 
			<div className="flex items-center text-xs font-thin"> 
				<span className="mr-4 font-semibold">LIVE IN</span> 
				<span className="mr-1 text-base font-bold">{days < 10 ? `0${days}` : days }</span> Days 
				<span className="mx-2 text-3xl font-hairline">| </span>
				<span className="mr-1 text-base font-bold">{hours}</span> Hours 
				<span className="mx-2 text-3xl font-hairline">| </span>
				<span className="mr-1 text-base font-bold">{minutes}</span> Minutes 
				<span className="mx-2 text-3xl font-hairline">| </span>
				<span className="mr-1 text-base font-bold">{ seconds < 10 ? `0${seconds}` : seconds }</span> 
				 Seconds</div>
			<div className="flex items-center justify-between w-1/6">
				<Button text="Join Live" type="default" />
				<Close onClick={() => setIsOpen(false)}>x</Close>
			</div>
		</Container>: null
	;
}
const Container = styled.div`
	background: #293146;
	color: #fff;
	width: 100%;
	padding: .75rem 2.5rem;
	border-radius: 4px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Close = styled.div`
	height: 2rem;
	width: 2rem;
	background: #fff;
	color: #5F9048;
	border-radius: 50%;
	display: grid;
	place-content: center;
	font-weight: 500;
	cursor: pointer;
`;

export default Timer;
