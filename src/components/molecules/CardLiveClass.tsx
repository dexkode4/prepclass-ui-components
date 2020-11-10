import React from "react";
import styled from "styled-components";
import { RiMoreLine } from "react-icons/ri";
import { BsDot } from 'react-icons/bs';
import Button from '../atoms/Button';
import { BackgroundBar } from './Elements';



interface ICardLiveClass {
	url: string;
	caption: string;
	description: string;
	timeLeft?: number;
    profileImages?: Array<string>;
    progress: number;
}

interface Iimage {
	url: string;
	caption: string;
}

function CardLiveClass({
	url,
	caption,
	description,
	timeLeft = 0,
    profileImages,
    progress
}: ICardLiveClass) {
	return (
		<Container>
			<Image caption={caption} url={url} />
			<Info>
				<h2 className="text-sm font-bold">
					{description}
					<span className="px-4 py-1 ml-2 text-xs text-white uppercase bg-red-500 rounded-lg time-left">
						<BsDot className="inline text-lg text-white"/> live in {timeLeft}MINS
					</span>
				</h2>

				<div className="flex items-center justify-between">
					<div className="flex mt-2">
						{profileImages?.filter((_, index) => index < 3).map(src => (
							<img
								src={src}
								alt={"user"}
								className="w-10 h-10 -mr-4 border-4 border-white rounded-full"
							/>
						))}

					</div>
					<RiMoreLine className="text-xl cursor-pointer" />
				</div>

				<BackgroundBar title={`${progress}` as string} />
                <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-700">
                        Completed : <span className="font-bold">{progress}%</span>
                    </p>
                    <Button text="Resume" type="isClass"/>
                </div>
			</Info>
		</Container>
	);
}

const Container = styled.div`
	padding: 1.25rem;
	display: flex;
	justify-content: space-between;
	width: 33rem;
	border-radius: 1.3rem;
    background-color: #fff;
    @media (max-width:400px){
        flex-direction: column;
    }
`;

const Info = styled.div`
	width: 50%;
    line-height: 1.4rem;
    
    & span{
        @media (max-width:700px){
            display:block;
            width:max-content;
            margin-top:.4rem;
        }
    }
`;

const Image = styled.div`
	width: 15rem;
	background-image: url(${(props: Iimage) => props.url});
	background-position: center;
	background-size: cover;
    position: relative;
	border-radius: 1.5rem;
	margin-right: 1rem;

	&::before {
		content: "${(props: Iimage) => props.caption}";
		position: absolute;
		top: 10%;
		left: 7%;
		padding: 0.6rem;
		border-radius: 1rem;
		text-align: center;
		display: flex;
		font-weight: 800;
		justify-content: center;
		align-items: center;
		color: #fff;
		background: #27ae60;
		z-index: 10;
	}
`;

export default CardLiveClass;
