import React from 'react';
import { useEffect, useState } from 'react'
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import WelcomePopup from '../components/extras/WelcomePopup';

import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CTASection from '../components/home/CTASection';


export default function Home() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const check = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    check()
    document.addEventListener("fullscreenchange", check)

    return () =>
      document.removeEventListener("fullscreenchange", check)
  }, [])

  return (
    <>
      
      <WelcomePopup />

      <div className="home-page-wrapper" id="home">
        <Header />

        <main>
          <HeroSection />
          <FeaturesSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  )
}