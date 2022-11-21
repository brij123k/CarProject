import React from 'react'
import '../Page2/car_data.css'
import CarIcon1 from '../Page2/caricon1.png'
import CarIcon2 from '../Page2/caricon2.png'
import CarIcon3 from '../Page2/caricon3.png'
import CarIcon4 from '../Page2/caricon4.png'
import CarIcon5 from '../Page2/caricon5.png'
const car_data = () => {
  return (
    <div className='container_cardata'>
        <div className='car_details'>
            <div className='Overview'>Overview</div>
            <div className='Facilities'>Facilities</div>
        </div>
        <div className='carname'>
            <div className='ICON_CAR'><img src={CarIcon1} alt=''/></div>
            <div className=''>Car Name</div>
            <div className=''>Tata Tigore</div>
            <div className=''>Car Name</div>
            <div className=''>Tata Tigore</div>
           
        </div>
        <div className='carname'>
            <div className='ICON_CAR'><img src={CarIcon2} alt=''/></div>
            <div className=''>Fuel Type</div>
            <div className=''>Petrol</div>
            <div className=''>Fuel Type</div>
            <div className=''>Petrol</div>
            
        </div>
        <div className='carname'>
            <div className='ICON_CAR'><img src={CarIcon3} alt=''/></div>
            <div className=''>Price</div>
            <div className=''>₹3,20,000</div>
            <div className=''>Price</div>
            <div className=''>₹3,20,000</div>
            
        </div>
        <div className='carname'>
            <div className='ICON_CAR'><img src={CarIcon4} alt=''/></div>
            <div className=''>Car Age</div>
            <div className=''>2019</div>
            <div className=''>Car Age</div>
            <div className=''>2019</div>
            
        </div>
        <div className='carname'>
            <div className='ICON_CAR'><img src={CarIcon5} alt=''/></div>
            <div className=''>Kilometers</div>
            <div className=''>35,000</div>
            <div className=''>Kilometers</div>
            <div className=''>35,000</div>
            
        </div>
    </div>
  )
}

export default car_data