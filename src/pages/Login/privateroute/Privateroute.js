import React from 'react';
import { Spinner } from 'react-bootstrap';
import { unstable_renderSubtreeIntoContainer } from 'react-dom/cjs/react-dom.development';
import { Redirect, Route } from 'react-router';
import Useauth from '../../../context/useauth';
import './privateroute.css'


const Privateroute = ({children,...rest}) => {
    const {user,loading} = Useauth()
    console.log(loading);
    
   
    return (
 <div className="private-main">
{
  loading ?  <Spinner animation="border" variant="success" />  :


      <Route
      
      {...rest}
      render={({ location }) =>
       user?.email ? (
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
}
      </div>
      
    
      
    );
};

export default Privateroute;