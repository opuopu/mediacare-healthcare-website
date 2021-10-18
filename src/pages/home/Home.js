import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Carousels from './carousel/Carousel';
import Sopmeservice from './cart/Sopmeservice';
import './home.css'

const Home = () => {
    const [services,setservices] = useState([])
   useEffect(()=>{
       fetch('./servicess.JSON')
       .then(res =>res.json())
       .then(data =>setservices(data))
   },[])
    const sliced = services.slice(0,3)
    console.log(sliced);
    return (
        <div>
         <Carousels></Carousels>

         <Container>
             <div className="row my-4">
<div className="col-md-4">
    <div className="parts mt-2">
        <h1>Professional staff</h1>
        <p>A professional employee is a person who works in a field of specialty that <br /> requires advanced education or training</p>
        <button>read more</button>
    </div>
</div>
<div className="col-md-4 mt-2">
    <div className="parts">
        <h1>Affordable prices</h1>
        <p>our all services have less prices. so you <br /> can get all of them... <br />all services have less prices contact with us</p>
        <button>view pricelist</button>
    </div>
</div>
<div className="col-md-4 mt-2">
    <div className="parts">
        <h1>Consult our doctors</h1>
        <p>Experienced & internationally trained Praava Family Medicine Doctors and Specialists are available for consultation with just a click of a button</p>
        <button>concult doctor</button>
    </div>
</div>
             </div>


             {/* services */}
             <h1 className="services-title text-center">Services Available</h1>
             <div>
                 <div className="row ">
                     {
                         services?.map(service =><Sopmeservice service={service} key={service.id}/>)
                     }
                 </div>
             </div>
         </Container>
        </div>
    );
};

export default Home;