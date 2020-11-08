import React from 'react';
import styled from 'styled-components';

interface ICardWithText {
    url: string;
    text: string;
}

function CardWithText({url, text}: ICardWithText) {
    return (
        <CardWithTextStyled url={url} className="w-11/12 ml-4 bg-cover rounded-3xl">
            <div className="w-full">
                <p className="w-full py-2 pl-4 text-sm font-extrabold bg-white prepclass-move rounded-b-2xl">{text}</p>
            </div>
            
        </CardWithTextStyled>
    )
}

interface ICard {
    url: string;
}
const CardWithTextStyled = styled.div`
    height: 170px;
    background-image: url('${(props: ICard) => props.url}');
    position: relative;
    margin-bottom: 10px;

    .prepclass-move {
        position: absolute;
        bottom: 0px;
    }
`

export default CardWithText
