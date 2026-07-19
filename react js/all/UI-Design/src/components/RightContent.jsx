import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const RightContent = (props) => {
    return (
        // 



        <div className='relative h-[78.5vh] w-[96%]  mr-4.5 rounded-3xl overflow-hidden '>


            <div>
                <img src={props.img} alt="" srcset=""
                    className=" object-cover h-[78.5vh] " />


                <div className=" bg-white absolute top-7 left-5.75 w-8 h-8 rounded-full   flex justify-center  items-center font-[450] shadow-md">{props.id}</div>
            </div>

            <div>
                <p className='absolute top-66.5 left-5.75 p-3.5 text-amber-50 font-serif'>{props.content}</p>
                <button className='absolute top-101 left-5.75 p-2.5 mt-1.5 border-none rounded-full bg-blue-400 w-34 text-white font-bold tracking-wider'>{props.button_content}</button>
                <button className=' flex justify-center items-center absolute top-103 left-47.5 p-3.5 bg-blue-400 h-11 w-11 rounded-full '><FaArrowRight className="text-white text-xl " /></button>
            </div>








        </div>

    )
}

export default RightContent
// px-9.5 pb-7 m-1.5