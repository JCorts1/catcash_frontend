import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import "../styles/SignupForm.css"

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

  return (
    <div className="authentication-form">
      <button onClick={() => setIsLogin(true)}>Login</button>
      <button onClick={() => setIsLogin(false)}>Signup</button>

      {isLogin ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default AuthPage;
