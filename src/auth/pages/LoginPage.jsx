import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const onLogin = () => {
        login('oscar');
        const path = localStorage.getItem('path') || '/'
        navigate(path, {
            replace: true
        })
    }
    const onRegister = () => {
      navigate('/register', {
        replace: true
      })
    }
  return (
    <>
        <h1>Login Page</h1>
        <hr />  
        <button className='btn btn-outline-primary' onClick={onLogin}>Login</button>
        <button className='btn btn-outline-primary' onClick={onRegister}>Register</button>
    </>
  )
}
