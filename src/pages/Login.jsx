import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import LoginModalBalloon from '../assets/login-modal-balloon.svg'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="login-page pt-24 pb-20  min-h-screen w-full flex justify-center items-center bg-[#F5F8FF]">
      <section className="login-modal min-w-[40%] rounded-lg flex flex-col items-center justify-between border border-black p-8 border-b-4 bg-white gap-2">
        <img src={LoginModalBalloon} 
          className='w-40 h-40'
        />
        <h1 className='text-3xl font-bold text-[#0F0F0F]'>Welcome to Homi.ai</h1>
        <span className='text-[#0F0F0F] text-opacity-80'>
          Please login to continue
        </span>

        <LoginForm />
        <hr className='rounded-3xl border border-black'/>
        <p className='w-full text-center text-[#0F0F0F]'>
          No account yet? <span className='text-lg font-bold hover:underline cursor-pointer' onClick={() => navigate('/signup')}>Sign Up</span>
        </p>
      </section>
    </div>
  );
};

export default Login;