import React from 'react'
import '../Page2/Manual_item.css'
import Arrow from '../Page2/arrow.png'
import Shareimg from '../Page2/share.png'
import Enquire from '../Page2/question.png'
const Manual_item = () => {
  return (
    <div className='container-Manual'>
        <div className='manual_data'>
            <div className='data'>
            <div className='arrow'><img src={Arrow} alt=''/></div>
            <div className='content'>2020 KIA Seltos HTK Plus 1.5 Petrol Manual</div>
            </div>
            <div className='data1'>
                <div className='share'><button><img src={Shareimg} alt=''/>Share</button></div>
                <div className='Enquire'><button><img src={Enquire} alt=''/>Enquire</button></div>
            </div>
        </div>
    </div>
  )
}

export default Manual_item