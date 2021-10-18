import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './login.css'
import loginimg from '../../image/login.jpg'
import Fireuse from '../../hooks/Fireuse';
import Useauth from '../../context/useauth';
import { Link } from 'react-router-dom';
import { IconName,FcGoogle } from "react-icons/fc";

const Login = () => {
    // const[email,setemail] = useState('')
    // const [password,setpassword] = useState('')
    const {user,googlesign,signinuser,setemail,setpassword} = Useauth()
    console.log(user);
 
    const handleemail = (e) =>{
        setemail(e.target.value)
    }
    const handlepassword = (e) =>{
        setpassword(e.target.value)
        console.log(e.target.value);
    }
    
    return (
       

<div className="login-main ">

    <Container>
        <div className="row align-items-center">
            <div className="col-md-6">
                <h1 className="lr-title">Login here</h1>
          
          
            <input type="email" name="" id="" placeholder="enter your email" onBlur={handleemail} required />
                <br /> <br /> 
<input type="password" placeholder="enter your password" onBlur={handlepassword}  required />     <br />  <br />
<input type="submit" className="login-register-btn" onClick={()=>signinuser()} value="Login here" /> <br />  <br />

{/*   
            <button onClick={googlesignin}>google</button> */}
            <button onClick={googlesign} className="google-btn"> <FcGoogle/> google sign in</button>
          <Link to="/register"style={{ textDecoration: 'none', color: 'white' }} >  <p className="text-info fw-bold mt-2">are you new here? register now</p></Link>
               
            </div>
            <div className="col-md-6">
<img src={loginimg} className="img-fluid" alt="" />
            </div>
        </div>
    </Container>
</div>
    );
};

export default Login;