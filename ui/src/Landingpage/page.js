import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-transparent tracking-tight bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white text-[4em] font-bold">Code, Deploy, Scale.</h1>
        <p className="text-zinc-200">Deploy your models with ease and seamless integration using our scalable and efficient cloud infrastructure.</p>
      </div>

        <div className="flex w-2/5 justify-around items-center mt-10">
            <button className='text-zinc-200 px-28 p-3 border-[1px] rounded-md hover:text-black hover:bg-zinc-200'>
                Demo
            </button>
            <button className='text-black px-28 p-3 bg-zinc-200 rounded-md flex justify-center items-center hover:bg-transparent hover:text-zinc-200 hover:border-[1px]'>
                <Link to="/deploy" className='font-semibold'>Deploy</Link>      
                <BsArrowRight className='ml-2'size={20} />
            </button>
        </div>

    </div>
  )
}

export default LandingPage
