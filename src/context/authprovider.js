import React, { createContext } from 'react';
import Fireuse from '../hooks/Fireuse';

 export const authcontext = createContext()



 
 const Authprovider = ({children}) => {
  const firebase = Fireuse()
  return (
  <authcontext.Provider value={firebase}>
{children}
  </authcontext.Provider>
  );
};


export default Authprovider;