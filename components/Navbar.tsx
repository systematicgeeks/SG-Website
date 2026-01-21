import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="flex h-16 w-full max-w-7xl mx-auto px-4 md:px-6 relative items-center justify-center md:justify-between">
        <Link to="/" onClick={handleLogoClick}>
          <img
            src="https://storage.googleapis.com/msgsndr/3Spc7nqCtqDR7KypUH1c/media/67a82c4b8f9e7e52096be571.png"
            alt="Systematic Geeks"
            className="contrast-125 w-auto h-8 grayscale brightness-200"
          />
        </Link>
        <Link
          to="/discovery-call"
          className="hidden md:flex items-center gap-2 uppercase hover:text-mint transition-colors text-xs font-medium tracking-widest text-white"
        >
          Apply for strategy session
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </header>
  );
};