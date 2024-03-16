import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const description = [
    {'Hobby': {
        '1': 'biubinoinio'
    }},
    {'Pro': {

    }},
    {'Enterprise': {

    }},
]

function Card({props}) {
    return (
        <div className="bg-zinc-950 h-full w-3/12 border-[1px] rounded-md border-zinc-200 flex flex-col p-5 mx-3">
            <h1 className="text-zinc-200 font-semibold ">{props.title}</h1>
            {
                props.title === "Hobby" 
                ? 
                <p className="text-zinc-200 font-bold text-[3em]">{props.price}</p>
                :
                <div className="flex items-baseline">
                    <p className="text-zinc-200 font-bold text-[3em]">${props.price}</p>
                    <p className="text-zinc-200">/month</p>
                </div>
            }
            <p className="text-zinc-200 mt-6">{props.description}</p>

            <div className=" mt-5">
                <p>'cdmocm</p>
                <p>'cdmocm</p>
                <p>'cdmocm</p>
                <p>'cdmocm</p>
                <p>'cdmocm</p>
                <p>'cdmocm</p>
                <p>'cdmocm</p>
                <p>'cdmocm</p>
                <p>'cdmocm</p>
                <p>'cdmocm</p>
                <p>'cdmocm</p>
            </div>
            
            <button 
                className="text-black justify-between items-center flex border
                 bg-white p-2 rounded-md font-semibold mt-4 px-3 hover:bg-black hover:text-white hover:border-white"
            >
                {props.button}
                <BsArrowRight size={20}/>
            </button>
        </div>
    )
}

export default Card
