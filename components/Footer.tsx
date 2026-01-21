import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="z-10 bg-[#050505] border-white/5 border-t pt-12 pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-20">
            <div className="text-xs text-neutral-500 text-center md:text-left">
                <p>© 2026 Systematic Geeks. All Rights Reserved.</p>
                <p className="mt-2">This site uses cookies for analytics and marketing</p>
                <p className="mt-2">ABN: 60 191 663 623</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs font-medium uppercase tracking-widest text-neutral-400">
                <a href="https://systematicgeeks.com/privacy-policy" className="hover:text-mint transition-colors">Privacy Policy</a>
                <a href="https://systematicgeeks.com/terms-conditions" className="hover:text-mint transition-colors">Terms & Conditions</a>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 opacity-50 flex justify-center">
            <span className="text-[13vw] md:text-[120px] leading-none font-medium text-white/5 select-none pointer-events-none tracking-tighter absolute bottom-0">SYSTEMATIC</span>
        </div>
    </footer>
  );
};