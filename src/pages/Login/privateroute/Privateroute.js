import React from 'react';
import { Redirect, Route } from 'react-router';
import Useauth from '../../../context/useauth';

const Privateroute = ({children,...rest}) => {
    const {user} = Useauth()
    return (
       <Route 
       
       {...rest}
       render={({ location }) =>
         user.email ? (
           children
         ) : (
           <Redirect
             to={{
               pathname: "/login",
               state: { from: location }
             }}
           />
         )
       }
       >

       </Route>
    );
};

export default Privateroute;