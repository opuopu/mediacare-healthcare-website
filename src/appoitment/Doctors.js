import React from 'react';
import { Link } from 'react-router-dom';
import './doctor.css'

const Doctors = (props) => {
    const{img,name,spe} = props.doctor || {}
    return (
      
        
            <div className="col-md-3">
    <div className="card h-100 shadow">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title my-2">{name}</h5>
        <p className="card-text text-dark my-2">{spe}</p>
      </div>
      <Link to ="/appoitment"  style={{ textDecoration: 'none' }}>
             <button className="my-3  d-block mx-auto appoit-btn "> <i className="far fa-calendar-check"></i> Appoitment now</button>
             </Link>
    </div>
  </div>
        
       
    );
};

export default Doctors;