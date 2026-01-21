import React from 'react';
import { TrendingUp, MessageSquareDashed, Hourglass, BarChart2, Users, Box, Globe, Rocket, ArrowRight, Zap, Check, User, Mail, MessageCircle, Calendar, Linkedin, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from './ui/FadeIn';

export const Reasons: React.FC = () => {
    return (
        <section className="bg-[#080808] border-t border-white/5 py-24 relative overflow-hidden">
            {/* Background FX */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6EE7B7]/5 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6EE7B7]/5 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn className="text-center mb-20 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6EE7B7] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6EE7B7]"></span>
                        </span>
                        <span className="text-xs font-medium text-[#6EE7B7] uppercase tracking-wider">Why Choose Us</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight mb-6">7 Reasons our clients <span className="text-[#6EE7B7]">work less</span> & <span className="text-neutral-500">close more</span></h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* 1 */}
                    <FadeIn delay={200} className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#6EE7B7]/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(110,231,183,0.1)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="p-6 md:p-8 h-full flex flex-col">
                            <div className="relative w-full h-48 mb-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/2 overflow-hidden flex items-center justify-center">
                                <div className="flex items-end gap-2 h-24 w-3/4 mx-auto pb-4 border-b border-white/10">
                                    <div className="w-full bg-[#6EE7B7]/20 rounded-t-sm h-[30%] relative group-hover:h-[40%] transition-all duration-700 ease-out"></div>
                                    <div className="w-full bg-[#6EE7B7]/40 rounded-t-sm h-[50%] relative group-hover:h-[65%] transition-all duration-700 delay-100 ease-out"></div>
                                    <div className="w-full bg-[#6EE7B7]/60 rounded-t-sm h-[40%] relative group-hover:h-[75%] transition-all duration-700 delay-200 ease-out"></div>
                                    <div className="w-full bg-[#6EE7B7] rounded-t-sm h-[60%] relative group-hover:h-[95%] transition-all duration-700 delay-300 ease-out shadow-[0_0_15px_rgba(110,231,183,0.5)]"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-4"><span className="text-4xl font-light text-[#6EE7B7]/80">01</span><TrendingUp className="text-white/20 group-hover:text-[#6EE7B7] transition-colors" size={24} /></div>
                            <h3 className="text-xl text-white font-medium mb-3 group-hover:text-[#6EE7B7] transition-colors">Predictable Revenue on Autopilot</h3>
                            <p className="text-neutral-400 text-sm font-light leading-relaxed">Your pipeline runs like a machine, booking qualified calls while you sleep. No more feast or famine cycles.</p>
                        </div>
                    </FadeIn>

                    {/* 2 */}
                    <FadeIn delay={300} className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#6EE7B7]/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(110,231,183,0.1)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="p-6 md:p-8 h-full flex flex-col">
                            <div className="relative w-full h-48 mb-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/2 overflow-hidden flex flex-col justify-center px-6 gap-3">
                                <div className="self-start bg-white/10 backdrop-blur-sm rounded-2xl rounded-tl-none px-3 py-2 max-w-[80%]"><div className="h-1.5 w-24 bg-white/20 rounded-full"></div></div>
                                <div className="self-end bg-[#6EE7B7]/20 border border-[#6EE7B7]/30 backdrop-blur-sm rounded-2xl rounded-tr-none px-3 py-2 max-w-[80%] transform transition-all duration-500 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <div className="flex gap-1 items-center"><span className="h-1.5 w-1.5 bg-[#6EE7B7] rounded-full animate-bounce"></span><span className="h-1.5 w-1.5 bg-[#6EE7B7] rounded-full animate-bounce delay-100"></span></div>
                                </div>
                                <div className="absolute right-4 bottom-4 flex items-center gap-1 text-[10px] text-[#6EE7B7]"><Zap size={10} /><span>Response: &lt; 20s</span></div>
                            </div>
                            <div className="flex items-center justify-between mb-4"><span className="text-4xl font-light text-[#6EE7B7]/80">02</span><MessageSquareDashed className="text-white/20 group-hover:text-[#6EE7B7] transition-colors" size={24} /></div>
                            <h3 className="text-xl text-white font-medium mb-3 group-hover:text-[#6EE7B7] transition-colors">Leads Get Followed Up Instantly</h3>
                            <p className="text-neutral-400 text-sm font-light leading-relaxed">Speed wins deals. Our AI responds within seconds, nurturing interest before they can click away to a competitor.</p>
                        </div>
                    </FadeIn>

                    {/* 3 - Updated to match screenshot (Dashed circle + Checkmark badge) */}
                    <FadeIn delay={400} className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#6EE7B7]/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(110,231,183,0.1)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="p-6 md:p-8 h-full flex flex-col">
                            <div className="relative w-full h-48 mb-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/2 overflow-hidden flex items-center justify-center">
                                <div className="relative w-24 h-24 rounded-full border border-white/5 flex items-center justify-center">
                                    {/* Dashed border */}
                                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-[spin_8s_linear_infinite]"></div>
                                    {/* Inner circle */}
                                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center"></div>
                                    {/* Checkmark Badge */}
                                    <div className="absolute top-0 right-0 translate-x-1 -translate-y-1 bg-[#6EE7B7] text-[#050505] rounded-full p-1.5 shadow-[0_0_20px_rgba(110,231,183,0.4)] z-10">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-4"><span className="text-4xl font-light text-[#6EE7B7]/80">03</span><Hourglass className="text-white/20 group-hover:text-[#6EE7B7] transition-colors" size={24} /></div>
                            <h3 className="text-xl text-white font-medium mb-3 group-hover:text-[#6EE7B7] transition-colors">You Don’t Waste Time</h3>
                            <p className="text-neutral-400 text-sm font-light leading-relaxed">Stop chasing ghosts. You just close the deal and take the win. The system handles the unqualified tire-kickers.</p>
                        </div>
                    </FadeIn>

                    {/* 4 */}
                    <FadeIn delay={500} className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#6EE7B7]/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(110,231,183,0.1)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="p-6 md:p-8 h-full flex flex-col">
                            <div className="relative w-full h-48 mb-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/2 overflow-hidden p-4 flex flex-col gap-2 justify-center">
                                <div className="flex items-center justify-between text-xs text-white/40 mb-1"><span>Campaign Performance</span><span className="text-[#6EE7B7]">Live</span></div>
                                <div className="bg-white/5 rounded-lg p-2 flex items-center gap-3">
                                    <div className="h-8 w-8 rounded bg-[#6EE7B7]/10 flex items-center justify-center text-[#6EE7B7]"><BarChart2 size={16} /></div>
                                    <div className="flex-1"><div className="h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[#6EE7B7] w-[0%] group-hover:w-[75%] transition-all duration-1000 ease-out"></div></div></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-4"><span className="text-4xl font-light text-[#6EE7B7]/80">04</span><BarChart2 className="text-white/20 group-hover:text-[#6EE7B7] transition-colors" size={24} /></div>
                            <h3 className="text-xl text-white font-medium mb-3 group-hover:text-[#6EE7B7] transition-colors">You Actually Know What’s Working</h3>
                            <p className="text-neutral-400 text-sm font-light leading-relaxed">Track every reply, booking, and conversion in one place. Data-driven decisions, not guesswork.</p>
                        </div>
                    </FadeIn>

                    {/* 5 - Updated to match screenshot (User -> Line -> Glowing Bot) */}
                    <FadeIn delay={600} className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#6EE7B7]/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(110,231,183,0.1)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="p-6 md:p-8 h-full flex flex-col">
                            <div className="relative w-full h-48 mb-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/2 overflow-hidden flex items-center justify-center">
                                <div className="flex items-center gap-6">
                                    {/* User Icon (Dim) */}
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/30">
                                            <User size={20} />
                                        </div>
                                    </div>
                                    {/* Connector Line */}
                                    <div className="h-px w-12 bg-white/10 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6EE7B7] to-transparent w-full -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                                    </div>
                                    {/* Bot Icon (Glowing) */}
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-[#6EE7B7] blur-lg opacity-20 animate-pulse"></div>
                                        <div className="w-12 h-12 rounded-full border border-[#6EE7B7] bg-[#6EE7B7]/10 flex items-center justify-center text-[#6EE7B7] relative z-10 shadow-[0_0_20px_rgba(110,231,183,0.3)]">
                                            <Bot size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-4"><span className="text-4xl font-light text-[#6EE7B7]/80">05</span><Users className="text-white/20 group-hover:text-[#6EE7B7] transition-colors" size={24} /></div>
                            <h3 className="text-xl text-white font-medium mb-3 group-hover:text-[#6EE7B7] transition-colors">Scale Without More Staff</h3>
                            <p className="text-neutral-400 text-sm font-light leading-relaxed">Why hire three people when one system does the job better? Scale your output without swelling your payroll.</p>
                        </div>
                    </FadeIn>

                    {/* 6 */}
                    <FadeIn delay={700} className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#6EE7B7]/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(110,231,183,0.1)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="p-6 md:p-8 h-full flex flex-col">
                            <div className="relative w-full h-48 mb-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/2 overflow-hidden flex items-center justify-center">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center z-20 relative shadow-xl"><Box className="text-black" size={24} /></div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/10 animate-spin-slow">
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#080808] border border-white/10 p-1.5 rounded-full text-[#6EE7B7]"><Mail size={12} /></div>
                                        <div className="absolute top-1/2 -right-3 -translate-y-1/2 bg-[#080808] border border-white/10 p-1.5 rounded-full text-[#6EE7B7]"><MessageCircle size={12} /></div>
                                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#080808] border border-white/10 p-1.5 rounded-full text-[#6EE7B7]"><Calendar size={12} /></div>
                                        <div className="absolute top-1/2 -left-3 -translate-y-1/2 bg-[#080808] border border-white/10 p-1.5 rounded-full text-[#6EE7B7]"><Linkedin size={12} /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-4"><span className="text-4xl font-light text-[#6EE7B7]/80">06</span><Globe className="text-white/20 group-hover:text-[#6EE7B7] transition-colors" size={24} /></div>
                            <h3 className="text-xl text-white font-medium mb-3 group-hover:text-[#6EE7B7] transition-colors">Be Everywhere</h3>
                            <p className="text-neutral-400 text-sm font-light leading-relaxed">Our systems make it look like you cloned yourself. Omnichannel presence without the manual labor.</p>
                        </div>
                    </FadeIn>

                    {/* 7 */}
                    <FadeIn delay={800} className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#6EE7B7]/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(110,231,183,0.1)] md:col-span-2 lg:col-span-3">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#6EE7B7]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="p-6 md:p-8 h-full flex flex-col md:flex-row items-center gap-8">
                            <div className="relative w-full md:w-1/2 h-48 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/2 overflow-hidden flex flex-col justify-center px-8">
                                <div className="flex justify-between text-xs text-white/50 mb-2 uppercase tracking-wider"><span>Setup</span><span>Launch</span><span className="text-[#6EE7B7]">Results</span></div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden relative"><div className="absolute inset-0 w-full h-full bg-[#6EE7B7] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[1.5s] ease-in-out"></div></div>
                                <div className="flex justify-between mt-4">
                                    <div className="flex flex-col items-center gap-1"><div className="w-3 h-3 rounded-full bg-white/20 group-hover:bg-[#6EE7B7] transition-colors duration-300"></div><span className="text-[10px] text-white/40">Day 1</span></div>
                                    <div className="flex flex-col items-center gap-1"><div className="w-3 h-3 rounded-full bg-white/20 group-hover:bg-[#6EE7B7] transition-colors duration-300 delay-500"></div><span className="text-[10px] text-white/40">Day 7</span></div>
                                    <div className="flex flex-col items-center gap-1"><div className="w-3 h-3 rounded-full bg-white/20 group-hover:bg-[#6EE7B7] transition-colors duration-300 delay-1000"></div><span className="text-[10px] text-[#6EE7B7]">Day 14</span></div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center justify-between mb-4"><span className="text-4xl font-light text-[#6EE7B7]/80">07</span><Rocket className="text-white/20 group-hover:text-[#6EE7B7] transition-colors" size={24} /></div>
                                <h3 className="text-2xl text-white font-medium mb-4 group-hover:text-[#6EE7B7] transition-colors">Results in Days, Not Quarters</h3>
                                <p className="text-neutral-400 text-base font-light leading-relaxed max-w-lg">You won't wait months for an ROI. You’ll see leads landing and calendars filling in a matter of days. We deploy fast so you can earn faster.</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <FadeIn delay={900} className="mt-20 text-center">
                    <Link to="/discovery-call" className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#6EE7B7] text-[#050505] rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#A7F3D0] transition-all duration-300 hover:shadow-[0_0_30px_rgba(110,231,183,0.4)] overflow-hidden">
                        <span className="relative z-10">Apply For Your Free Strategy Session</span>
                        <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
};