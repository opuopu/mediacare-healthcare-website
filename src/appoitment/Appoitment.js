import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import "./appoitment.css"
import mainimg from '../image/main-1.png'
import Doctors from './Doctors';
import { IconName,FcAdvance } from "react-icons/fc";
const Appoitment = () => {
const[doctors,setDoctors] = useState([])
useEffect(()=>{
    fetch('/doctors.json')
    .then(res=>res.json())
    .then(data=>setDoctors(data))
},[])
console.log(doctors);
    return (
        <div className="appoitment-main">
            <div className="appoitment">
<Container>
    <div className="row align-items-center">
        <div className="col-md-7">
            <p className='text-white'>our hospital</p>
            <h1 className="text-white fw-bold">
            We have experienced doctors
            </h1>
            <p>to appoitment doctor please click on the appoitment button. make sure you already have login</p>
            <button className="appo-btn">appoitment now</button>
        </div>
        <div className="col-md-5">
<img className="img-fluid" src={mainimg} alt="" />
        </div>
    </div>

    {/* doctors part */}
   

</Container>
            </div>
            <Container className="my-5">
                <h1 className="specialist-title"> <FcAdvance/>  our specialist</h1>
            <div className="row g-4">
     {
doctors.map(doctor=> <Doctors key={doctor.key} doctor={doctor}></Doctors>)
     }
 </div>
            </Container>
      
             <h5 className="text-info fw-bold ms-2">our overview</h5>
      
            <div className="appoitment-last">
              <Container>
            
              <div className="d-flex align-items-center justify-content-around flex-column flex-lg-row">
                    <div className="">
                        <h2 className="ap-title">350+</h2>
                        <p className="ap-desc">specialist doctor</p>
                    </div>
                    <div className="">
                        <h2 className="ap-title">
                            1250+
                        </h2>
                        <p className="ap-desc">high quality sits</p>
                    </div>
                    <div className="">
                    <h2 className="ap-title">50+</h2>
                    <p className="ap-desc">ambulance</p>
                    </div>
                </div>
              </Container>
            </div>
        </div>
    );
};

export default Appoitment;