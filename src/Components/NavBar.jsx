import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components';

const Navigation = styled.nav`

    background-color: #5f5f5f35;  
    backdrop-filter: blur(5px);
    padding: 0 5rem;

    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 4rem;
        font-size: 18px;
        margin: 0 5rem 0 0;

        li a{
            color: white;
            text-decoration: none;
            font-weight: 400;
            font-size: 22px;
        }

        li{
            list-style: none;
            padding: 1.8rem 0 1.8rem 0;

        }

        li span{ 
            margin-right: 0.7rem;
            font-weight: bold;
        }
    }

    @media (max-width: 480px){
        ul{
            flex-direction: column;
            position: fixed;

        }
    }
`;

const NavBar = () => {

    let location = useLocation();
    console.log(location.pathname);
    
    return ( 
        <Navigation>
            <ul className='navigation'>
                <li>
                    <Link to = '/' id='00'><span>00</span>Home</Link>
                </li>

                <li >
                    <Link to = '/destination'id='01'><span>01</span>Destination</Link>
                </li>

                <li >
                    <Link to = '/crew' id='02'><span>02</span>Crew</Link>
                </li>

                <li >
                    <Link to = '/tech' id='03'><span>03</span>Technology</Link>
                </li>
            </ul>
        </Navigation>
     );
}
 
export default NavBar;