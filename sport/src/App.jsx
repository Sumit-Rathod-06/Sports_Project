
import BentoGrid from "./components/BentoGrid"
import Hero from "./components/Hero"
import ProductCarousel from "./components/ProductCarousel"

import React, { useState } from "react";
import Footer from "./components/Footer";
import contacts from "./contacts";
import SponsorsSection from "./components/SponsorsSection";
import Community from "./components/Comunity";
import Navbar from "./components/Navbar"
import Bg from "./components/Bg"


function App() {

  return (
    <>

      <div style={{backgroundColor: "#0f0f0f", margin : "0px" , padding : "0px"}} >
          <Navbar/>
          <Bg/>
      </div>
    <Hero/>
    <BentoGrid/>
    <ProductCarousel/>

    <div style={{backgroundColor: "#0f0f0f"}}>
      <SponsorsSection
      />
      <Footer style={{backgroundColor: "#0f0f0f"}} />
    </div>
      

    </>
  )
}

export default App
