import React from 'react'
import { cardData } from "../data/cardData";
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  
  return (
    <div className='flex '>
      <LeftContent />
      {
        cardData.map(function(elem){
          return <RightContent
            key={elem.id}
            id={elem.id}
            img={elem.img}
            content={elem.content}
            button_content={elem.button_content}
          />
        })
      }
    </div>
  )
}

export default Page1Content
