import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { getHeroByName } from '../helpers/getHeroByName';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {

  const { textForm, onChange } = useForm({
    textForm: '',
  })

  const {search}= useLocation()
  const { q = ''} = queryString.parse(search)
  const navigate = useNavigate();
  const heroes = getHeroByName(q);
  const onInputSubmit = (value) =>{
    value.preventDefault();
    if(textForm.trim().length < 1) return;

    navigate(`?q=${textForm}`)

  }

  return (
    <>
        <div className="row">
          <div className="col-5">
            <h1>Search a Hero</h1>
            <hr />
            <form onSubmit={onInputSubmit}>
              <input 
                type="text" 
                placeholder='search a hero'
                className='form-control'
                name='textForm'
                value={textForm}
                onChange={onChange}
                />
                <button className='btn btn-outline-primary'>Search</button>
            </form>
          </div>
          <div className="col-7">
            <h1>Searching a hero</h1>
            <hr />
            {
              (q.length === 0) 
              ?
              <div className="alert alert-primary">
                Search a hero
              </div>
              : (heroes.length === 0) &&
              <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
            }
            {
              heroes.map(heroe => (
                <HeroCard key={heroe.id} {...heroe} />
              ))
            }
          </div>
        </div>
    </>
  )
}
