import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './notfoun.css'

const Notfound = () => {
    return (
        <div className="notfound-main">
            <Container>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="nt-h1"> 404 error</h1>
                        <h5 className="nt-h5">page not found</h5>
                        <Link to="/home" style={{ textDecoration: 'none' }} ><button className="enroll-btn text-center d-block mx-auto mt-3">back to home</button></Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Notfound;