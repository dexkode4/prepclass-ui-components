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
    topic: string;
    duration: string;
}

function CardTopic({ url, topic, duration }: ICardTopic) {
	return (
		<div className="m-2">
			<div className="w-64 px-3 py-4 bg-white rounded-t-3xl">
				<Image url={url} />

				<div className="flex justify-around pt-4">
					<p className="text-sm font-bold">{topic}</p>
					<MdMoreVert className="text-xl cursor-pointer" />
				</div>
			</div>
            <div className="flex items-center justify-between w-64 p-2 pl-6 bg-white border-t-2 rounded-b-3xl">
                <AiOutlineClockCircle className="text-xl text-gray-600"/>
                <span>{duration}</span>
                <Button text="Start" type="isClass"/>
            </div>
		</div>
	);
}

const Image = styled.div`
	width: 100%;
	background-image: url(${(props: Iimage) => props.url});
	background-position: center;
	background-size: cover;
	border-top-left-radius: 1.6rem;
	border-top-right-radius: 1.6rem;
	margin-right: 1rem;
	height: 9rem;
`;

export default CardTopic;
