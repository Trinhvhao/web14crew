import React from 'react';
import FadeIn from './FadeIn';
import { ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function SeventhSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const gridThumbnails = [
    { id: 2, img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 3, img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 4, img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 6, img: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 7, img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 8, img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 9, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 10, img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 1, img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400&h=250' },
  ];

  const btsImages = [
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=400&h=300',
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400&h=300',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400&h=300'
  ];

  return (
    <section ref={ref} className="relative flex flex-col pt-8 pb-3 px-8 z-10 w-full bg-[#791220] text-[#f4efe6] h-screen font-sans overflow-hidden shrink-0  ">
      
      {/* Absolute "04-A" */}
      <div className="absolute top-8 right-12 text-[#f4efe6] text-3xl font-display font-medium">
        04-A
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
        <FadeIn direction="right" delay={0.3} className="w-[35%] flex flex-col h-full shrink-0">
          <h2 className="text-[2rem] font-bold uppercase tracking-tight border-b-[3px] border-[#f4efe6] inline-block pb-1 mb-4 w-fit leading-none whitespace-nowrap">
            PRODUCED BY 14CREW
          </h2>
          <p className="text-[1.1rem] leading-snug opacity-90 mb-12 max-w-[95%] font-medium">
            Thông tin crew : Sản xuất bao nhiêu ngày, thiết bị gì, những kỹ xảo nào...
          </p>
          
          <motion.h1 style={{ y }} className="text-[3.5rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left mb-auto mt-2 whitespace-nowrap">
            PROJECT BRAND
          </motion.h1>

          {/* Grid 3x3 */}
          <div className="grid grid-cols-3 gap-3 w-full mb-16 relative mt-16">
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
          </div>
        </FadeIn>

        {/* Right Column */}
        <FadeIn direction="left" delay={0.3} className="w-[65%] flex flex-col h-full border-l-[1px] border-[#f4efe6]/30 pl-12 py-2">
          
          {/* 3 small images row */}
          <div className="flex justify-center gap-6 mb-6">
            {btsImages.map((img, i) => (
              <div key={i} className="w-[180px] aspect-[16/9] bg-gray-800 overflow-hidden shadow-lg border-[1px] border-white/10">
                <img src={img} className="w-full h-full object-cover" alt="BTS" />
              </div>
            ))}
          </div>

          {/* Main Clip */}
          <div data-cursor-text="PLAY" className="w-full aspect-[21/9] bg-gray-900 relative mb-8 shadow-2xl overflow-hidden border-[1px] border-white/10 group cursor-pointer z-10">
             <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200&h=500" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" alt="Main" />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[6rem] font-display font-bold text-[#ff9f43] drop-shadow-[3px_3px_0px_#f1c40f] leading-none opacity-90">
                  5
                </span>
             </div>
          </div>

          {/* Bottom section */}
          <div className="flex gap-12 items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-[280px] aspect-[16/9] bg-gray-800 overflow-hidden mb-3 shadow-lg border-[1px] border-white/10">
                 <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600&h=337" className="w-full h-full object-cover" alt="Hình BTS của Crew" />
              </div>
              <span className="text-xl font-medium tracking-wide">Hình BTS của Crew</span>
            </div>
            
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
