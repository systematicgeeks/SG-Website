import React from 'react';
import { FadeIn } from './ui/FadeIn';

const videos = [
  { name: 'Joe Bruni', role: 'Talent House MGMT', id: 'gp2t1urvn7' },
  { name: 'Matt', role: 'IFP Cranbourne', id: '8p7a2xhjlz' },
  { name: 'Andro Koen', role: 'Ark Advertising', id: '6g25z77wpa' },
  { name: 'Daniel Page', role: 'Pager Digital', id: 'yvd12ro6h1' },
  { name: 'Scott', role: 'NR Boost Fitness', id: '22ieksvkv7' },
  { name: 'Marcus Olsson', role: 'Next Level Mind', id: 'p07n5lntxu' },
  { name: 'Brigitte', role: 'Life Quality Fitness Nutrition', id: '8ipevht0xq' }
];

const VideoCard = ({ name, role, id }: { name: string, role: string, id: string }) => (
  <div className="rounded-xl overflow-hidden bg-[#050505] border border-white/5">
    <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
        <div className={`wistia_embed wistia_async_${id} seo=true videoFoam=true`} style={{ height: '100%', position: 'relative', width: '100%' }} id={`wistia-${id}-1`}>
          <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 1, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
            <img src={`https://fast.wistia.com/embed/medias/${id}/swatch`} style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} alt="" aria-hidden="true" onLoad={(e) => (e.currentTarget.parentElement!.style.opacity = '1')} />
          </div>
        </div>
      </div>
    </div>
    <div className="p-4">
      <p className="text-white font-medium">{name}</p>
      <p className="text-neutral-500 text-xs uppercase">{role}</p>
    </div>
  </div>
);

export const Videos: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
      <FadeIn>
        <h2 className="uppercase text-5xl font-medium text-white text-center mb-16">Proof!</h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, i) => (
          <FadeIn
            key={video.id}
            delay={200 + (i * 100)}
            className={i === videos.length - 1 ? "md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto lg:col-span-1 lg:w-full lg:col-start-2 lg:mx-0" : ""}
          >
            <VideoCard {...video} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};