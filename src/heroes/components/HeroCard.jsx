import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const img = `assets/heroes/${id}.jpg`;

  return (
    <>
        <div className="row">
            <div className="col-5">
                <div className="card">
                    <img src={img} alt={superhero} className='img img-thumbnail' />
                </div>
            </div>
            <div className="col-7">
                <p>{superhero}</p>
                <p>{publisher}</p>
                <p>{alter_ego}</p>
                <p className='text-muted'>{first_appearance}</p>
                <Link to={`/heroe/${id}`} >Mass...</Link>
            </div>
        </div>
    </>
  )
}
