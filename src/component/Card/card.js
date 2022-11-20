import React from 'react'
import '../Card/card.css'
import Imge from'../Card/image .png'
const card = () => {
  return (
    <div className='container_card'>
        <div> <img src={Imge} alt=''/></div>
        <div className='Vname'>Honda City</div>
    </div>
  )
}

export default card