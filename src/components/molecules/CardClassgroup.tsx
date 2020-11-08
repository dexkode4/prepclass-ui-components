import React from "react";
import styled from "styled-components";
import { BackgroundBar } from "./Elements";
import {Button} from '../atoms/Button';

interface Iimage {
	url: string;
	classGroupName?: string;
}
interface ICardTopic {
	url: string;
	classGroupName?: string;
	date?: string;
	progress?: number;
	noClasses: number;
	topic: string;
    profileImages?: Array<string>;
    noStudents: number;
}

function CardClassGroup({
	url,
	classGroupName,
	date,
	progress,
	noClasses,
	topic,
    profileImages,
    noStudents
}: ICardTopic) {
	return (
		<Container>
			<Image url={url}>
				<div className="header">
					<span className="mr-1 font-bold">{classGroupName}</span>
					<span>{date}</span>
				</div>
			</Image>
			<p className="pr-10 mt-2 ml-3 font-bold text-gray-800">
				{topic} <span className="font-light text-gray-600">({noClasses} classes)</span>
			</p>

			<BackgroundBar title={`${progress}` as string} />

			<div className="flex items-center p-2 mt-2">
				{profileImages
					?.filter((_, index) => index < 3)
					.map(src => (
						<img
							src={src}
							alt={"user"}
							className="w-10 h-10 -mr-4 border-4 border-white rounded-full"
						/>
					))}
                    <span className="ml-4 text-sm font-light text-gray-600">{noStudents} students (2 left) </span>
                    <Button text="Join" type="isClass"/>
			</div>
		</Container>
	);
}

const Container = styled.div`
	width: 20rem;
	overflow: hidden;
    border-radius: 1.5rem;
	background: #fff;
`;

const Image = styled.div`
	width: 100%;
	background-image: url(${(props: Iimage) => props.url});
	background-position: center;
	background-size: cover;
	border-bottom-left-radius: 1.5rem;
	border-bottom-right-radius: 1.5rem;
	margin-right: 1rem;
	height: 15rem;
	position: relative;

	& .header {
		position: absolute;
		top: 0;
		left: 0;
		padding: 0.6rem 1rem;
		font-size: 0.8rem;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		background: #293146;
		z-index: 10;
		width: 100%;
	}

	/* &::before {
		content: "${(props: Iimage) => props.classGroupName}";
		position: absolute;
		top: 0;
		left: 0;
        padding: 0.6rem 1rem;
        font-size:.8rem;
        font-weight:700;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		background: #293146;
        z-index: 10;
        width: 100%;
	} */
`;

export default CardClassGroup;
