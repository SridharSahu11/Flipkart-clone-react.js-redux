import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import flipkart from "../../../Images/flipkart.png"

const Login = () => {
  return (
    <div id='login-container'>
      <div id='login-left'>
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
        <img src={flipkart} alt='img' id='flipkart-img'/>
      </div>
      <div id='login-right'>
        <input type='text'  placeholder="Email/Mobil Number"/>
        <span>By continuing, you agree to Flipkart's <Link>Terms of Use</Link> and <Link>Privacy Policy.</Link></span>
        <button>Request OTP</button>
      </div>
    </div>
  )
}

export default Login