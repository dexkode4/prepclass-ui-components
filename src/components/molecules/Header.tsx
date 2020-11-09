import React from 'react';
import styled from 'styled-components';
import PrepLogo from '../atoms/PrepLogo';
import Search from "../atoms/Search";
import Coin from "../atoms/Coin";
import NotificationBell from "../atoms/NotificationBell";
import UserProfile from "../atoms/UserProfile";
import Toggle from '../atoms/Toggle';


function Header() {
    return (
        <Container>
            <PrepLogo/>
            <Search placeholder="Search Menu...." width="quaterSize" /> 
            <Toggle/>
            <Coin count={12}/>    
            <NotificationBell count={2} />
            <UserProfile username={"Akinloye Seun"} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    box-sizing: border-box;
    width: 100%;
    top: 0;
    & > * {
        align-self: flex-start;
    }

    & label {
        margin-right: -5rem;
    }

    & #coin{
        margin-right: -7rem;
    }
    & #alert{
        margin-right: -7rem;
    }
`;
export default Header;
