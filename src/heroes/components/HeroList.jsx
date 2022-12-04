import React from 'react'
import { getHeroByPublisher } from '../helpers/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({publisher}) => {

    const heroes = getHeroByPublisher(publisher)

    console.log(heroes)
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            heroes.map( hero => (
                <HeroCard key={hero.id} {...hero} />
            ))
        }
    </div>
  )
}
