import loginimg from '../../image/login.jpg'


import { IconName,FcGoogle } from "react-icons/fc";

import React, { useState } from 'react';
import Useauth from '../../context/useauth';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './register.css'
import {useLocation,useHistory } from 'react-router-dom'

const Register = () => {
   const history = useHistory()
   const location = useLocation()

  const redirect_url = location?.state?.from || '/home'
 
    const {user,googlesign,auth,updateProfile,createuser,error,setname,setemail,setpassword,setuser,seterror,username,FcGoogle,name} = Useauth()
    
 

    // redirect 
    const Register = () =>{
        createuser()
          .then(result=>{
            const user =result.user
            setuser(user)
            history.push(redirect_url)
            seterror('sign up successfulll')
        updateProfile(auth.currentUser,{
            displayName:name
        })
        .then(result=>{})
          
           
        })
    }

    
    const handleemail = (e) =>{
        setemail(e.target.value)
    }
    const handlepassword = (e) =>{
        setpassword(e.target.value)
        
    }
    const handlename = (e) =>{
setname(e.target.value)

    }

    
   

       
    
    return (
        <div>
            <Container>
        <div className="row align-items-center mt-5">
            <div className="col-md-6 g-5">
                <h1 className="lr-title">please register now</h1>
          
          <input type="text" placeholder="enter your name" onBlur={handlename} /> <br /> <br />
            <input type="email" name="" id="" placeholder="enter your email" onBlur={handleemail} required />
                <br /> <br /> 
<input type="password" placeholder="enter your password" onBlur={handlepassword}  required />     <br />  <br />
<input type="submit" className="login-register-btn" onClick={Register} value="register now" />
<p className="text-danger">{error}</p>


        
          <Link to="/login" style={{ textDecoration: 'none', color: 'white' }} >  <p className="text-info fw-bold mt-2">already registered?log in now</p></Link>
               
            </div>
            <div className="col-md-6">
<img src={loginimg} className="img-fluid" alt="" />
            </div>
        </div>
    </Container>
        </div>
    );
};

export default Register;