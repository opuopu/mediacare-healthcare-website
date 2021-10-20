import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from './service/Service';
import './service/services.css'
import mainImg from '../../image/main-2-2.png'
import { Link } from 'react-router-dom';

const Services = () => {
    const[services,setservice] = useState([])
    useEffect(()=>{
        fetch('/servicess.json')
        .then(res =>res.json())
        .then(data =>setservice(data))
    },[])
    return (
        <div>

            <div className="services-main">
                <Container>
<div className="d-flex align-items-center justify-content-around flex-column flex-lg-row">
    <div>
        <h1 className="text-white fw-bold">Our all services</h1>
        <p className="mt-2">hello sir mem. here is our all services. to read more please click on the button read more. thank you</p>
        <Link to="/appoitment">
                             <button className="enroll-btn fw-bold"> go to appoitment</button>
                        </Link>
    </div>
    <div>
        <img className="img-fluid" src={mainImg} alt="" />
    </div>
</div>
                </Container>
            </div>
            <Container>
            <h1 className="services-title text-center"> Services Available</h1>
                <div className="row">
                    {
                        services?.map(ser => <Service key={ser.id} service ={ser}></Service>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;