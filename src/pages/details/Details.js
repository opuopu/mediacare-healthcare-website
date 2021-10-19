import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './details.css'
import { IconName,FcDownRight } from "react-icons/fc";
import { Link } from 'react-router-dom';


const Details = () => {
    const {id} = useParams()
    const[details,setdetails] = useState([])
    const [abouts,setabouts] = useState({})

    useEffect(()=>{
        fetch('/servicess.JSON')
        .then(res=>res.json())
        .then(data=>setdetails(data))
    },[id])
    useEffect(()=>{
      const about = details?.find(detail=>detail?.id===id)
      setabouts(about)
     
    },[details])
    const {desc,img,name} = abouts || {}
    return (
        <div >
            <Container>
                <div className="details-main">
                <h1 className="text-center"> <FcDownRight/> details</h1>
                </div>
                <div className="row py-4 align-items-center">
                    <div className="col-md-6 col-sm-12">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h2 className="fw-bold">{name}</h2>
                        <p className="text-dark">{desc}</p>
                        <Link to="/home">
                             <button className="enroll-btn">back to home</button>
                        </Link>
                    </div>
                </div>
              

            </Container>
        </div>
    );
};

export default Details;