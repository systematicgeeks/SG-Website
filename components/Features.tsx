import React from 'react';
import { Mail, Clock, TrendingUp, Users, Star, ArrowRight } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Features: React.FC = () => {
  return (
    <section className="border-y max-w-7xl mx-auto py-24 px-6 border-white/5">
      <FadeIn className="text-center mb-20">
        <span className="text-mint text-xs uppercase tracking-[0.2em] font-medium block mb-4">Features</span>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white uppercase">Your Sales, <span className="text-neutral-600">But Supercharged</span></h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Large 1 */}
        <FadeIn delay={200} className="group relative md:col-span-2 p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 ease-out overflow-hidden flex flex-col justify-between h-full">
           <div className="absolute -top-24 -right-24 w-96 h-96 bg-mint/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
           <div className="bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-[#86fdca]/10 via-black/0 to-[#58ccfe]/30 opacity-50 absolute top-0 right-0 bottom-0 left-0" style={{maskImage: 'linear-gradient(190deg, transparent, black 0%, black 100%, transparent)'}}></div>
           <div className="relative z-10">
             <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-mint mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(110,231,183,0.1)]">
               <Mail size={28} strokeWidth={1.5} />
             </div>
             <h3 className="text-2xl md:text-3xl text-white font-medium mb-4 tracking-tight">Cold Outreach That Hits Different</h3>
             <p className="text-neutral-400 font-light text-base md:text-lg leading-relaxed max-w-2xl">Stop guessing who to contact. We build AI-powered cold email engines that scrape data, personalise messages, and start real conversations at scale.</p>
           </div>
           <div className="relative z-10 mt-8 pt-8 border-t border-white/5">
             <p className="text-mint text-xs uppercase tracking-widest font-medium flex items-center gap-2"><Star size={16} /> Focus on closing, not prospecting</p>
           </div>
        </FadeIn>

        {/* Small 1 */}
        <FadeIn delay={300} className="group md:col-span-1 hover:scale-[1.02] transition-all duration-300 ease-out overflow-hidden flex flex-col bg-white/5 h-full border-white/10 border rounded-3xl p-8 relative backdrop-blur-xl justify-between">
           <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-mint/5 rounded-full blur-3xl group-hover:bg-mint/10 transition-colors duration-500 pointer-events-none"></div>
           <div className="relative z-10">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-mint mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white font-medium mb-3">A Backend That Never Sleeps</h3>
              <p className="text-neutral-400 font-light text-sm leading-relaxed mb-4">Tired of chasing leads or forgetting to follow up? Our automation systems qualify, follow up, and book calls, all without you lifting a finger.</p>
           </div>
           <p className="relative z-10 text-neutral-500 text-xs uppercase tracking-wide mt-auto pt-4">So leads never fall through the cracks.</p>
        </FadeIn>

        {/* Small 2 */}
        <FadeIn delay={400} className="group relative md:col-span-1 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 ease-out overflow-hidden flex flex-col justify-between h-full">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-mint/5 rounded-full blur-3xl group-hover:bg-mint/10 transition-colors duration-500 pointer-events-none"></div>
            <div className="relative z-10">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-mint mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl text-white font-medium mb-3">Revenue Growth Without Growing Team</h3>
                <p className="text-neutral-400 font-light text-sm leading-relaxed mb-4">Most businesses scale chaos. You’ll scale systems. Our automations eliminate bottlenecks and manual busywork.</p>
            </div>
            <p className="relative z-10 text-neutral-500 text-xs uppercase tracking-wide mt-auto pt-4">No burnout required.</p>
        </FadeIn>

        {/* Large 2 */}
        <FadeIn delay={500} className="group relative md:col-span-2 p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 ease-out overflow-hidden flex flex-col justify-between h-full">
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-mint/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="bg-gradient-to-br from-[#42ff9e]/5 to-[#4dbafe]/10 opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
            <div className="relative z-10">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-mint mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(110,231,183,0.1)]">
                    <Users size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl text-white font-medium mb-4 tracking-tight">AI Sales Assistants</h3>
                <p className="text-neutral-400 font-light text-base md:text-lg leading-relaxed max-w-2xl">We install AI bots that handle first-touch messages, qualify leads, and follow up automatically. No more ghosted convos or wasted time on dead leads.</p>
            </div>
            <div className="relative z-10 mt-8 pt-8 border-t border-white/5">
                <p className="text-mint text-xs uppercase tracking-widest font-medium flex items-center gap-2"><Star size={16} /> You only jump in when it matters</p>
            </div>
        </FadeIn>

      </div>

      <FadeIn delay={600} className="mt-20 text-center">
        <a href="https://systematicgeeks.com/strategy-session" className="bg-mint text-black font-semibold uppercase inline-flex items-center gap-3 hover:scale-105 transition-transform duration-300 text-sm tracking-wider rounded-full py-5 px-10 shadow-[0_0_20px_rgba(110,231,183,0.3)]">
            Apply For Your Free Strategy Session
            <ArrowRight size={18} />
        </a>
        <p className="text-xs text-neutral-500 mt-6 uppercase tracking-wider">Not a Fit? You Still Get a Free Growth Plan</p>
      </FadeIn>

    </section>
  );
};