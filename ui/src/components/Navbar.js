import React from 'react'
import { FaRegSnowflake } from "react-icons/fa";
import { Link } from 'react-router-dom';

const buttonInfo = [
    {id: 0, title: 'Features', to: '/features'},
    {id: 0, title: 'Reviews', to: '/reviews'},
    {id: 0, title: 'Pricing', to: '/pricing'}
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
                <Link to={item.to} id={item.id} className="text-zinc-400 hover:text-zinc-100">{item.title}</Link>
            ))
        }
        
      </div>
    </header>
  )
}

export default Navbar
