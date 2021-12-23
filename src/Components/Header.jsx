
import React from 'react';
import styled from 'styled-components';

import Logo from '../assets/shared/logo.svg';
import NavBar from './NavBar';

const HeaderNav = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 5rem 0 0 3rem;
    img{
        display: flex;
        justify-content: center;
        object-fit: contain;
    }

    hr{
        display: flex;
        flex-direction: column;
    }
`;

const Header = () => {
    return ( 
        <HeaderNav>
            <img src= {Logo} alt="" />
            <hr />
            <NavBar />
        </HeaderNav>
    );
}
 
export default Header;