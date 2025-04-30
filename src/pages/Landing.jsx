import React from 'react'
import '../cssfiles/landing.css'
import { useNavigate } from 'react-router-dom'


function Landing() {
    const navigate = useNavigate();
  return (
    <div className='index'>
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit.</p>
        <div className='buttons'>
            <button id='btn1' onClick={()=>navigate('/Signup')}>Create Account</button>
            <button id='btn2' onClick={()=>navigate('/Login')}>Already Registered? Login</button>
        </div>
    </div>
  )
}

export default Landing