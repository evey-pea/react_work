import React from 'react';
import InfoItem from './info';

const PokeInfo = (props) => {
    const info = props.pokeInfo; 
    
    const infoList = [];
    for (const [key,value] of Object.entries(info)) {
        infoList.push([key,value]);
    };
    
    return (
      <div className="poke-info">
        {infoList.map((infoItem) => (
          <InfoItem info={infoItem} />
        ))}
      </div>
    );
}

export default PokeInfo;