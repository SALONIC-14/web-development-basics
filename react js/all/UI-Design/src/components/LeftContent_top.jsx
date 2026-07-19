import React from 'react'
import LeftContent_bottom from './LeftContent_bottom'

const LeftContent_top = () => {
  return (
     <div className=' flex flex-col justify-between h-[86.5vh] w-88 '>
                <div>
                    <div className='font-bold font-serif text-4xl pt-9.5 px-9.5 m-1.5'> Prospective <br className='font-extrabold' />customer <br />segmentation</div>
                    <p className=' text-[#3b3c36bf] font-normal font-sans text-[14px] pt-1.5 px-9.5 m-1.5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, vitae qui consectetur id nisi ullam placeat repellat, vero reiciendis deserunt nemo delectus eaque.
    
                    </p>
                </div>
                <LeftContent_bottom/>
            </div>
  )
}

export default LeftContent_top
