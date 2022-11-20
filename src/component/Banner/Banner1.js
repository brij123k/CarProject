import React from 'react'
import './Banner.css'
import Car1 from '../Banner/image.png'
import Search from "../Banner/search_button.png"
const Banner = () => {
  return (
    <>
      <div className='head_container'>
        <div className='container_baneer'>
          <div className='item'>
            <div>
              <div className='text_item'>Looking to Save more </div>
              <div className='text_item1'>on a used car?</div>
            </div>
          </div>
          <div className='text_item2'>
            <div>Get Bast Cars at Best Price</div>
          </div>
          <div className='searchbar'>
            <img src={Search} alt='' />
            <input  placeholder="Search car..." type="text" />
          </div>
        </div>
        <div className='banner_car'>
          <div className='banner_img'><img src={Car1} alt='' /></div>
        </div>
      </div>
    </>
  )
}

export default Banner