import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

  return (
    <div>
      <button onClick={() => setIsLogin(true)}>Login</button>
      <button onClick={() => setIsLogin(false)}>Signup</button>

      {isLogin ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default AuthPage;
