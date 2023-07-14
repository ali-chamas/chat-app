import React from 'react'
import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {
    const [err,setErr] = useState(false);
    const navigate = useNavigate();




  const handleSubmit=async (e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    

    try{
    await signInWithEmailAndPassword(auth, email, password)
    navigate("/")
    }catch(err){
      setErr(true)
    }
  };
    return (
        <div className=' formContainer'>
            <div className=' formWrapper  '>
                <span className='logo'>Just Friends!</span>
                <span className='title'>Sign In</span>
                <form onSubmit={handleSubmit}>
                    
                    <input type="email"  placeholder='email'/>
                    <input type="password" placeholder='password'/>
                   
                    
                    <button className=''>Sign In</button>
                    
                </form>
                <p>don't have an account? <Link to='/Register'>Register</Link></p>
            </div>
        </div>
      )
}

export default Login
