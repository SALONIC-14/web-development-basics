import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className='flex bg-pink-400 justify-between'>
            <div>
                Tailwind css
            </div>
            <div className='flex gap-2'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About us</Link>
                <Link to='/contact'>Contact</Link>
            </div>

        </div>
    )
}

export default Nav
