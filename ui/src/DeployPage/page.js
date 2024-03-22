import React, { useState } from 'react'
import axios from 'axios';


function DeployPage() {
    const [url, setUrl] = useState('');
    const [userId, setUserId] = useState('');
    const sendUrl = () => {
        axios.post("http://localhost:8000/deploy", {url: url}).then((res) => {
            console.log(res.data.userId);
            setUserId(res.data.userId);
        }).catch((err) => {
            console.log(err);
        })
    }
    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    return (
        <div 
        className="min-h-screen min-w-screen flex flex-col justify-center items-center
         bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30"
        >
            <p className="text-white">{userId}</p>
            <div className="flex w-screen justify-center items-center">
                <input 
                    onChange={handleUrlChange}
                    value={url}
                    placeholder='Enter the url to your project'
                    className='rounded-md py-3 px-5 outline-none w-1/5'
                />

                <button 
                    onClick={() => sendUrl()}
                    className='ml-2 bg-black p-3 rounded-md border-[1px] px-6 text-white hover:text-black hover:bg-zinc-200'
                >
                    <p className=''>Deploy</p>
                </button>
            </div>

        </div>
    )
}

export default DeployPage
