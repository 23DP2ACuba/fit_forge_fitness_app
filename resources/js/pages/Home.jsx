import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// import HeroSection from '../components/home/hero_section';
// import FeaturesSection from '../components/home/features_section';
// import CTASection from '../components/home/cta_section';


export default function Home() {
    return (
        <div className="home_page_wrapper">
            <Header />

            {/* <main>
                <HeroSection />
                <FeaturesSection />
                <CTASection />
            </main> */

            <Footer />}
        </div>
    );
}