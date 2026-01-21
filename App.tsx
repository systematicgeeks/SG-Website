import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { SalesLetter } from './components/SalesLetter';
import { Features } from './components/Features';
import { Qualifying } from './components/Qualifying';
import { Process } from './components/Process';
import { Reasons } from './components/Reasons';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { Videos } from './components/Videos';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative overflow-x-hidden selection:bg-teal-900 selection:text-white">
      <Navbar />
      
      {/* Background Beams */}
      <div className="fixed inset-0 pointer-events-none z-0 max-w-7xl mx-auto px-6 flex justify-between opacity-50">
        <div className="beam-v left-6"></div>
        <div className="hidden md:block beam-v left-1/4"></div>
        <div className="hidden md:block beam-v left-1/2"></div>
        <div className="hidden md:block beam-v left-3/4"></div>
        <div className="beam-v right-6"></div>
      </div>

      <main className="z-10 relative">
        <Hero />
        <Testimonials />
        <SalesLetter />
        <Features />
        <Qualifying />
        <Process />
        <Reasons />
        <Team />
        <FAQ />
        <Videos />
      </main>

      <Footer />
    </div>
  );
}

export default App;