import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-main p-5">
            <Container>
                <div className="row footer-m ">
                    

                
                    <div className="col-md-6">
<h1 className="footer-t fw-bold text-white mb-4">Medicare</h1>
<p> medicare in the United States is provided by many distinct organizations, made up of insurance companies, healthcare providers, hospital systems</p>
<Link to ="/appoitment">
             <button className="enroll-btn apoitnment-btn"> <i class="far fa-calendar-check"></i>  Appoitment now</button>
             </Link>
                    </div>
                    <div className="col-md-3">
                        <h2 className="text-white fw-bold">pages</h2>
                        <h5 className="text-white">about</h5>
                        <h5 className="text-white">faQ</h5>
                        <h5 className="text-white">service</h5>
                        <h5 className="text-white">contact</h5>
                        <h5 className="text-white">doctor</h5>
                    </div>
                    <div className="col-md-3">
<h2 className="text-white fw-bold">address</h2>
<h5 className=" text-white">medicare private hospital limited</h5>
<p className="text-white">Plot-9, Road-4, Section -7, <br />Mirpur-Dhaka 1216 <br /> Phone: 01872650688, 01872657167.
 </p>
                    </div>
                    <div className="footer-last row mt-5 pb-3">
                        <p className=" text-white col-md-6">Copyright © 2021 Medicare | Powered by Risegraph</p>
                        <div className="d-flex col-md-6 justify-content-end ">
                        <p className="mx-3"><i className="fab fa-facebook"></i> </p>
                        <p><i class="fab fa-twitter"></i></p>
                        <p className=" mx-3"><i className="fab fa-youtube"></i></p>

                        </div>
                    </div>
                 
                </div>
               
            </Container>
        </div>
    );
};

export default Footer;