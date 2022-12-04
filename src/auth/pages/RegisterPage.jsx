import React from 'react'
import { useNavigate } from 'react-router-dom'

export const RegisterPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/login', {
      replace:true,
    })
  }

  return (
    <>
        <h1>Register Page</h1>
        <hr />
        <button className='btn btn-outline-primary' onClick={onLogin}>Login</button>
    </>
  )
}
