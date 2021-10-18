import React from 'react';
import { Link } from 'react-router-dom';

const Sopmeservice = (props) => {
    const{img,name,desc} = props.service || {}
    return (
        <div className="col-md-4 mt-3 mb-5">
        <div className="col-md-12  shadow">
           <div className="card cards h-80 border ">
             <img src={img} className="card-img-top image mx-auto w-100" alt="..."/>
             <div className="card-body text-center">
               <h5 className="card-title">{name}</h5>
              <p className ="details">{desc}</p>
     
            <div className="d-flex justify-content-between align-items-center mt-2">
            <Link to ="/Notfound">
             <button className="enroll-btn"><i class="fas fa-layer-group"></i> <span className="ms-1"> read more</span></button>
             </Link>
            </div>
           </div>
               </div>
               </div>
        </div>
    );
};

export default Sopmeservice;