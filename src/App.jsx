import React from 'react'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Services from './components/services'
import About from './components/about'
import Hero from './components/Hero'
import Tours from './components/tours'
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  )
}

export default App
