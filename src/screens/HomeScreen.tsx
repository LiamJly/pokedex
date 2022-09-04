import React, { useState, useEffect } from 'react';
import axios from "axios"
import '../App.css';
import { Grid } from '@mui/material';
//import { Interface } from 'readline';
import PokemonCollection from '../components/PokemonCollection';
import { Pokemon } from '../interface';
import Button from '../components/Button'
import Header from '../components/Header'

interface Pokemons {
  name: string,
  url: string

}

const HomeScreen: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("")

  useEffect(() => {

    async function getPokemon() {
      //recupere la liste de 20 pokemons
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=21&offset=0");

      setNextUrl(res.data.next)

      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        setPokemons((p) => [...p, poke.data])
      })
    }
    getPokemon(); //test putain
  }, [])

  const nextPage = async () => {
    let res = await axios.get(nextUrl)
    setNextUrl(res.data.next)
    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      setPokemons((p) => [...p, poke.data])
    })
  }
  
    return (
      <div>
        <Header/>
        <PokemonCollection pokemons={pokemons} />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button onClick={nextPage} />
        </Grid>
      </div>
    );
  }

export default HomeScreen