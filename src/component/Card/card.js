import React from 'react'
import '../Card/card.css'
import Imge from '../Card/image .png'
const card = () => {
  return (
    <div className='container_card'>
      <div className='Card'>
        <div className='img_card'> <img src={Imge} alt='' /></div>
        <div className='item_card'>
        <div className='Vname'>Honda City</div>
        <div className='price'>₹3,50,000</div>
        </div>
        <div className='item_card1'>
          <div className='Petrol'>Petrol</div>
          <div className='Petrol'>Manual</div>
          <div className='Petrol'>34,000km</div>
        </div>
      </div>
      <div className='Card'>
        <div className='img_card'> <img src={Imge} alt='' /></div>
        <div className='item_card'>
        <div className='Vname'>Honda City</div>
        <div className='price'>₹3,50,000</div>
        </div>
        <div className='item_card1'>
          <div className='Petrol'>Petrol</div>
          <div className='Petrol'>Manual</div>
          <div className='Petrol'>34,000km</div>
        </div>
      </div>
      <div className='Card'>
        <div className='img_card'> <img src={Imge} alt='' /></div>
        <div className='item_card'>
        <div className='Vname'>Honda City</div>
        <div className='price'>₹3,50,000</div>
        </div>
        <div className='item_card1'>
          <div className='Petrol'>Petrol</div>
          <div className='Petrol'>Manual</div>
          <div className='Petrol'>34,000km</div>
        </div>
      </div>
      <div className='Card'>
        <div className='img_card'> <img src={Imge} alt='' /></div>
        <div className='item_card'>
        <div className='Vname'>Honda City</div>
        <div className='price'>₹3,50,000</div>
        </div>
        <div className='item_card1'>
          <div className='Petrol'>Petrol</div>
          <div className='Petrol'>Manual</div>
          <div className='Petrol'>34,000km</div>
        </div>
      </div>
      <div className='Card'>
        <div className='img_card'> <img src={Imge} alt='' /></div>
        <div className='item_card'>
        <div className='Vname'>Honda City</div>
        <div className='price'>₹3,50,000</div>
        </div>
        <div className='item_card1'>
          <div className='Petrol'>Petrol</div>
          <div className='Petrol'>Manual</div>
          <div className='Petrol'>34,000km</div>
        </div>
      </div>
    </div>
  )
}

export default card