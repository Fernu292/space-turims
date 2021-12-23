
import React from 'react';
import styled from 'styled-components';

import Logo from '../assets/shared/logo.svg';
import NavBar from './NavBar';

const HeaderNav = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 5rem 0 0 3rem;
    align-items: center;
    img{
        display: flex;
        justify-content: center;
        object-fit: contain;
    }

    &>span{
        display: flex;
        border-bottom: solid white 1px ;
        width: 70%;
        align-items: center;
        margin-right: -2rem;
        margin-left: 2rem;
        z-index: 5;
    }
`;

const Header = () => {
    return ( 
        <HeaderNav>
            <img src= {Logo} alt="" />
            <span ></span>
            <NavBar />
        </HeaderNav>
    );
}
 
export default Header;