import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import '../styles/global.scss';

//Components

import Home from '../Layout/Home';
import Crew from '../Layout/Crew';
import Tech from '../Layout/Tech';
import Destiny from '../Layout/Destiny';

const App = () => {
    return (
       <Router>
           <Routes>
               <Route index path = '/' element = {<Home />} />
               <Route path = '/crew' element = {<Crew />} />
               <Route path = '/tech' element = {<Tech />} />
               <Route path = '/destination' element = {<Destiny />} />
           </Routes>
       </Router>
    );
}
 
export default App;