import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'
import Events from '../components/events'
import Gallery from '../components/gallery'
import Footer from '../components/footer'

function Main() {
  return (
    <div>
       <div className="hero_area">
      <Navbar/>
    <Hero/>
    </div>
  <About/>  
 <Events/>


<Gallery/>

 <Footer/> 
    </div>
  )
}

export default Main