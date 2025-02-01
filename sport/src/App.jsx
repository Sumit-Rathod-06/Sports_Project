
import BentoGrid from "./components/BentoGrid"
import Hero from "./components/Hero"
import ProductCarousel from "./components/ProductCarousel"

import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import contacts from "./contacts";
import SponsorsSection from "./components/SponsorsSection";
import Community from "./components/Comunity";
import Navbar from "./components/Navbar"
import Bg from "./components/Bg"


function App() {

  return (
    <>

    <Hero/>
    <BentoGrid/>
    <ProductCarousel/>

    <div>
      <SponsorsSection
      />
      <Footer />
    </div>
      <div>
          <Navbar/>
          <Bg/>
      </div>

    </>
  )
}

export default App
