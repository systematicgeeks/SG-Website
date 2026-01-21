import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from './ui/FadeIn';

export const Hero: React.FC = () => {
  return (
    <section className="lg:mb-32 max-w-7xl mx-auto mb-24 px-6 pt-32">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <FadeIn>
          <div className="inline-flex gap-2 text-[10px] uppercase text-mint tracking-widest bg-white/5 border-white/10 border rounded-full mb-4 px-3 py-1 items-center">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
            </span>
            Systematic Growth
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight">
            We build systems that <span className="text-neutral-500">book calls</span> &amp; <span className="text-mint">close clients</span> while you sleep.
          </h1>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-neutral-400 text-sm md:text-base font-light">
            <span className="flex items-center gap-2"><CheckCircle size={16} className="text-mint" /> Close more deals</span>
            <span className="flex items-center gap-2"><CheckCircle size={16} className="text-mint" /> Automate the boring stuff</span>
            <span className="flex items-center gap-2"><CheckCircle size={16} className="text-mint" /> Scale without stress</span>
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="flex flex-col gap-4 pt-8 items-center">
            <Link to="/discovery-call" className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(110,231,183,0.35)] rounded-full relative shadow-[0_0_20px_rgba(110,231,183,0.25)] no-underline">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-[-100%] w-[300%] h-[300%] animate-[spin_4s_linear_infinite] left-[-100%] top-[-100%]">
                  <div className="absolute inset-0" style={{ background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, #6EE7B7 360deg)' }}></div>
                </div>
              </div>
              <div className="absolute rounded-full inset-[1px] bg-[#050505] z-0 backdrop-blur-sm"></div>
              <div className="flex uppercase cursor-pointer text-sm font-medium text-white tracking-wider w-full h-full z-10 py-4 px-8 relative items-center justify-center">
                Apply For your free strategy session
              </div>
            </Link>
            <span className="text-xs text-neutral-600 tracking-wide uppercase">Leave your card at home</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};