import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Features from './Components/Features'
import About from './Components/About'
import Pricing from './Components/Pricing'
import NewsLetter from './Components/NewsLetter'
import Footer from './Components/shared/Footer'


function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Features />
    <About/>
    <Pricing />
    <NewsLetter />
    <Footer/>
    </>
  )
}

export default App