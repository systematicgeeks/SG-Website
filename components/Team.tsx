import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Team: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
                {/* Text Content */}
                <FadeIn className="lg:col-span-7">
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-12 uppercase">Meet the Geeks <span className="text-neutral-600 block mt-2">Behind the Systems</span></h2>
                    <div className="space-y-6 text-neutral-400 font-light text-lg leading-relaxed">
                        <p>We’re obsessed with one thing...</p>
                        <p>Helping small businesses grow with less chaos.</p>
                        <p>For the last 9 years, both Kade and Jake have been testing, building, and obsessing over what actually works when it comes to scaling service businesses.</p>
                        <p>From cold email systems to backend automations, we’ve seen firsthand that real growth doesn’t come from “trying more stuff”.</p>
                        <p>It comes from installing systems that just work.</p>
                        <p>Most businesses don’t need more tools.</p>
                        <p>They need a system that turns chaos into clients.</p>
                        <p>That’s why we created Systematic Geeks.</p>
                        <p>A plug-and-play growth engine.</p>
                        <p className="text-white font-medium italic text-xl py-2">"I wish I did this sooner."</p>
                        <p>Because if you’re not sending us a win message...</p>
                        <p>We’re not done yet.</p>
                    </div>
                    <div className="mt-12">
                        <a href="https://calendly.com/d/cm33-ntg-rqg/sg-strategy-session" className="text-mint border-mint hover:text-white transition-colors uppercase inline-flex items-center gap-2 group text-sm tracking-wider border-b pb-1">
                            Book a strategy session
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                        </a>
                    </div>
                </FadeIn>

                {/* Images Column */}
                <div className="lg:col-span-5 flex flex-col gap-10 items-center justify-center">
                    {/* Kade */}
                    <FadeIn delay={200} className="group relative w-[21rem] hover:scale-105 transition-transform duration-500 ease-out">
                        <div className="absolute -inset-4 bg-mint/30 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative overflow-hidden rounded-3xl bg-[#0A0A0A] shadow-[0_0_60px_-15px_rgba(110,231,183,0.4)]">
                            <div className="aspect-[4/5] w-full overflow-hidden">
                                <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3Spc7nqCtqDR7KypUH1c/media/68201493d43a6dd1f1e9e732.jpeg" alt="Kade Harris" className="object-top group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 w-full h-full object-cover border-0 grayscale" />
                            </div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 w-fit"><span className="text-white text-xs uppercase tracking-widest font-medium block">Kade Harris</span></div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                        </div>
                    </FadeIn>

                    {/* Jake */}
                    <FadeIn delay={400} className="group relative w-[21rem] hover:scale-105 transition-transform duration-500 ease-out">
                        <div className="absolute -inset-4 bg-mint/30 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative overflow-hidden rounded-3xl bg-[#0A0A0A] shadow-[0_0_60px_-15px_rgba(110,231,183,0.4)]">
                            <div className="aspect-[4/5] w-full overflow-hidden">
                                <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3Spc7nqCtqDR7KypUH1c/media/682014938ea8645d18977dff.jpeg" alt="Jake Cawfield" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                            </div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 w-fit"><span className="text-white text-xs uppercase tracking-widest font-medium block">Jake Cawfield</span></div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};