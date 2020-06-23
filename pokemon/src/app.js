import React from 'react';
import Poke from './poke';

const pokeList = [
  {
    name: "bulbasaur",
    image: {
      class: "poke-image",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      height: "100px",
      alt: "",
    },
    info: {
      types: "grass, poison",
      height: "30cm",
      weight: "15kg",
    },
    stats: {
      attack: 49,
      defense: 33,
      strength: 67,
    },
  },
  {
    name: "pikachu",
    image: {
      class: "poke-image",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
      height: "100px",
      alt: "",
    },
    info: {
      types: "electric",
      height: "13cm",
      weight: "20kg",
    },
    stats: {
      attack: 32,
      defense: 15,
      strength: 88,
    },
  },
  {
    name: "charmander",
    image: {
      class: "poke-image",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
      height: "100px",
      alt: "",
    },
    info: {
      types: "fire, normal",
      height: "44cm",
      weight: "79kg",
    },
    stats: {
      attack: 29,
      defense: 47,
      strength: 68,
    },
  },
];

const App = () => {
    return (
      <>
        <div className="poke-cards">
          {pokeList.map(pokemon => 
            <Poke class="poke" key={pokemon.name} poke={pokemon} />
            )};
        </div>
      </>
    );
}

export default App