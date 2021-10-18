import React from 'react';
import { Container } from 'react-bootstrap';
import groupimg from "../../image/group.jpg"
import img1 from '../../image/img1.png'
import img2 from '../../image/img2.png'
import img3 from '../../image/img3.png'
import img4 from '../../image/img4.png'
import { IconName,FcApproval,FcCheckmark,FcRefresh } from "react-icons/fc";
import './about.css'


const About = () => {
    return (
        <div className="main-about">
          <Container>
              <div className="row align-items-center">
                  <div className="col-md-6">
                      <img className='img-fluid'  src={groupimg} alt="" />
                  </div>
                  <div className="col-md-6">
                      <p className="text-info fw-bold">about us</p>
                      <h2 className="fw-bold">We started a medicare hospital from 1952</h2> 
                      <p className="text-black">Trusted results for Private Health Insurance Uk. Check Visymo Search for the best results! Unlimited Access. 100% Secure. Always Facts. Privacy Friendly  <br /> <br /> Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process.</p>
                  </div>
              </div>

              {/* next part */}
              {/* next part */}
              <h1 className="fw-bold mt-3">How we do it?</h1>
              <p className="text-dark">A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment</p>
              <div className="row align-items-center ">
                  <div className="col-md-6">
                   <img className="img-fluid" src={img1} alt="" />

                  </div>
                  <div className="col-md-6 my-2">
                          <h2 className="fw-bold">Tell Us Your Complaint</h2>
                        <p className="text-black">
                        The Tell us your story initiative is an online library of case studies from clinically-led service improvement projects in the NHS.

                        </p>
                        <button className="about-btns">read more</button>
                  </div>
              </div>
              {/*  */}
              <div className="row align-items-center ">
                  <div className="col-md-8">
           
                  <h2 className="fw-bold">The Doctor Will Immediately <br /> Provide Services</h2>
                        <p className="text-black">
                        A medical emergency is something that is, potentially, immediately life-threatening. <br /> GPs provide a wide range of health services
                        </p>
                        <button className="about-btns">read more</button>
                  </div>
                  <div className="col-md-4 my-2">
                       
                        <img className="img-fluid " src={img2} alt="" />
                  </div>
              </div>
              {/*  */}
              <div className="row align-items-center">
                  <div className="col-md-6">
        
                        <img className="img-fluid " src={img3} alt="" />
                  </div>
                  <div className="col-md-6 my-2">
                  <h2 className="fw-bold">
The Doctor Will Provide Input</h2>
                        <p className="text-black">
                        In case of long term case management, doctor will provide the patient and ... The establishment of an individualized plan of treatment with input
                        </p>
                        <button className="about-btns">read more</button> 
                     
                  </div>
              </div>

              {/* nest part */}
              <div className="row gap-3 justify-content-between">
                  <div className="col-md-3 shadow">
                      <div className="about-cart">
                  <h1> <FcApproval/></h1>
                          <h2>Professional</h2>
                          <p className="text-dark">We bring the right people together to challenge</p>
                      </div>
                  </div>
                  <div className="col-md-3 shadow">
<div className="about-cart">
    <h1><FcCheckmark/></h1>
  <h2>Update</h2>
  <p className="text-dark">in every time we update our condition by many distinct organizations</p>
</div>
                  </div>
                  <div className="col-md-3 shadow">
                     <div className="about-cart">
                     <h1><FcRefresh/></h1>
                      <h2>Guranteed</h2>
                      <p className="text-dark">in every time we guranteed to make sure our patient is safe</p>
                     </div>
                  </div>
              </div>
          </Container>
        </div>
    );
};

export default About;