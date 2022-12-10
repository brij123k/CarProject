import React from 'react'
import Banner from '../Banner/Banner1'
import Header from '../Header/header'
import Featured from '../Banner/Featured'
import Card from '../Card/card'
import Page from '../Page2/Manual'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
const home = () => {
  return (
    <div>
      
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <>
                <Banner/>
                <Featured/>
                <Card/>
              </>
            } />

            <Route path='/info' element={
              <Page/> 
            }/>

          </Routes>

        </BrowserRouter>

        {/* <Page/> */}
    </div>
  )
}

export default home