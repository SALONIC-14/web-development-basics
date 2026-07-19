import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Axios = () => {
    const [show, setshow] = useState([])
    const getData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data)
        setshow(response.data)


    }
    return (
        <div className='flex '>
            <button onClick={getData} className='border-2 rounded border-black active:scale-95 transition-transformer  bg-red-600 m-8 text-2xl py-2 px-4 font-bold text-white' >Get Data by Axios</button>
            {show.map(function (elem, idx) {

                return(
                    <div key={idx} className='flex flex-col gap-3.5'>
                        <h1 className='text-[16px]  mx-1 font-bold'>{elem.username}</h1>
                    </div>
                );

            }

            )}

        </div>
    )
}

export default Axios
