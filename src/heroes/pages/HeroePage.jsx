import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/gerHeroById';

export const HeroePage = () => {

    const { id } = useParams();
    const hero = getHeroById(id);
    const navigate = useNavigate();
    
    const onBack = () => {
        navigate(-1);
    }

  return (
    <>
        <h1>Heroe Page</h1>
        <hr />
        <div className="row">
            <div className="col-5">
                <img src={`/assets/heroes/${hero.id}.jpg`} alt={hero.superhero} className='img img-thumbnail' />
            </div>
            <div className="col-7">
            <p><b>Superhero:</b> {hero.superhero}</p>
            <p><b>Publisher:</b> {hero.publisher}</p>
            <p><b>Alter_ego:</b> {hero.alter_ego}</p>
            {
                (hero.superhero === hero.characters) && (<p><b>Characters:</b> {hero.characters}</p>)
            }
            <p><b>First_appearance:</b> {hero.first_appearance}</p>
            
            <button 
                className='btn btn-outline-primary'
                onClick={onBack}
                >back
            </button>

            </div>
        </div>
    </>
  )
}
