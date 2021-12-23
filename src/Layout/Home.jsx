import React from 'react';
import styled from 'styled-components';

import '../styles/Layout/Home.scss';

import Header from '../Components/Header';
import ButtonExplore from '../Components/ButtonExplore';

const HomeContent = styled.section`
    margin-top: 12rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    div > h1{
        text-transform: uppercase;
    }

    div > p{
        font-size: 26px;
    }    
`;

const Home = () => {
    return ( 
        <main>
            <Header />
            <HomeContent className='container'>
                <div>
                    <h5 className='sub-h-1'>So, you want to travel to</h5>
                    <h1>Space</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!</p>
                </div>

                <ButtonExplore />

            </HomeContent>
        </main>
        
     );
}
 
export default Home;