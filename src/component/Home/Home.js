import React from 'react'
import Banner from '../Banner/Banner1'
import Header from '../Header/header'
import Featured from '../Banner/Featured'
import Card from '../Card/card'
const home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Featured/>
        <Card/>
    </div>
  )
}

export default home