import React from 'react'
import './featured.css'
import Imga from '../Banner/image1.png'
import Imgb from '../Banner/image2.png'
import Imgc from '../Banner/image3.png'
const featured = () => {
  return (
    <>
      <div className='container_featured0'>
        <div className='head'><h3>Featured Deals</h3></div>
        <div className='contaier_featured'>
          <div className='img_feat1'><img src={Imga} alt='ereor' /></div>
          <div className='img_feat2'><img src={Imgb} alt='error' /></div>
          <div className='img_feat3'><img src={Imgc} alt='error' /></div>
        </div>
      </div>
    </>
  )
}

export default featured