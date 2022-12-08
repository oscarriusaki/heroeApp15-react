import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const { onChange, password, correo } = useForm({
      correo:'',
      password: '',
    });
    const { getData, isLoading } = useFetch('http://localhost:8080/user');

    const onLogin = async () => {
        console.log(getData());
        const resp = await fetch('http://localhost:8080/login',{
          method: 'POST',
          headers: {
            'Content-Type':'application/json',
          },
          body: JSON.stringify( {
            "email":correo,
            "pas":password,
          })
        });
        const data = await resp.json();
        if(!data.token) return
        console.log(data)
        localStorage.setItem('token', data.token)
        login('oscar', data.token);
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

    const onInputSubmit = (value) => {
      value.preventDefault();
      
    }

  return (
    <>
        <h1>Login Page</h1>
        <hr />  
          <div className="row justify-content-center">
            <div className="col-7">
              <div className="card p-3">
                <div className="row p-3 justify-content-center">
                  <div className="col-12">      
                    <form onSubmit={onInputSubmit}>
                      <input 
                        type="text" 
                        placeholder='Correo'
                        className='form-control mb-3'
                        name='correo'
                        value={correo}
                        onChange={onChange}
                        />
                      <input 
                        type="password" 
                        placeholder='Password'
                        className='form-control mb-3'
                        name='password'
                        value={password}
                        onChange={onChange}
                        />
                        <button className='btn btn-outline-primary w-100 mb-1' onClick={onLogin}>Login</button>
                        {/* <button className='btn btn-outline-primary w-100' onClick={onRegister}>Register</button> */}
                        <div className="text-end">
                          <a type='submit' className='text-primary text-center' onClick={onRegister}>You don't have an account? register</a>
                        </div>
                    </form>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}
