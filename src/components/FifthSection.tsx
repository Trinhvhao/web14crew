import React from 'react';
import FadeIn from './FadeIn';
import { ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function FifthSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const gridThumbnails = [
    { id: 3, img: 'https://images.unsplash.com/photo-1565610222536-ce1258bbf089?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 4, img: 'https://images.unsplash.com/photo-1555529733-0e670560f8e1?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 5, img: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 2, img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 6, img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 8, img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 9, img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 10, img: 'https://images.unsplash.com/photo-1506744626753-eda818311449?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 1, img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=400&h=250' },
  ];

  const btsImages = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400&h=300',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=400&h=300',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400&h=300'
  ];

  return (
    <section ref={ref} className="relative flex flex-col pt-8 pb-3 px-8 z-10 w-full bg-[#791220] text-[#f4efe6] h-screen font-sans overflow-hidden shrink-0  ">
      
      {/* Absolute "03-A" */}
      <div className="absolute top-8 right-12 text-[#f4efe6] text-3xl font-display font-medium">
        03-A
      </div>

      {/* Scroll Indicator */}
      <div className="absolute left-8 bottom-24 flex flex-col items-center gap-[6px]">
        <span className="text-[13px] font-bold uppercase tracking-[0.15em] font-sans text-[#F2C94C] mb-[8px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          SCROLL
        </span>
        <div className="w-[2px] h-[60px] bg-[#F2C94C]"></div>
        <ArrowDown size={16} className="text-[#F2C94C] stroke-[3] -mt-[2px]" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-24 flex h-full gap-12 pt-8">
        
        {/* Left Column */}
        <div className="w-[35%] flex flex-col h-full shrink-0">
          <FadeIn direction="down" delay={0.1}>
            <h2 className="text-[2rem] font-bold uppercase tracking-tight border-b-[3px] border-[#f4efe6] inline-block pb-1 mb-4 w-fit leading-none">
              PRODUCED BY 14CREW
            </h2>
            <p className="text-[1.1rem] leading-snug opacity-90 mb-12 max-w-[95%] font-medium">
              Thông tin crew : Sản xuất bao nhiêu ngày, thiết bị gì, những kỹ xảo nào...
            </p>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.3} className="mb-auto mt-2">
            <div className="flex items-center w-full whitespace-nowrap">
              <motion.h1 style={{ y }} className="text-[3.5rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left">
                CORPORATION FILM...
              </motion.h1>
              <div className="flex-grow h-[2px] bg-[#f4efe6] relative ml-2 -mt-4 opacity-80 min-w-[50px]">
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-[#f4efe6]"></div>
              </div>
            </div>
          </FadeIn>

          {/* Grid 3x3 */}
          <FadeIn direction="up" delay={0.5} className="grid grid-cols-3 gap-3 w-full mb-16 relative">
            {/* Draw arrow line above grid */}
            <div className="absolute -top-6 left-0 right-0 flex items-center justify-between">
                <div className="w-full h-[2px] bg-[#f4efe6] relative">
                   
                   <div className="absolute -left-1 -top-[4px] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[8px] border-r-[#f4efe6]"></div>
                   <div className="absolute -right-1 -top-[4px] w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-[#f4efe6]"></div>
                </div>
            </div>
            {gridThumbnails.map((item, i) => (
              <div key={i} className="aspect-video bg-[#9ccc65] relative overflow-hidden cursor-pointer group shadow-md">
                <img src={item.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt=""/>
                {/* Number Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[4rem] font-display font-bold text-[#ff9f43] drop-shadow-[2px_2px_0px_#f1c40f] leading-none select-none opacity-90 group-hover:scale-110 transition-transform">
                    {item.id}
                  </span>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>

        {/* Right Column */}
        <div className="w-[65%] flex flex-col h-full border-l-[1px] border-[#f4efe6]/30 pl-12 py-2">
          
          {/* 3 small images row */}
          <FadeIn direction="down" delay={0.2} className="flex justify-center gap-6 mb-6">
            {btsImages.map((img, i) => (
              <div key={i} className="w-[180px] aspect-[16/9] bg-gray-800 overflow-hidden shadow-lg border-[1px] border-white/10">
                <img src={img} className="w-full h-full object-cover" alt="BTS" />
              </div>
            ))}
          </FadeIn>

          {/* Main Clip */}
          <FadeIn direction="left" delay={0.4} data-cursor-text="PLAY" className="w-full aspect-[21/9] bg-gray-900 relative mb-8 shadow-2xl overflow-hidden border-[1px] border-white/10 group cursor-pointer">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200&h=500" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" alt="Main" />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[6rem] font-display font-bold text-[#ff9f43] drop-shadow-[3px_3px_0px_#f1c40f] leading-none opacity-90">
                  7
                </span>
             </div>
          </FadeIn>

          {/* Bottom section */}
          <FadeIn direction="up" delay={0.6} className="flex gap-12 items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-[280px] aspect-[16/9] bg-gray-800 overflow-hidden mb-3 shadow-lg border-[1px] border-white/10">
                 <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600&h=337" className="w-full h-full object-cover" alt="Clip BTS" />
              </div>
              <span className="text-xl font-medium tracking-wide">Clip BTS</span>
            </div>
            
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
