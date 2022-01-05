import React from 'react';

import '../styles/Layout/Home.scss';

import Header from '../Components/Header';
import ButtonExplore from '../Components/ButtonExplore';

const Home = () => {
    return ( 
        <main className='home'>
            <Header />
            <section className='container'>
                <div className='content-section'>
                    <h5 className='sub-h-1'>So, you want to travel to</h5>
                    <h1>Space</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!</p>
                </div>

                <ButtonExplore />

            </section>
        </main>
        
     );
}
 
export default Home;