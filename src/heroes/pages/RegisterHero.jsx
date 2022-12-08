import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export const RegisterHero = () => {

  const {img, superhero, characters, onChange} = useForm({
    superhero: '',
    characters: '',
  });
  const [files, setFiles] = useState(null);

  const onInputSubmit = async (value) => {
    value.preventDefault();
    if((superhero.trim().length <= 1 || characters.trim().length <= 1)){
      alert('you must enter all dates')
      return;
    }; 

    if(!files) return
    const formData = new FormData();
    formData.append('image', files);
    formData.append('superhero', superhero);
    formData.append('characters', characters);
    console.log(formData);
    const token = localStorage.getItem('token');
    const resp = await fetch('http://localhost:8080/list',{
      method: 'POST',
      headers: {
        'x-token': token,
      },
      body: formData
    })
    console.log('first')
    const data = await resp.json();

    console.log(data);

  }
  const handleSend = (data) => {
    console.log(data);
    setFiles(data.target.files[0])
  }

  return (
    <>
        <h1>Register Hero</h1>
        <div className="row justify-content-center">
            <div className="col-7">
              <div className="row justify-content-center">
                <div className="card p-3">
                  <div className="col">
                  <form onSubmit={onInputSubmit} id='ff'>
                  <input 
                    type="text" 
                    placeholder="superhero"
                    className="form-control mb-2"
                    name="superhero"
                    value={superhero}
                    onChange={onChange}
                    />
                  <input 
                    type="text" 
                    placeholder="characters"
                    className='form-control mb-2'
                    name="characters"
                    value={characters}
                    onChange={onChange}
                    />
                  <input 
                    type="file" 
                    className="form-control mb-2"
                    name="img"
                    value={img}
                    onChange={handleSend}
                    />
                  <button type='submit' className='btn btn-primary w-100'>Register</button>
                  </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}


// JSON.stringify({
//   title: superhero,
//   description: characters,
// }),