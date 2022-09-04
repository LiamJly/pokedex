import React from 'react'
import CardButton from './CardButton'
import './pokemon.css'

interface Props{
    name:string
    id: number
    image : string
    type : string
} //creation de l'interface + passage des props l.15 dispense de devoir utiliser props.name ou props.type



function PokemonList(props : Props) {
  const {name, id, image, type} = props
    return (

        <a
        className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
        href="/"
      >
        <img
          className="object-cover w-full h-56"
          src={image}
          alt=""
        />
      
        <div className="p-6">
          <h5 className="text-xl font-bold ">
            {name} #{id}
          </h5>
      
          <p className="mt-2 text-sm text-gray-500">
            {type}
          </p>
      
          <CardButton/>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-flex items-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
      </a>
      
  )
}

export default PokemonList