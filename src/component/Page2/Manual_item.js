import React from 'react'
import '../Page2/Manual_item.css'
import Arrow from '../Page2/arrow.png'
import Shareimg from '../Page2/share.png'
import Enquire from '../Page2/question.png'
import CAR_MANUAL from '../Page2/image8.png'
const Manual_item = () => {
  return (
    <div className='container-Manual'>
        <div className='manual_data'>
            <div className='data'>
            <div className='arrow'><img src={Arrow} alt=''/></div>
            <div className='content'>2020 KIA Seltos HTK Plus 1.5 Petrol Manual</div>
            </div>
            <div className='data1'>
                <div className='share'><button><img src={Shareimg} alt=''/><span>Share</span></button></div>
                <div className='Enquire'><button><img src={Enquire} alt=''/><span>Enquire</span></button></div>
            </div>
        </div>
        <div className='DETAIL'>
        <div className='arrow1'><img src={Arrow} alt=''/></div>
            <div className='content1'>Car Details</div>
        </div>
        
        <div className='CAR_manual'>
          <img src={CAR_MANUAL}alt=''/>
        </div>
    </div>
  )
}

export default Manual_item