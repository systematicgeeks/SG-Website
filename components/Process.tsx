import React, { useState } from 'react';
import { Search, Mail, Bot, Settings, LayoutDashboard } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const steps = [
  { id: 1, title: 'Prospect Sourcing & Scraping', desc: 'We dig through the internet so you don’t have to. Our bots pull decision-makers, enrich the data, and tee up your perfect list, all while you’re making coffee.', icon: Search },
  { id: 2, title: 'Automated Cold Email Machine', desc: 'We don’t send spam. We send charm. Every email opener is tailored using AI, sent on autopilot, and lands in inboxes daily.', icon: Mail },
  { id: 3, title: 'AI Follow-Up Assistant', desc: 'No more ghosted convos. Our bot replies instantly, books the call, and even qualifies the lead, so you only step in when the deal is hot.', icon: Bot },
  { id: 4, title: 'Backend Systems That Actually Work', desc: 'From intake forms to reminders and follow-ups, we build the boring stuff so you can stop repeating yourself and start breathing again.', icon: Settings },
  { id: 5, title: 'One Dashboard To Rule Them All', desc: 'No more spreadsheets. You’ll see exactly who’s booked, replied, ghosted, or converted, all in one place.', icon: LayoutDashboard },
];

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="overflow-hidden bg-[#050505] max-w-7xl mx-auto py-24 px-6 relative" id="how-it-works">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center relative z-10">
        
        {/* Left: Isometric Graphic */}
        <FadeIn delay={200} className="hidden lg:flex order-1 w-full max-w-xl mx-auto relative perspective-distant items-center justify-center aspect-square">
          <div className="absolute w-96 h-96 bg-mint/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
             <div className="absolute left-1/2 top-[-50%] bottom-[-50%] w-px border-l border-dashed border-white/10 -translate-x-1/2 z-0"></div>
             
             {/* Layers */}
             {steps.map((step, index) => {
               // Calculate idle position to create stack effect
               // 5 steps: index 0 is top (+8rem), index 4 is bottom (-8rem)
               const idlePos = `${(2 - index) * 4}rem`;
               
               return (
                 <div 
                    key={step.id}
                    className={`absolute inset-0 z-${(index + 1) * 10} transition-all duration-500 ease-out will-change-transform animate-stack-breathe ${activeStep === step.id ? 'is-active' : ''}`}
                    style={{ '--idle-pos': idlePos } as React.CSSProperties}
                 >
                    <div className={`w-full h-full border border-white/10 bg-white/[0.0${index + 2}] backdrop-blur-[2px] rotate-45 scale-y-50 shadow-2xl transition-all duration-500 ${activeStep === step.id ? 'border-mint bg-mint/10 shadow-[0_0_30px_rgba(110,231,183,0.15)] translate-y-[-0.5rem] ' : ''}`}></div>
                    
                    {/* Floating Label (Right or Left alternating) */}
                    <div className={`absolute top-1/2 -translate-y-1/2 flex items-center gap-3 opacity-0 transition-opacity duration-300 delay-75 pointer-events-none ${activeStep === step.id ? 'opacity-100' : ''} ${index % 2 === 0 ? '-right-12 translate-x-8' : '-left-12 -translate-x-8 flex-row-reverse'}`}>
                         <div className={`w-16 h-px bg-mint ${index % 2 === 0 ? 'origin-left -rotate-[25deg]' : 'origin-right rotate-[25deg]'}`}></div>
                         <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#080808] border border-mint/30 shadow-lg backdrop-blur-md">
                           <span className="text-[10px] font-bold text-mint uppercase tracking-wider">0{step.id}. {step.title.split(' ')[0]}</span>
                         </div>
                    </div>
                 </div>
               );
             })}
          </div>
        </FadeIn>

        {/* Right: Steps List */}
        <div className="flex flex-col justify-center order-2">
           <FadeIn delay={300} className="mb-16">
             <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 uppercase">How we build systems <span className="text-neutral-600">that scale</span></h2>
             <p className="text-neutral-400 font-light text-lg max-w-lg">Sick of duct-taping your sales process? Here’s how we build automated systems that make growth feel easy.</p>
           </FadeIn>

           <div className="relative space-y-10 pl-6">
             <div className="absolute left-[29px] top-6 bottom-6 w-px bg-gradient-to-b from-mint/50 via-white/5 to-transparent"></div>
             
             {steps.map((step, index) => (
                <FadeIn key={step.id} delay={400 + (index * 100)}>
                  <div 
                    className={`relative flex gap-8 group cursor-pointer transition-colors duration-300 ${activeStep === step.id ? 'active-step' : ''}`}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                     <div className="relative z-10 shrink-0">
                       <div className={`w-12 h-12 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center text-neutral-500 transition-all duration-300 transform group-hover:scale-110 group-hover:border-mint group-hover:text-mint group-hover:shadow-[0_0_20px_rgba(110,231,183,0.25)] ${activeStep === step.id ? 'scale-110 border-mint text-mint shadow-[0_0_20px_rgba(110,231,183,0.25)]' : ''}`}>
                          <step.icon size={20} strokeWidth={1.5} />
                       </div>
                     </div>
                     <div className="pt-1">
                       <h3 className={`text-lg text-white font-medium mb-2 transition-colors duration-300 ${activeStep === step.id ? 'text-mint' : 'group-hover:text-mint'}`}>{step.title}</h3>
                       <p className={`text-neutral-500 font-light text-sm leading-relaxed max-w-md transition-colors duration-300 ${activeStep === step.id ? 'text-neutral-400' : 'group-hover:text-neutral-400'}`}>{step.desc}</p>
                     </div>
                  </div>
                </FadeIn>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
};