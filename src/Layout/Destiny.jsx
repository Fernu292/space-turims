import React from 'react';
import '../styles/Layout/Destiny.scss';

import Header from '../Components/Header';
import NavDestiny from '../Components/DestiniNav';

//Data 
import Data from '../data.json';

const Destiny = () => {
    console.log(Data);

    return ( 
        <main className='destiny'>
            <Header />
            <section className='container'>
                <div className='content-section'>
                    <div>
                        <h5 className='sub-h-1'><span>01</span> Pick your Destination</h5>
                        
                        <img src='' alt='destiny' />
                    </div>
                    
                    <div>
                        <NavDestiny />
                    </div>
                </div>

            </section>
        </main>
    );
}
 
export default Destiny;