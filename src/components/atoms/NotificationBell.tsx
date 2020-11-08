import React from 'react';
import {IoMdNotificationsOutline} from 'react-icons/io';
import styled from 'styled-components';

interface IBell {
    count:number;
}

function NotificationBell({count}: IBell) {
    return (
        <Container count={count}>
            <IoMdNotificationsOutline className="text-4xl"/>
        </Container>
    )
}


const Container = styled.div`
    background: #fff;
    padding: .8rem 1rem;
    border-radius: 1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-self: center;
    color: #B3B3B3;
    position: relative;
    cursor: pointer;

    &::before{
        content: "${(props: IBell) => props.count}";
        height: 1rem;
        width: 1rem;
        background: #FF5749;
        border: 3px solid #fff;
        position: absolute;
        top: 20%;
        left: 50%;
        font-size: .6rem;
        display: grid;
        place-content: center;
        color: #fff;
        border-radius: 50%;
        font-weight: 700;
    }
`;
export default NotificationBell
