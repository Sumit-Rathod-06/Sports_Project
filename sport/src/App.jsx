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
