import React, { useState } from 'react';
import "../styles/SignupForm.css"

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password
        }
      })
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Signup successful:', data);
    } else {
      console.error('Signup failed:', data);
    }
  };

  return (
    <form
    className='sign-up'
    onSubmit={handleSubmit}>
      <div>
        <input
          className='inputs'
          placeholder='Email'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          className='inputs'
          placeholder='Password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
