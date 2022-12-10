import React from 'react'
import '../Page2/car_data.css'
import CarIcon1 from '../Page2/caricon1.png'
import CarIcon2 from '../Page2/caricon2.png'
import CarIcon3 from '../Page2/price.svg'
import CarIcon4 from '../Page2/caricon4.png'
import CarIcon5 from '../Page2/caricon5.png'
const car_data = () => {
  return (
    <div className='container_cardata'>
        <div className='container_cardata_item'>
            <div className='car_details'>
                <div className='Overview'>Overview</div>
                {/* <div className='Facilities'>Facilities</div> */}
            </div>
            <div className='carname'>
                <div className='car_detail'>
                    <img src={CarIcon1} alt=''/>
                    <div className=''>Car Name</div>
                    <div className='car_detail_val'>Tata Tigore</div>
                </div>
                <div className='car_detail'>
                    <img src={CarIcon2} alt=''/>
                    <div className=''>Fuel Type</div>
                    <div className='car_detail_val'>Petrol</div>
                </div>

                <div className='car_detail'>
                    <img src={CarIcon3} alt=''/>
                    <div className=''>Price</div>
                    <div className='car_detail_val'>₹3,20,000</div>
                </div>
                <div className='car_detail'>
                    <img src={CarIcon4} alt=''/>
                    <div className=''>Car Age</div>
                    <div className='car_detail_val'>2019</div>
                </div>
                <div className='car_detail'>
                    <img src={CarIcon5} alt=''/>
                    <div className=''>Kilometers</div>
                    <div className='car_detail_val'>35,000</div>
                </div>
            </div>
        </div>
        
        <div className='container_cardata_item'>
            <div className='car_details'>
                <div className='Overview'>Overview</div>
                {/* <div className='Facilities'>Facilities</div> */}
            </div>
            <div className='carname'>
                <div className='car_detail'>
                    <img src={CarIcon1} alt=''/>
                    <div className=''>Car Name</div>
                    <div className='car_detail_val'>Tata Tigore</div>
                </div>
                <div className='car_detail'>
                    <img src={CarIcon2} alt=''/>
                    <div className=''>Fuel Type</div>
                    <div className='car_detail_val'>Petrol</div>
                </div>

                <div className='car_detail'>
                    <img src={CarIcon3} alt=''/>
                    <div className=''>Price</div>
                    <div className='car_detail_val'>₹3,20,000</div>
                </div>
                <div className='car_detail'>
                    <img src={CarIcon4} alt=''/>
                    <div className=''>Car Age</div>
                    <div className='car_detail_val'>2019</div>
                </div>
                <div className='car_detail'>
                    <img src={CarIcon5} alt=''/>
                    <div className=''>Kilometers</div>
                    <div className='car_detail_val'>35,000</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default car_data