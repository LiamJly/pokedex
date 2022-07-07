import { Card } from "@mui/material"
import React from "react"
import { Pokemon } from "../interface"
import "./pokemon.css"


interface Props {
  pokemons: Pokemon[]
}

const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons } = props

  return (
    <>
      <section className="collection-container">
        {pokemons.map((pokemon) => {
          return (
            <Card>
              {pokemon.id}
              </Card>
          )
        })}
      </section>
    </>
  )
}

export default PokemonCollection