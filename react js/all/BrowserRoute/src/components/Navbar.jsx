import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    let Navi=useNavigate()
    return (

        <div className='flex justify-between bg-black w-screen h-18'>

            <div>
                <div className=' flex font-bold text-2xl items-center'>
                    <button onClick={()=>{Navi(-1)}} className='transition: transform active:scale-95'>Back</button>
                    <button onClick={()=>{Navi(+1)}} className='transition: transform active:scale-95'>Next</button>
                    <img className='h-17 ml-5 w-17' src="https://tse3.mm.bing.net/th/id/OIP.TZbQVOG1mM-K1dAM1DUF6QAAAA?r=0&pid=Api&h=220&P=0" alt="" />
                    <div className='text-2xl font-bold  text-red-600 ml-4'>Sheriyans</div>
                </div>
                
            </div>
            <div className='flex gap-7 mr-30 items-center'>

                <Link className='font-bold text-red-600' to='/'>Home</Link>
                <Link className='font-bold text-red-600' to='/about'>About us</Link>
                <Link className='font-bold text-red-600' to='/contact'>Contact</Link>
                <Link className='font-bold text-red-600' to='/Product'>Product</Link>
                
            </div>

        </div>
    )
}


export default Navbar
