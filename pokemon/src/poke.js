import React from 'react';
import PokeImage from './poke-image';
import PokeInfo from './poke-info'
import PokeName from './poke-name';
import PokeStats from './poke-stats';

const Poke = (props) => {
    const poke = props.poke;
    const image = poke.image;
    const info = poke.info;
    const name = poke.name;
    const stats = poke.stats
    
    return (
        <div className="poke">
            <PokeImage pokeImage={image} />
            <PokeInfo pokeInfo={info}/>
            <PokeName pokeName={name}/>
            <PokeStats pokeStats={stats}/>
        </div>
    );
}

export default Poke