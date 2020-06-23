import React from 'react'

const PokeName = (props) => {
    const name = props.pokeName;

    return (
        <div className="poke-name">{name}</div>
    );
}

export default PokeName;