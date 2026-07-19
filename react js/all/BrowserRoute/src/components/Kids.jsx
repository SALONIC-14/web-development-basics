import React from 'react'
import { useParams } from 'react-router-dom'

const Kids = () => {

    const params=useParams()

  return (

    <div>
      This is {params.id} Collection
    </div>
  )
}

export default Kids
