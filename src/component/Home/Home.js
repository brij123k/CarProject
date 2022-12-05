import React from 'react'
import Banner from '../Banner/Banner1'
import Header from '../Header/header'
import Featured from '../Banner/Featured'
import Card from '../Card/card'
import Page from '../Page2/Manual'
const home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Featured/>
        <Card/>
        {/* <Page/> */}
    </div>
  )
}

export default home