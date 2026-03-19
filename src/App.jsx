import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Screen/Home'
import Footer from './components/Footer'
import GiftCards from './components/Screen/GiftCards'
// import Image from './assets/amazon_logo.png'

function App() {


  return (
    <>
      {/* <div className="flex justify-left ">
        <a href="">
          <img src={Image} alt="" className="w-32 h-auto" />
        </a>
      </div> */}
      <Header />
      {/* <Home /> */}
      <GiftCards />
      <Footer />

    </>
  )
}

export default App
