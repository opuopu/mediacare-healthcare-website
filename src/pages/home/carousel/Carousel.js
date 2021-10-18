import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../image/slide01.jpg'
import slider2 from '../../../image/slide02.jpg'
import { Link } from 'react-router-dom';
import './carousel.css'

const Carousels = () => {
    console.log("done");
    return (
        <div>
            <Carousel>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider2}
      alt="Third slide"
    />

    <Carousel.Caption>
      
      <h3 className="fw-bold">The trusted and friendly medical professionals</h3>
  
      <p>We are committed to provide affordable services, without any compromise on the quality of service – so that you are able to remain happy.</p>
      <Link to ="/appoitment">
             <button className="enroll-btn apoitnment-btn"> <i className="far fa-calendar-check"></i>      Appoitment now</button>
             </Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="fw-bold">THE RIGHT PEDIATRICIAN</h3>
      <p>We at MediCare are always fully focused on helping your child and you to overcame any hurdle or any other problem.</p>
      <Link to ="/appoitment">
             <button className="enroll-btn apoitnment-btn"> <i className="far fa-calendar-check"></i> Appoitment now</button>
             </Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Carousels;