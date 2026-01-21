import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="flex h-16 w-full max-w-7xl mx-auto px-4 md:px-6 relative items-center justify-center md:justify-between">
        <img 
          src="https://storage.googleapis.com/msgsndr/3Spc7nqCtqDR7KypUH1c/media/67a82c4b8f9e7e52096be571.png" 
          alt="Systematic Geeks" 
          className="contrast-125 w-auto h-8 grayscale brightness-200" 
        />
        <a 
          href="https://calendly.com/d/cm33-ntg-rqg/sg-strategy-session" 
          className="hidden md:flex items-center gap-2 uppercase hover:text-mint transition-colors text-xs font-medium tracking-widest text-white"
        >
          Apply for strategy session
          <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  );
};