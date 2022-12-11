import React from 'react'
import './header.css'
import Logo from '../Header/image1.png'
import Play from '../Header/image.png'
import Icon from "../Header/Icon-color.png"
const header = () => {
  return (
    <>
        <div className='container_header'>

            <div className='border'>
              <div className='call-icon'><img src={Icon} alt=""/> </div>
              <div className='border1'>
              <div className='en1'>Call for enquiry</div>
              <div className='num1'>+91 987 654 3210</div>
           </div>
           </div>
            <div className='logo_img'><img src={Logo} alt=''/></div>
            <div className='play_img'><img src={Play} alt=''/></div>
        </div>
    </>
  )
}

export default header