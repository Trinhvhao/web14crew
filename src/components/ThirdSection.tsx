import React from 'react';
import FadeIn from './FadeIn';
import TextReveal from './TextReveal';
import { ArrowDown } from 'lucide-react';

export default function ThirdSection() {
  const thumbnails = [
    { id: 1, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=400' },
    { id: 2, img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400' },
    { id: 3, img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=400' },
    { id: 4, img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=400' },
    { id: 5, img: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=400' },
    { id: 6, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
    { id: 7, img: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=400' },
    { id: 8, img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=400' },
    { id: 9, img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <section className="relative flex flex-col pt-8 pb-3 px-8 z-10 w-full bg-[#f4efe6] text-black h-screen font-sans overflow-hidden shrink-0  ">
      
      {/* Absolute "02-A" */}
      <div className="absolute top-8 right-12 text-[#791220] text-3xl font-display font-medium">
        02-A
      </div>

      {/* Scroll Indicator */}
      <div className="absolute left-10 bottom-12 flex items-end gap-[6px] h-[100px]">
        <span className="text-[13px] font-bold uppercase tracking-[0.15em] font-sans text-[#791220] mb-[8px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          SCROLL
        </span>
        <div className="flex flex-col items-center h-full">
          <div className="w-[2px] flex-1 bg-[#F2C94C]"></div>
          <ArrowDown size={16} className="text-[#F2C94C] stroke-[3] -mt-[2px]" />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-24 flex flex-col h-full">
        {/* Header */}
        <FadeIn direction="down" delay={0.1} className="flex justify-center items-center mb-6 mt-2 flex-shrink-0 relative">
          <div className="w-5 h-5 rounded-full bg-[#00bcd4] absolute left-[22%] translate-x-12"></div>
          <h2 className="text-[5.5rem] font-display font-normal text-[#791220] uppercase tracking-tighter leading-[0.75] transform scale-y-[1.3] scale-x-95 origin-bottom relative z-10 text-center mr-8">
            SKILL & EXPERTISE
          </h2>
        </FadeIn>

        {/* 3 Columns Layout */}
        <div className="flex w-full flex-grow gap-8 mt-4 overflow-hidden mb-8">
          
          {/* Left Column */}
          <FadeIn direction="right" delay={0.3} className="flex flex-col w-[25%] h-full">
            <div className="w-full flex-grow bg-[#d31c36] p-5 flex flex-col relative overflow-hidden group shadow-md">
              <h3 className="text-white font-sans font-bold text-2xl uppercase tracking-tighter relative z-10 leading-none">KHUNG DỌC<br/>9/16</h3>
              <div className="absolute top-16 -left-8 -right-8 -bottom-16 flex items-start justify-center rotate-[-12deg] origin-top-left transition-transform duration-500 group-hover:rotate-0">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600" className="w-[120%] max-w-none h-auto object-cover rounded shadow-xl" alt="Design" />
              </div>
            </div>
            <h3 className="text-[#791220] font-sans font-bold text-2xl uppercase tracking-tighter mt-2">BREAKDOWN VFX</h3>
          </FadeIn>

          {/* Center Column */}
          <FadeIn direction="up" delay={0.4} className="flex flex-col w-[50%] h-full items-center justify-start relative">
            <h3 className="text-[#791220] font-sans font-bold text-[1.8rem] uppercase tracking-tighter mb-4 mt-[-10px]">TÊN CLIP</h3>
            <div className="w-full aspect-[21/9] bg-gray-900 overflow-hidden relative shadow-lg mb-6 group cursor-pointer">
               <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" alt="Main Clip" />
               <div className="absolute inset-0 border-[3px] border-transparent group-hover:border-[#F2C94C]/50 transition-colors"></div>
            </div>

            {/* Pyramid Grid */}
            <div className="flex flex-col items-center gap-2">
              {/* Row 1 */}
              <div className="flex gap-2">
                <div className="w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden">
                   <img src={thumbnails[0].img} className="w-full h-full object-cover opacity-80" alt="" />
                </div>
                <div className="w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden">
                   <img src={thumbnails[1].img} className="w-full h-full object-cover opacity-80" alt="" />
                </div>
              </div>
              {/* Row 2 */}
              <div className="flex gap-2">
                <div className="w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden">
                   <img src={thumbnails[2].img} className="w-full h-full object-cover opacity-80" alt="" />
                </div>
                <div className="w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden">
                   <img src={thumbnails[3].img} className="w-full h-full object-cover opacity-80" alt="" />
                </div>
                <div className="w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden">
                   <img src={thumbnails[4].img} className="w-full h-full object-cover opacity-80" alt="" />
                </div>
              </div>
              {/* Row 3 */}
              <div className="flex gap-2">
                <div className="w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden">
                   <img src={thumbnails[5].img} className="w-full h-full object-cover opacity-80" alt="" />
                </div>
                <div className="w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden">
                   <img src={thumbnails[6].img} className="w-full h-full object-cover opacity-80" alt="" />
                </div>
                <div className="w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden">
                   <img src={thumbnails[7].img} className="w-full h-full object-cover opacity-80" alt="" />
                </div>
                <div className="w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden">
                   <img src={thumbnails[8].img} className="w-full h-full object-cover opacity-80" alt="" />
                </div>
              </div>
            </div>
            
          </FadeIn>

          {/* Right Column */}
          <FadeIn direction="left" delay={0.3} className="flex flex-col w-[25%] h-full">
            <h3 className="text-[#791220] font-sans font-bold text-2xl uppercase tracking-tighter mb-2 text-left">BREAKDOWN VFX</h3>
            <div className="w-full flex-grow bg-[#d31c36] p-5 flex flex-col justify-end relative overflow-hidden group shadow-md">
              <div className="absolute top-16 -left-4 -right-16 bottom-16 flex items-center justify-center rotate-[15deg] origin-bottom-right transition-transform duration-500 group-hover:rotate-0">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600" className="w-[130%] max-w-none h-auto object-cover shadow-2xl drop-shadow-2xl" alt="Laptop" />
              </div>
              <h3 className="text-white font-sans font-bold text-2xl uppercase tracking-tighter relative z-10 leading-none text-left">KHUNG DỌC<br/>9/16</h3>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
