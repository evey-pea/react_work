import React from 'react';
import Stat from './stat';

const PokeStats = (props) => {
    const stats = props.pokeStats
    
    let statList = [];
    for (const [key,value] of Object.entries(stats)) {
        statList.push([key,value]);
    };
        
    return (
        <div className="poke-stats">
          {statList.map(statItem => 
              <Stat stats={statItem}/>
          )}
        </div>
    );
} 

export default PokeStats;