import { heroes } from "../../../../heroesApp14/src/heroes/data/heroes";

export const getHeroByPublisher = (publisher = '') =>{

    const data = ['DC Comics', 'Marvel Comics'];
    
    if(publisher.length === 0) return [];

    if(!data.includes(publisher)){
        throw new Error (`publisher is invaid, must have on of the ${data}`)
    }

    return (
        heroes.filter(hero => hero.publisher === publisher)
    )
}