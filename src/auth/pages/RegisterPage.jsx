import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../context/AuthContext';

export const RegisterPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/login', {
      replace:true,
    })
  }

  const { login, user } = useContext(AuthContext);

  const { onChange, name, email, password } = useForm({
    name: '',
    email: '',
    password: ''
  });
  
  const [fetChInput, setFetChInput] = useState({
    data: null,
    isLoading: false, 
    isError: null,
  })

  // const [files, setFiles] = useState(null)

  // const selectedHandler = (e) => {
  //   console.log(e.target.files[0]);
  //   setFiles(e.target.files[0]);
  // }
  
  // const sendHandler = () => {
  //   if(!files){
  //     alert('you must upload an file')
  //     return;
  //   }
  //   const formData = new FormData();
  //   formData.append('image', files);

  //   fetch('http://localhost:8080/list/image',{
  //     method: 'POST',
  //     body: formData,
  //   })
  //   .then(resp => resp.text()) 
  //   .then(resp => console.log(resp))
  //   .catch(err => {
  //     console.error(err); 
  //   });
  //   document.getElementById('fileInput').value = null;
  //   setFiles(null);
  // }

  const onInputSubmit = async (value) => {
    value.preventDefault();
    if((name.trim().length <= 1) && (email.trim().length <= 1) && (password.trim().length <= 1)) return;

    const user = {
      first_name:name,
      email:email,
      pas:password
    }

    const resp = await fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await resp.json();

    console.log(data, 'this is the date');
    if((data.msg === 'successfully registrated') && (data.token.length >=1 ) ){

      login(name, email, password);
    }else{
      alert('Try again')
    }
    
  }

  return (
    <>
        <h1>Register Page</h1>
        <hr />
        <div className="row justify-content-center">
          <div className="col-7">
            <div className="card p-3">
              <div className="row p-3 justify-content-center">
                <div className="col-12">
                  <form onSubmit={onInputSubmit}>
                    <input 
                      type="text" 
                      placeholder='Enter your name'
                      className='form-control mb-3'
                      name='name'
                      value={name}
                      onChange={onChange}
                      />
                    <input 
                      type="email" 
                      placeholder='Enter your email'
                      className='form-control mb-3'
                      name='email'
                      value={email}
                      onChange={onChange}
                      />
                    <input 
                      type="password" 
                      placeholder='Enter your email'
                      className='form-control mb-3'
                      name='password'
                      value={password}
                      onChange={onChange}
                      autoComplete='off'
                      />
                  <button type='submit' className='btn btn-primary w-100 mb-1'>Register</button>
                  <a className='text-primary text-center' onClick={onLogin}>You have an account? login</a>
                  {/* <button className='btn btn-outline-primary w-100' onClick={onLogin}>Login</button> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}



{/* <div className="row justify-content-center">
<div className="col-7">
  <div className="card p-3">
    <div className="row justify-content-center">
      <div className="col-7">
        <input 
          id='fileInput'
          onChange={selectedHandler}
          type="file"
          placeholder='file'
          className='form-control'
          />
      </div>  
      <div className="col-2">
        <button onClick={sendHandler } type='button' className='btn btn-outline-primary'>Upload</button>
      </div>
    </div>
  </div>
</div>
</div> */}