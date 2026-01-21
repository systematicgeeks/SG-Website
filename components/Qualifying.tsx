import React from 'react';
import { Activity, MousePointerClick, Files, ThermometerSnowflake, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from './ui/FadeIn';

export const Qualifying: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="glass lg:p-16 border-white/10 border rounded-3xl p-8">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl text-white font-medium mb-4 tracking-tight">We're not for everyone...</h2>
                    <p className="text-neutral-500 text-xl font-light">But if this sounds like you, we should talk.</p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FadeIn delay={200} className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]">
                        <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(251,146,60,0.15)]">
                            <Activity size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white text-lg font-semibold mb-3">Still Stuck in Feast or Famine?</h3>
                        <p className="text-neutral-400 text-sm font-light leading-relaxed">If you are relying on luck, referrals, or random spikes, we build systems that deliver leads and bookings automatically. No more hope and hustle.</p>
                    </FadeIn>

                    <FadeIn delay={300} className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(96,165,250,0.15)]">
                            <MousePointerClick size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white text-lg font-semibold mb-3">Doing Outreach Manually?</h3>
                        <p className="text-neutral-400 text-sm font-light leading-relaxed">Copy pasting cold emails and clicking through LinkedIn is a thing of the past. Our automations handle targeting, personalization, and follow up at scale.</p>
                    </FadeIn>

                    <FadeIn delay={400} className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]">
                        <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(192,132,252,0.15)]">
                            <Files size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white text-lg font-semibold mb-3">Wasting Hours on Busywork?</h3>
                        <p className="text-neutral-400 text-sm font-light leading-relaxed">You did not start your business to drown in admin. We automate repetitive backend tasks so you can focus on high value work.</p>
                    </FadeIn>

                    <FadeIn delay={500} className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]">
                        <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                            <ThermometerSnowflake size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white text-lg font-semibold mb-3">Leads Going Cold?</h3>
                        <p className="text-neutral-400 text-sm font-light leading-relaxed">Our bots respond instantly, nurture leads intelligently, and book the call. So no one slips through the cracks.</p>
                    </FadeIn>

                    <FadeIn delay={600} className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05] md:col-span-2 lg:col-span-2">
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(52,211,153,0.15)]">
                            <Rocket size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white text-lg font-semibold mb-3">Want Growth Without a Giant Team?</h3>
                        <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-xl">Our systems act like a full stack SDR and scheduler without the payroll. Grow faster with fewer people.</p>
                    </FadeIn>
                </div>

                <FadeIn delay={700} className="mt-16 text-center pt-8 border-t border-white/5">
                    <Link to="/discovery-call" className="bg-mint text-black uppercase inline-flex items-center gap-3 hover:shadow-[0_0_20px_rgba(110,231,183,0.3)] transition-all duration-300 text-sm font-semibold tracking-wider rounded-full py-4 px-10">
                        Apply For Your Free Strategy Session
                        <ArrowRight size={18} />
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
};