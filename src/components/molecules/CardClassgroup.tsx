import React from "react";
import styled from "styled-components";
import { MdMoreVert } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import {Button} from '../atoms/Button';


interface Iimage {
	url: string;
}
interface ICardTopic {
	url: string;
    topic?: string;
}

function CardClassGroup({ url, topic }: ICardTopic) {
	return (
			<Container>
				<Image url={url} />
			</Container>
            
	);
}

const Container = styled.div`
    width:21rem;
    overflow:hidden;
    border-top-left-radius:4rem;
    border-top-right-radius: 4rem;
    background: #fff;
`;

const Image = styled.div`
	width: 100%;
	background-image: url(${(props: Iimage) => props.url});
	background-position: center;
	background-size: cover;
	border-top-left-radius: 1.6rem;
	border-top-right-radius: 1.6rem;
	margin-right: 1rem;
	height: 10rem;
`;

export default CardClassGroup;
