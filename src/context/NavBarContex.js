import React, {createContext, useState} from 'react';

export const NavBarContext = createContext();

const NavBarContextProvider = ({children})=>{

    return(
        <NavBarContext.Provider
            value={{

            }}
        >
            {children}
        </NavBarContext.Provider>
    )
}

export default NavBarContextProvider;