"use client"

import { motion, AnimatePresence, useInView } from "framer-motion"
import { useRef } from "react"
import BentoGrid from "./components/BentoGrid"
import Hero from "./components/Hero"
import ProductCarousel from "./components/ProductCarousel"
import Footer from "./components/Footer"
import SponsorsSection from "./components/SponsorsSection"
import Community from "./components/Comunity"
import Navbar from "./components/Navbar"
import Bg from "./components/Bg"

function AnimatedSection({ children, animation }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animation}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

const fadeInUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
}

const fadeInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
}

function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ backgroundColor: "#0f0f0f", margin: "0px", padding: "0px" }}>
          <Navbar />
          <Bg />
        </div>

        <AnimatedSection animation={fadeInUp}>
          <Hero />
        </AnimatedSection>

        <AnimatedSection animation={scaleIn}>
          <BentoGrid />
        </AnimatedSection>

        <AnimatedSection animation={fadeInLeft}>
          <ProductCarousel />
        </AnimatedSection>

        <div style={{ backgroundColor: "#0f0f0f" }}>
          <AnimatedSection animation={fadeInUp}>
            <Community />
          </AnimatedSection>

          <AnimatedSection animation={scaleIn}>
            <SponsorsSection />
          </AnimatedSection>

          <AnimatedSection animation={fadeIn}>
            <Footer style={{ backgroundColor: "#0f0f0f" }} />
          </AnimatedSection>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default App
