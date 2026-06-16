import React from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

import { Hero } from './sections/Hero';
import { Trust } from './sections/Trust';
import { AboutStory } from './sections/AboutStory';
import { FeaturedCollections } from './sections/FeaturedCollections';
import { BestSellers } from './sections/BestSellers';
import { CustomOrder } from './sections/CustomOrder';
import { Testimonials } from './sections/Testimonials';
import { Process } from './sections/Process';
import { GalleryCTA } from './sections/GalleryCTA';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-primary font-sans text-text-primary selection:bg-accent selection:text-white flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <Trust />
          <AboutStory />
          <FeaturedCollections />
          <BestSellers />
          <CustomOrder />
          <Testimonials />
          <Process />
          <GalleryCTA />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </SmoothScroll>
  );
}

export default App;
