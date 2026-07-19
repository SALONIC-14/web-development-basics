import React from 'react'
import { Link} from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Product = () => {

  return (
    <div>
        <div className='flex gap-5 justify-center font-bold text-2xl'>
            <Link className='font-bold text-red-600' to='men'>Men</Link>
            <Link className='font-bold text-red-600' to='women'>Women</Link>
            
        </div>
      <h1 className='font-bold'>Product Page</h1>
      
      <Outlet />
    </div>
  )
}

export default Product
