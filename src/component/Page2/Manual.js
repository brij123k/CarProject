import React from 'react'
import Header from '../Header/header'
import Manualitem from '../Page2/Manual_item'
import Slider from '../Page2/Slider/Slider'
import Cardata from '../Page2/car_data'
const Manual = () => {
  return (
    <div className='Manual'>
        <Header/>
        <Manualitem/>
        <Slider/>
        <Cardata/>
    </div>
  )
}

export default Manual