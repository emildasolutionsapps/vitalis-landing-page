import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OfferBanner from './components/OfferBanner';
import ProblemSection from './components/ProblemSection';
import USPSection from './components/USPSection';
import MidPageCTA from './components/MidPageCTA';
import SocialProof from './components/SocialProof';
import NewCTA from './components/NewCTA';
import WhatMakesUsDifferent from './components/WhatMakesUsDifferent';
import BeforeAfter from './components/BeforeAfter';
import ContactStrip from './components/ContactStrip';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <OfferBanner />
      <ProblemSection />
      <USPSection />
      <MidPageCTA />
      <SocialProof />
      <NewCTA />
      <WhatMakesUsDifferent />
      <BeforeAfter />
      <NewCTA />
      <ContactStrip />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;