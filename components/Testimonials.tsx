import React from 'react';
import { Star } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const stars = (
  <div className="flex items-center gap-1 mb-4 text-mint">
    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" stroke="none" />)}
  </div>
);

const Card = ({ quote, name, role }: { quote: string, name: string, role: string }) => (
  <div className="glass p-6 rounded-2xl transition-all duration-300 hover:border-mint/30 hover:-translate-y-1 cursor-default">
    {stars}
    <p className="text-sm text-neutral-300 leading-relaxed mb-4">"{quote}"</p>
    <div className="flex flex-col">
      <span className="text-sm font-medium text-white">{name}</span>
      <span className="text-xs text-neutral-500">{role}</span>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto mb-32 px-6">
      <FadeIn delay={200}>
        <div className="overflow-hidden grid grid-cols-1 lg:grid-cols-3 h-[350px] relative gap-6" 
             style={{ 
               maskImage: 'linear-gradient(180deg, transparent, black 10%, black 90%, transparent)',
               WebkitMaskImage: 'linear-gradient(180deg, transparent, black 10%, black 90%, transparent)' 
             }}>
          
          {/* Col 1 - Mobile: 14s, Desktop: 60s (matches source code) */}
          <div className="space-y-6 hover:[animation-play-state:paused] animate-[aura-scroll-up_14s_linear_infinite] lg:animate-scroll-up">
            <Card quote="There hasn't been a problem with our business the Systematic Geeks team hasn't been able to solve! Responsive and great to work with." name="Joe Bruni" role="TH Management" />
            <Card quote="Super knowledgeable, patient, and they get results. I run a similar business and even I enlisted them to help me grow." name="Jimmy Daugherty" role="Founder @ Botified" />
            {/* Duplicates for loop */}
            <Card quote="There hasn't been a problem with our business the Systematic Geeks team hasn't been able to solve! Responsive and great to work with." name="Joe Bruni" role="TH Management" />
            <Card quote="Super knowledgeable, patient, and they get results. I run a similar business and even I enlisted them to help me grow." name="Jimmy Daugherty" role="Founder @ Botified" />
          </div>

          {/* Col 2 - Hidden on Mobile/Tablet, Visible on Desktop (matches source code) */}
          <div className="hidden lg:block space-y-6 hover:[animation-play-state:paused] animate-scroll-down">
            <Card quote="Jake and Kade are among the most professional and reliable freelancers I’ve worked with. They bring both technical expertise and strategic thinking to every project." name="Domenic Werners" role="FLIP" />
            <Card quote="Kade is incredibly knowledgeable when it comes to cold email, AI, and lead sourcing. He also has a great ability to explain things clearly." name="Daniel Page" role="Pager Digital" />
             {/* Duplicates */}
            <Card quote="Jake and Kade are among the most professional and reliable freelancers I’ve worked with. They bring both technical expertise and strategic thinking to every project." name="Domenic Werners" role="FLIP" />
            <Card quote="Kade is incredibly knowledgeable when it comes to cold email, AI, and lead sourcing. He also has a great ability to explain things clearly." name="Daniel Page" role="Pager Digital" />
          </div>

          {/* Col 3 - Hidden on Mobile/Tablet, Visible on Desktop (matches source code) */}
          <div className="hidden lg:block space-y-6 hover:[animation-play-state:paused] animate-scroll-up">
            <Card quote="The moment we switched over to their setup, everything changed. Replies started coming in immediately and calls started booking again." name="Andro Koen" role="Ark Advertising" />
            <Card quote="We had our record month ever in sales! A 382% increase in 5-star reviews. Jake & Kade are proactive and great to work with." name="Andrew Fraser" role="LTYB Strathmore" />
            {/* Duplicates */}
            <Card quote="The moment we switched over to their setup, everything changed. Replies started coming in immediately and calls started booking again." name="Andro Koen" role="Ark Advertising" />
            <Card quote="We had our record month ever in sales! A 382% increase in 5-star reviews. Jake & Kade are proactive and great to work with." name="Andrew Fraser" role="LTYB Strathmore" />
          </div>

        </div>
      </FadeIn>
    </section>
  );
};