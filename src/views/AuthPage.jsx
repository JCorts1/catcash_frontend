import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import "../styles/SignupForm.css"

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

  return (
    <div className="authentication-form">
      {/* Wrapper for buttons */}
      <div className="button-group">
        <button
          className='btn-selector-default'
          onClick={() => setIsLogin(true)}
          disabled={isLogin}
        >
          Login
        </button>
        <button
          className='btn-selector-default'
          onClick={() => setIsLogin(false)}
          disabled={!isLogin}
        >
          Sign-Up
        </button>
      </div>

      {/* Display either LoginForm or SignupForm */}
      {isLogin ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default AuthPage;
