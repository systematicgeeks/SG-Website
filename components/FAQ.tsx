import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const items = [
    { q: "What exactly do you build?", a: "We build automation systems that handle the manual, repetitive stuff in your business, things like cold outreach, lead follow-up, qualification, booking, and backend workflows. In short: less admin, more sales, and no more chasing leads." },
    { q: "Is this just another ad service?", a: "Nope. We don’t run your ads, we build the systems that sit underneath your entire acquisition flow. That means leads (from ads, referrals, cold outreach, wherever) actually get followed up, booked, and converted." },
    { q: "Will this work for my business?", a: "If you talk to leads, book calls, or close deals, yes. We custom-build everything to fit your exact sales process. We’ve worked with coaches, consultants, agencies, tradies, brokers, and local businesses." },
    { q: "What if I’ve already tried other automation tools?", a: "This isn’t a tool, it’s a done-for-you system. We handle everything: setup, integrations, workflows, AI-powered follow-up, and even the personalisation logic. You won't need to figure anything out." },
    { q: "How long does it take to see results?", a: "Most clients see their systems running within 7–14 days. Once live, you’ll start seeing conversations, bookings, and freed-up time almost immediately." },
];

export const FAQ: React.FC = () => {
    return (
        <section className="bg-[#080808] border-y border-white/5 py-24">
            <div className="max-w-4xl mx-auto px-6">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl text-white font-medium mb-16 text-center uppercase">You've got questions, <span className="text-neutral-500">We've got answers</span></h2>
                </FadeIn>

                <div className="space-y-4">
                    {items.map((item, i) => (
                        <FadeIn key={i} delay={i * 100}>
                            <details className="group glass rounded-xl">
                                <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium">
                                    {item.q}
                                    <ChevronDown className="text-mint group-open:rotate-180 transition-transform" />
                                </summary>
                                <div className="px-6 pb-6 text-neutral-400 text-sm font-light">{item.a}</div>
                            </details>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn className="mt-16 text-center">
                    <a href="https://calendly.com/d/cm33-ntg-rqg/sg-strategy-session" className="bg-mint text-black font-semibold uppercase inline-flex items-center gap-2 text-sm tracking-wider rounded-full py-4 px-8 hover:shadow-[0_0_20px_rgba(110,231,183,0.3)] transition-all">
                        Apply For Your Free Strategy Session
                    </a>
                    <p className="text-xs text-neutral-500 mt-4 uppercase tracking-wider">Leave Your Card At Home</p>
                </FadeIn>
            </div>
        </section>
    );
};