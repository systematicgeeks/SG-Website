import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

// Add the styles
const styles = `
/* Sequence animation intro */
@keyframes animationIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
  }
}
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }

/* Beam Animation */
.beam-v {
  position: absolute;
  top: 0; bottom: 0; width: 1px;
  background: rgba(255, 255, 255, 0.05);
  overflow: hidden;
}
.beam-v::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 150px;
  background: linear-gradient(to bottom, transparent, #6EE7B7, transparent);
  transform: translateY(-100%);
  animation: beam-drop 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
@keyframes beam-drop {
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}

/* Utilities */
.glass {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.card-hover {
  transition: all 0.3s ease;
}
.card-hover:hover {
  border-color: rgba(110, 231, 183, 0.3);
  transform: translateY(-2px);
}

/* Scroll Animations for Testimonials */
@keyframes aura-scroll-up { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
@keyframes aura-scroll-down { 0% { transform: translateY(-50%); } 100% { transform: translateY(0); } }
.aura-scroll-col-1 { animation: aura-scroll-up 60s linear infinite; }
.aura-scroll-col-2 { animation: aura-scroll-down 60s linear infinite; }
.aura-scroll-col-3 { animation: aura-scroll-up 60s linear infinite; }
.aura-scroll-col-1:hover, .aura-scroll-col-2:hover, .aura-scroll-col-3:hover { animation-play-state: paused; }
@media (max-width: 1024px) {
    .aura-scroll-col-2, .aura-scroll-col-3 { display: none !important; }
    .aura-scroll-col-1 { animation-duration: 14s !important; }
    .aura-scroll-col-1:hover { animation-play-state: running !important; }
}
`;

export function DiscoveryCall() {
    useEffect(() => {
        // Add styles
        const styleSheet = document.createElement("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);

        // Animation Logic
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });

        document.querySelectorAll(".animate-on-scroll").forEach((el) => {
            observer.observe(el);
        });

        // Fallback
        const timeout = setTimeout(() => {
            document.querySelectorAll('.animate-on-scroll').forEach((el: any) => {
                if (getComputedStyle(el).opacity === '0') {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                    el.style.filter = 'none';
                }
            });
        }, 3000);

        return () => {
            document.head.removeChild(styleSheet);
            // Clean up observer if needed, though simpler to let page unmount handle
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            <Navbar />

            {/* Vertical Lines Container */}
            <div className="fixed inset-0 pointer-events-none z-0 max-w-7xl mx-auto px-6 flex justify-between opacity-50">
                <div className="beam-v left-6"></div>
                <div className="hidden md:block beam-v left-1/4"></div>
                <div className="hidden md:block beam-v left-1/2"></div>
                <div className="hidden md:block beam-v left-3/4"></div>
                <div className="beam-v right-6"></div>
            </div>

            <main className="z-10 pt-32 relative">
                {/* Booking Section */}
                <section className="max-w-7xl mr-auto ml-auto pr-6 pb-24 pl-6">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
                        {/* Stagger Step 1: Pill */}
                        <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] inline-flex gap-2 text-[10px] uppercase text-mint tracking-widest bg-white/5 border-white/10 border rounded-full px-3 py-1 items-center">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
                            </span>
                            Final Step
                        </div>

                        <h1 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] md:text-5xl text-4xl font-medium text-white tracking-tight">
                            Book a time to finalise <span className="text-neutral-500">your strategy session</span>
                        </h1>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 items-start">
                        {/* Left: Calendar (Top on mobile) */}
                        <div className="lg:col-span-7 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
                            <div className="glass overflow-hidden rounded-2xl pt-1 pr-1 pb-1 pl-1">
                                {/* Calendly inline widget begin */}
                                <div className="calendly-inline-widget" data-url="https://calendly.com/d/cm33-ntg-rqg/sg-strategy-session?hide_event_type_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=6ee7b7" style={{ position: 'relative', minWidth: '320px', height: '700px' }}></div>
                                {/* Calendly script is handled via effect or assumed present, strictly need to inject script if not global */}
                            </div>
                        </div>

                        {/* Right: Text (Below on mobile) */}
                        <div className="lg:col-span-5 space-y-8 pt-4 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both]">
                            <div className="border-white/10 border-b pb-6">
                                <h2 className="text-2xl text-white font-medium mb-4">SG Strategy Session</h2>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-neutral-300">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-mint shrink-0">
                                            <iconify-icon icon="solar:hourglass-linear" width="18"></iconify-icon>
                                        </div>
                                        <span className="text-sm font-medium">Duration: 45 Minutes</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-neutral-300">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-mint shrink-0">
                                            <iconify-icon icon="solar:videocamera-linear" width="18"></iconify-icon>
                                        </div>
                                        <span className="text-sm font-medium">Location: Zoom</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 text-sm leading-relaxed text-neutral-400 font-light">
                                <p>This isn’t a pitch-fest, it’s a genuine strategy call designed to help you identify bottlenecks, automate the manual stuff, and build the backend system your business has been missing.</p>

                                <ul className="space-y-4 mt-4">
                                    <li className="flex gap-3">
                                        <iconify-icon icon="solar:check-circle-bold" class="text-mint shrink-0 mt-0.5" width="18"></iconify-icon>
                                        <span>We’ll audit your current process to see what’s slowing you down, what’s breaking, and where automation can save you hours.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <iconify-icon icon="solar:check-circle-bold" class="text-mint shrink-0 mt-0.5" width="18"></iconify-icon>
                                        <span>We’ll map out a clear system strategy, from lead capture to follow-up to booking, so you’re not duct-taping together 5 tools and still chasing prospects.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <iconify-icon icon="solar:check-circle-bold" class="text-mint shrink-0 mt-0.5" width="18"></iconify-icon>
                                        <span>You’ll walk away with a tailored game plan to streamline your operations, scale without burning out, and stop relying on referrals or luck.</span>
                                    </li>
                                </ul>

                                <p className="pt-2">By the end of the call, you’ll know exactly what systems you need (and don’t need) to build a business that grows consistently, even when you’re off the tools.</p>

                                <p>Book your spot now, limited availability each week.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Scrolling Review Animation */}
                <section className="animate-on-scroll [animation:animationIn_1s_ease-out_0.2s_both] max-w-7xl mx-auto px-6 mb-24 scale-100 border-t border-white/5 pt-24">
                    <div className="text-center mb-12">
                        <p className="uppercase text-xs font-medium text-neutral-500 tracking-[0.2em]">What Our Clients Say</p>
                    </div>
                    <div className="overflow-hidden grid grid-cols-1 md:grid-cols-3 h-[350px] relative gap-x-6 gap-y-6" style={{ maskImage: 'linear-gradient(180deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 10%, black 90%, transparent)' }}>
                        {/* Column 1 */}
                        <div className="aura-scroll-col-1 space-y-6">
                            {[1, 2].map((_, i) => (
                                <div key={i}>
                                    <div className="glass card-hover rounded-2xl pt-6 pr-6 pb-6 pl-6 mb-6">
                                        <div className="flex items-center gap-1 mb-4 text-mint">
                                            <iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
                                        </div>
                                        <p className="text-sm text-neutral-300 leading-relaxed mb-4">"There hasn't been a problem with our business the Systematic Geeks team hasn't been able to solve! Responsive and great to work with."</p>
                                        <div className="flex flex-col"><span className="text-sm font-medium text-white">Joe Bruni</span><span class="text-xs text-neutral-500">TH Management</span></div>
                                    </div>
                                    <div className="glass p-6 rounded-2xl card-hover">
                                        <div className="flex items-center gap-1 mb-4 text-mint"><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon></div>
                                        <p className="text-sm text-neutral-300 leading-relaxed mb-4">"Super knowledgeable, patient, and they get results. I run a similar business and even I enlisted them to help me grow."</p>
                                        <div className="flex flex-col"><span className="text-sm font-medium text-white">Jimmy Daugherty</span><span class="text-xs text-neutral-500">Founder @ Botified</span></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Column 2 */}
                        <div className="aura-scroll-col-2 space-y-6">
                            {[1, 2].map((_, i) => (
                                <div key={i}>
                                    <div className="glass p-6 rounded-2xl card-hover mb-6">
                                        <div className="flex items-center gap-1 mb-4 text-mint"><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon></div>
                                        <p className="text-sm text-neutral-300 leading-relaxed mb-4">"Jake and Kade are among the most professional and reliable freelancers I’ve worked with. They bring both technical expertise and strategic thinking to every project."</p>
                                        <div className="flex flex-col"><span className="text-sm font-medium text-white">Domenic Werners</span><span class="text-xs text-neutral-500">FLIP</span></div>
                                    </div>
                                    <div className="glass p-6 rounded-2xl card-hover">
                                        <div className="flex items-center gap-1 mb-4 text-mint"><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon></div>
                                        <p className="text-sm text-neutral-300 leading-relaxed mb-4">"Kade is incredibly knowledgeable when it comes to cold email, AI, and lead sourcing. He also has a great ability to explain things clearly."</p>
                                        <div class="flex flex-col"><span class="text-sm font-medium text-white">Daniel Page</span><span class="text-xs text-neutral-500">Pager Digital</span></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Column 3 */}
                        <div className="aura-scroll-col-3 space-y-6">
                            {[1, 2].map((_, i) => (
                                <div key={i}>
                                    <div className="glass p-6 rounded-2xl card-hover mb-6">
                                        <div className="flex items-center gap-1 mb-4 text-mint"><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon></div>
                                        <p className="text-sm text-neutral-300 leading-relaxed mb-4">"The moment we switched over to their setup, everything changed. Replies started coming in immediately and calls started booking again."</p>
                                        <div className="flex flex-col"><span className="text-sm font-medium text-white">Andro Koen</span><span class="text-xs text-neutral-500">Ark Advertising</span></div>
                                    </div>
                                    <div className="glass p-6 rounded-2xl card-hover">
                                        <div className="flex items-center gap-1 mb-4 text-mint"><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon></div>
                                        <p className="text-sm text-neutral-300 leading-relaxed mb-4">"We had our record month ever in sales! A 382% increase in 5-star reviews. Jake & Kade are proactive and great to work with."</p>
                                        <div className="flex flex-col"><span className="text-sm font-medium text-white">Andrew Fraser</span><span class="text-xs text-neutral-500">LTYB Strathmore</span></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

// Add the types for iconify-icon
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { icon: string; width?: string | number };
        }
    }
}
