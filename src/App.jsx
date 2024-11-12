import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Bussiness from './Component/Bussiness'
import Cards from './Component/cards'
import CardSection from './Component/CardSection'
import Views from './Component/Views'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Bussiness/>
      <Cards/>
      <CardSection/>
      <Views/>
      <Footer/>
    </div>
  )
}

export default App
