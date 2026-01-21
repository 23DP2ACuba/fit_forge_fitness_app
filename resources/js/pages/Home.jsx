import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CTASection from '../components/home/CTASection';


export default function Home() {
    return (
        <div className="home-page-wrapper" id="#home">
            <Header />

            <main>
                <HeroSection />
                <FeaturesSection />
                <CTASection />
            </main>

            <Footer />
        </div>
    )
}