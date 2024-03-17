import React from 'react'
import "./CSS/LoginSignup.css"
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="email address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login"> Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuind I agree to terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup