import React from 'react';
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const SalesLetter: React.FC = () => {
  return (
    <>
      <section className="border-y overflow-hidden max-w-7xl mx-auto py-20 px-6 relative border-white/5">
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
              How we build a revenue-generating sales machine that works <span className="text-mint">24/7 for you</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200} className="space-y-6 text-neutral-400 font-light leading-relaxed">
            <p>We help small to medium businesses implement custom systems that eliminate manual follow-up, clean up messy processes, and turn underperforming pipelines into smooth, scalable machines.</p>
            <p>From AI-powered lead handling to cold outreach automations, everything we build is designed to save time, reduce stress, and grow your revenue without hiring or micromanaging.</p>
            <div className="pt-4">
              <a href="#how-it-works" className="group inline-flex items-center gap-2 text-white border-b border-mint pb-1 hover:text-mint transition-colors">
                Click below to see how it all fits together
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-32 px-6 relative blur-none">
        <FadeIn>
          <div className="md:p-12 lg:p-16 overflow-hidden bg-[#0A0A0A]/40 border-white/5 border-0 rounded-2xl p-8 relative shadow-2xl backdrop-blur-none group hover:border-white/10 transition-colors duration-500">
            {/* Grain Texture */}
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bT1vY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlRmlsdGVyKSIgb3BhY2l0eT0iMC4wMyIvPjwvc3ZnPg==')] opacity-30 pointer-events-none"></div>

            <div className="z-10 text-left relative space-y-8">
              <h3 className="text-3xl text-white font-medium tracking-tight border-b border-white/5 pb-8 mb-8">Business Owners We Get It…</h3>

              <div className="space-y-6 text-neutral-300 font-light text-lg leading-relaxed">
                <p className="font-normal text-white">Dear Business Builder,</p>
                <p>Let’s be real.</p>
                <p>Growing a business isn’t easy… <span className="text-white font-normal">Scratch that it’s f*cking hard!</span></p>

                <ul className="space-y-3 pl-4 border-l-2 border-mint/20 ml-1 py-2">
                  <li className="pl-2">5am starts. 8pm finishes.</li>
                  <li className="pl-2">Sleepless nights</li>
                  <li className="pl-2">Cash flow chaos</li>
                </ul>

                <p>One week, you’re drowning in work, barely keeping up.</p>
                <p>The next, you’re buried in admin, wondering why everything still relies on you.</p>
                <p>You’re wearing every hat in the business despite hiring; marketing, ops, delivery, finances.</p>
                <p>And to top it all off… You <span className="text-white font-normal">KNOW</span> what you need:</p>

                <h4 className="text-xl text-white font-medium pt-2 pb-2">More Time. More Structure. More Money In Your Pocket.</h4>

                <p>But nothings worked…</p>
                <p>Everyone says you need to:</p>

                <ul className="space-y-3 text-neutral-400">
                  <li className="flex items-center gap-3"><XCircle className="text-red-400" size={20} /> Set up another tool…</li>
                  <li className="flex items-center gap-3"><XCircle className="text-red-400" size={20} /> Automate more with Zapier…</li>
                  <li className="flex items-center gap-3"><XCircle className="text-red-400" size={20} /> Hire a VA to handle it…</li>
                </ul>

                <p className="pt-4">But here you are… Stuck spinning your wheels. Logging into six different platforms just to stay afloat. Hoping next month will be better… But nothing changes if nothing changes…</p>

                <div className="md:p-8 overflow-hidden bg-white/0 border-0 rounded-xl mt-8 mb-8 p-6 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-mint"></div>
                  <p className="font-medium text-white m-0 relative z-10 italic">"Listen, the businesses that are crushing it in 2026 (your competitors) aren’t scaling through hustle and hacks. They’ve built automated systems that keep everything running, even when they’re not."</p>
                </div>

                <p>Follow-up gets handled. Ops are streamlined. Sales don’t stall just because they took a day off.</p>
                <p className="text-xl text-white font-medium pt-4">That’s where we come in.</p>
                <p>At Systematic Geeks we build (not just another software stack) that streamline operations, increase conversions, & free up your time. So your business stops relying on you to function.</p>

                <h4 className="text-xl text-white font-medium pt-4 mb-4">Imagine A World Where:</h4>

                <div className="space-y-4 mb-8">
                  {[
                    "You wake up to an inbox full of Already qualified leads",
                    "Bookings, reminders, and admin run without you",
                    "You finally feel in control, not in the weeds"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group/item">
                       <div className="w-6 h-6 rounded-full bg-mint/10 flex items-center justify-center text-mint shrink-0 mt-1 group-hover/item:bg-mint group-hover/item:text-black transition-colors"><CheckCircle size={16} /></div>
                       <span className="text-neutral-300">
                         {item.split(item.match(/(Already qualified leads|without you|in control)/)?.[0] || "")[0]}
                         <span className="text-white">{item.match(/(Already qualified leads|without you|in control)/)?.[0]}</span>
                         {item.split(item.match(/(Already qualified leads|without you|in control)/)?.[0] || "")[1]}
                        </span>
                    </div>
                  ))}
                </div>

                <p className="pt-4">That’s the world we want to help you create.</p>
                <p>So let’s see if you’re in the right place.</p>
              </div>

              <div className="flex flex-col z-10 border-white/10 border-t mb-12 pt-12 relative gap-x-6 items-start gap-y-3">
                 <div className="flex flex-col gap-4 items-center">
                    <a href="https://systematicgeeks.com/strategy-session" className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(110,231,183,0.35)] rounded-full relative shadow-[0_0_20px_rgba(110,231,183,0.25)] no-underline">
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute inset-[-100%] w-[300%] h-[300%] animate-[spin_4s_linear_infinite] left-[-100%] top-[-100%]">
                                <div className="absolute inset-0" style={{background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, #6EE7B7 360deg)'}}></div>
                            </div>
                        </div>
                        <div className="absolute rounded-full inset-[1px] bg-[#050505] z-0 backdrop-blur-sm"></div>
                        <div className="flex uppercase z-10 text-sm font-medium text-white tracking-wider w-full h-full py-4 px-8 relative items-center justify-center">
                            Apply For your free strategy session
                        </div>
                    </a>
                </div>
                <div className="flex gap-3 opacity-60 items-center">
                    <div className="h-px w-8 bg-neutral-600"></div>
                    <p className="uppercase text-xs text-neutral-500 tracking-wider my-5">No Hard Sell. Just a Free Strategy Session.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
};