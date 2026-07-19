import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-6 mx-7'>
            <div className="border-none bg-black text-white p-2 rounded-4xl uppercase font-normal text-[12px] font-sans tracking-[2px] transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
                Target Audience
            </div>
            <ul className='flex'>
                <li className='p-2 cursor-pointer font-[750] uppercase  text-[12px] font-sans tracking-[2px] hover:font-extrabold hover:text-[#1f1e1e] transition-all duration-300 ease-in-out hover:scale-105'>Digital</li>
                <li className='p-2 cursor-pointer font-[750] uppercase  text-[12px] font-sans tracking-[2px] transition-all duration-300 ease-in-out hover:scale-105'>Banking</li>
                <li className='p-2 cursor-pointer  font-[750] uppercase  text-[12px] font-sans tracking-[2px] transition-all duration-300 ease-in-out hover:scale-105'>Platform</li>
            </ul>
        </div>
    )
}

export default Navbar
