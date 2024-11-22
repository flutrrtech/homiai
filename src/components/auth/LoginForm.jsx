import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic
    navigate('/dashboard')
  };

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
      <label name='email'>Email</label>
      <input 
        type="email" 
        placeholder="Email" 
        value={email}
        className='border border-black rounded-md p-2'
        onChange={(e) => setEmail(e.target.value)}
      />
      <label name='password'>Password</label>
      <input 
        type="password" 
        placeholder="Password"
        value={password}
        className='border border-black rounded-md p-2'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className='bg-[#01004F] text-white rounded-md p-2'>Login</button>
    </form>
  );
};

export default LoginForm;