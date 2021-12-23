import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Navigation = styled.nav`
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);
    padding: 1rem 5rem;
    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 4rem;
        margin-right: 5rem;
        font-size: 18px;


        li a{
            color: white;
            text-decoration: none;
        }

        li{
            list-style: none;
        }

        li span{ 
            margin-right: 0.5rem;
            font-weight: bold;
        }
    }
`;

const NavBar = () => {
    return ( 
        <Navigation>
            <ul className='navigation'>
                <li>
                    <Link to = '/'><span>00</span>Home</Link>
                </li>

                <li>
                    <Link to = '/destination'><span>01</span>Destination</Link>
                </li>

                <li>
                    <Link to = '/crew'><span>02</span>Crew</Link>
                </li>

                <li>
                    <Link to = '/tech'><span>03</span>Technology</Link>
                </li>
            </ul>
        </Navigation>
     );
}
 
export default NavBar;