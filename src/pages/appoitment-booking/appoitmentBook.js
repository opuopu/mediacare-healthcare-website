import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './appoitmentbook.css'
import { IconName,FcCheckmark,FcLeft } from "react-icons/fc";


const AppoitmentBook = () => {
    const {doctor} = useParams()
    const[doctors,setDoctors] = useState([])
    const [data,setData] = useState({})
    useEffect(()=>{

        fetch('/doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[doctor])

    useEffect(()=>{
        const signleDoctor = doctors.find(dc => dc?.name === doctor)
        setData(signleDoctor)
    },[doctors])

    return (
        <div>
            <Container>
                <div className="d-flex align-items-center justify-content-around flex-column flex-lg-row my-4">
                    <div className="img-mains">
                        <img className="img-dc" src={data?.img} alt="" />
                    </div>
                    <div>
                        <h2>{data?.name}</h2>
                        <p className="dc-des text-dark">thank you fro your appoitment our doctor {data?.name} will call you soon <FcCheckmark/></p>
                        <Link to="/home">
                             <button className="enroll-btn fw-bold"><FcLeft/> back to appoitment</button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AppoitmentBook;