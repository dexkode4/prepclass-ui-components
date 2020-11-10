import React from "react";
import styled from "styled-components";

interface Icoin {
    count: number;
}

const CoinStyle = styled.div`
	width: 7.2rem;
	height: 3rem;
	background: linear-gradient(293.07deg, #f2a636 26.91%, #f7c250 66.47%),
		#f6b746;
	border: 1px solid rgba(173, 81, 8, 0.3);
	box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    font-weight:800;
    padding: 0 10px;

    & .penny {
        background-color: #E09530;
        height:1.2rem;
        width: 1.2rem;
        border-radius: 50%;
        position: relative;
        margin-right: 5px;
        &:before{
           content:"";
           background-color: #AD5108;
           position: absolute;
           height:50%;
           width: 50%;
           top: 50%;
           left: 50%;
           transform: translate(-50%, -50%);
           border-radius: 50%;
        }
    }
`;

export default function Coin({count}: Icoin) {
    return (
        <CoinStyle id="coin">
            <div className="penny"/>
            <span>{count}</span>
            coins
        </CoinStyle>
    )
}

