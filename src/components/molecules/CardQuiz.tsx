import React from "react";
import styled from "styled-components";
import Button  from "../atoms/Button";

interface ICardQuiz {
	imageUrl: string;
	subject: string;
	topic: string;
}

function CardQuiz({ imageUrl, subject, topic }: ICardQuiz) {
	return (
		<Container>
			<IconBackground>
				<img src={imageUrl} alt="quizLogo" />
			</IconBackground>
			<h2 className="mt-12 font-bold">{subject}</h2>
			<p className="mb-6 text-sm">{topic}</p>

			<Button text="Take quiz" type="isQuiz" />
		</Container>
	);
}

const IconBackground = styled.div`
	height: 6rem;
	width: 6rem;
	background: linear-gradient(
		148.78deg,
		rgba(196, 196, 196, 0.3) -10.57%,
		rgba(196, 196, 196, 0) 92.53%
    );
    position: relative;
	border-radius: 50%;
`;

const Container = styled.div`
	width: 17rem;
	background: #293146;
	color: #fff;
	border-radius: 1rem;
	padding: 2rem 1.4rem;
	position: relative;
	& img {
		position: absolute;
        width: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
	}
`;

export default CardQuiz;
