import React from 'react'

const Button: React.FC<{onClick?: React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
    <span className="relative mt-6 inline-flex items-center px-8 py-3 overflow-hidden text-white bg-indigo-600 rounded group active:bg-indigo-500 focus:outline-none focus:ring">
    <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </span>
  
    <span className="text-sm font-medium transition-all group-hover:mr-4" onClick={onClick}>
      Next Pokemons
    </span>
  </span>)
} 

export default Button
