import React, { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';
//import { Interface } from 'readline';
import PokemonCollection from './components/PokemonCollection';
import { Pokemon } from './interface';

interface Pokemons{
  name : string,
  url : string

}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
  async function getPokemon() {
      //recupere la liste de 20 pokemons
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
      console.log(res.data.results);
      console.log("nique ta mere pour voir")

      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        setPokemons((p) => [...p, poke.data])
      })
    }
getPokemon();
  }, [])
  

  return (
    <div className="App">
      <header className="pokemon-header">
        POKEDEX
      </header>
    <PokemonCollection pokemons={pokemons}/>
    </div>
  );
}

export default App;
