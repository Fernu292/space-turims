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

//Context
import NavBarContextProvider from '../context/NavBarContex';

const App = () => {
    return (
      <NavBarContextProvider>
        <Router>
           <Routes>
               <Route index path = '/' element = {<Destiny />} />
               <Route path = '/crew' element = {<Crew />} />
               <Route path = '/tech' element = {<Tech />} />
               <Route path = '/destination' element = {<Destiny />} />
           </Routes>
       </Router>
      </NavBarContextProvider>
    );
}
 
export default App;