import React from 'react'
import { FaRegSnowflake } from "react-icons/fa";

const buttonInfo = [
    {id: 0, title: 'Features'},
    {id: 0, title: 'Reviews'},
    {id: 0, title: 'Pricing'}
];

function Navbar() {
  return (
    <header className="top-0 z-30 w-full p-4 sm:fixed backdrop-blur flex justify-between items-center">
      <div className='flex justify-center items-center'>
        <h1 className="text-zinc-100 text-2xl font-bold cursor-default mr-1">Particle</h1>
        <FaRegSnowflake size={20} color='white'/>/

      </div>

      <div className="flex w-1/5 justify-around items-center">
        {
            buttonInfo.map((item) => (
                <button id={item.id} className="text-zinc-400 hover:text-zinc-100">{item.title}</button>
            ))
        }
        
      </div>
    </header>
  )
}

export default Navbar
