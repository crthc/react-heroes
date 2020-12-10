import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroeList = ({publisher}) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  // const heroes = ;

  return (
      <div className='card-columns animate__animated animate__fadeIn'>
        {
          heroes.map( hero => (
            <HeroCard 
              key={hero.id}
              {...hero}
            />
          ))
        }
      </div>
  )
}
