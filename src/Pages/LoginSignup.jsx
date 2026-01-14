import React from 'react'
import './CSS/Loginsignup.css'
export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>SIGN UP</h1>
        <div className="login-signupfields">
          <input type='text' placeholder='Your Name'/>
          <input type='text' placeholder='email address'/>
          <input type='password' placeholder='password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''/>
          <p>By continuing , I agree to the terms of use & privacy policy.</p>
        </div>

      </div>
    </div>
  )
}
