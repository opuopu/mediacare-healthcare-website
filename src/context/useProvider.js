



import React, { createContext, useContext } from 'react';
import Usefirebase from '../firebase/Usefirebase';
export const authcontext = createContext()
const firebase = Usefirebase()
const authProvider = ({children}) => {
    return (
     <authcontext.Provider value={firebase}>
{children}
     </authcontext.Provider>
    );
};

export default authProvider;