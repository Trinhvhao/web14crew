import React from 'react';
import ParallaxImage from './ParallaxImage';
import FadeIn from './FadeIn';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export default function NinthSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const logosRow1 = Array(10).fill(0);
  const logosRow2 = Array(10).fill(0);
  const logosRow3 = Array(10).fill(0);

  return (
    <section ref={ref} className="relative flex flex-col pt-8 pb-6 px-8 z-10 w-full bg-[#791220] text-[#f4efe6] h-screen font-sans overflow-hidden shrink-0  ">
      
      {/* Background Watermark Image */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none flex items-center justify-center">
         <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=2000&h=1500" alt="Background Texture" className="w-full h-full object-cover filter blur-[2px] contrast-125" />
      </div>

      {/* Flower Background Image */}
      <ParallaxImage src="https://images.unsplash.com/photo-1546851172-e1c72635bc32?auto=format&fit=crop&q=80&w=1200&h=1200" alt="White Flower" className="w-[800px] h-[800px] object-contain translate-y-32 translate-x-12" style={{ filter: 'grayscale(100%) contrast(1.2) brightness(1.5)' }} offset={150} />

      {/* Absolute "06" */}
      <div className="absolute top-8 right-12 text-[#f4efe6] text-3xl font-display font-medium z-10">
        06
      </div>

      {/* Scroll Indicator */}
      <div className="absolute left-8 bottom-24 flex flex-col items-center gap-[6px] z-10">
        <span className="text-[13px] font-bold uppercase tracking-[0.15em] font-sans text-[#F2C94C] mb-[8px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          SCROLL
        </span>
        <div className="w-[2px] h-[60px] bg-[#F2C94C]"></div>
        <ArrowDown size={16} className="text-[#F2C94C] stroke-[3] -mt-[2px]" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-24 flex flex-col h-full z-10 relative">
        
        {/* Top Title */}
        <FadeIn direction="down" delay={0.2}>
        <h1 className="text-[5rem] font-display font-bold uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left mb-6 text-[#f4efe6] mt-4">
          YOUR SUCCESSFUL - OUR REPUTATION
        </h1>
        </FadeIn>

        {/* Main Content Area */}
        <div className="flex-1 w-full flex flex-col md:flex-row mt-8 z-10 relative">
          
          {/* Left Column: Logos and Bottom Info */}
          <div className="flex flex-col w-full md:w-[85%] pr-8">
            
            {/* Logos Grid */}
            <FadeIn direction="up" delay={0.4} className="w-full">
              <div className="flex flex-col gap-3">
                {/* Row 1 */}
                <div className="flex gap-3">
                  {Array(10).fill(0).map((_, i) => (
                    <div key={`r1-${i}`} className="w-[85px] h-[85px] bg-[#90CAF9] opacity-90 rounded-sm flex flex-col items-center justify-between p-1.5 border border-black/10">
                      <span className="text-[6px] text-gray-700 opacity-50 uppercase font-bold text-center leading-tight">Thêm văn bản</span>
                      <span className="text-[11px] text-gray-700 font-bold text-center leading-tight">LOGO {i + 1}</span>
                      <span className="text-[5px] text-gray-700 opacity-50 uppercase font-bold text-center">Phát đó</span>
                    </div>
                  ))}
                </div>
                {/* Row 2 */}
                <div className="flex gap-3 ml-8">
                  {Array(10).fill(0).map((_, i) => (
                    <div key={`r2-${i}`} className="w-[85px] h-[85px] bg-[#90CAF9] opacity-90 rounded-sm flex flex-col items-center justify-between p-1.5 border border-black/10">
                      <span className="text-[6px] text-gray-700 opacity-50 uppercase font-bold text-center leading-tight">Thêm văn bản</span>
                      <span className="text-[11px] text-gray-700 font-bold text-center leading-tight">LOGO {i + 1}</span>
                      <span className="text-[5px] text-gray-700 opacity-50 uppercase font-bold text-center">Phát đó</span>
                    </div>
                  ))}
                </div>
                {/* Row 3 */}
                <div className="flex gap-3 ml-16">
                  {Array(10).fill(0).map((_, i) => (
                    <div key={`r3-${i}`} className="w-[85px] h-[85px] bg-[#90CAF9] opacity-90 rounded-sm flex flex-col items-center justify-between p-1.5 border border-black/10">
                      <span className="text-[6px] text-gray-700 opacity-50 uppercase font-bold text-center leading-tight">Thêm văn bản</span>
                      <span className="text-[11px] text-gray-700 font-bold text-center leading-tight">LOGO {i + 1}</span>
                      <span className="text-[5px] text-gray-700 opacity-50 uppercase font-bold text-center">Phát đó</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Bottom Section */}
            <FadeIn direction="up" delay={0.6} className="mt-16 w-full">
              <h2 className="text-[6.5rem] font-display font-bold uppercase tracking-tighter leading-[0.8] transform scale-y-[1.2] scale-x-[0.95] origin-left mb-6 text-[#f4efe6]">
                ROLLING - ACTION!
              </h2>
              
              <div className="flex gap-20 text-[1rem] leading-relaxed font-medium uppercase tracking-wide">
                {/* Column 1 */}
                <div className="flex flex-col gap-4 max-w-[400px]">
                  <div className="flex flex-col">
                    <span className="font-bold text-lg mb-1">ĐỊA CHỈ</span>
                    <span className="tracking-widest">TẦNG 8, TÒA NHÀ PEARL PLAZA</span>
                    <span className="tracking-widest">361 ĐIỆN BIÊN PHỦ............................</span>
                  </div>
                  <div className="flex flex-col gap-3 mt-4">
                     <span className="font-bold text-lg tracking-widest">MAIL</span>
                     <span className="font-bold text-lg tracking-widest">PHONE</span>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-1 max-w-[400px]">
                  <span className="font-bold text-lg mb-2">ARTICLE</span>
                  <span className="tracking-widest">PRODUCTION HOUSE</span>
                  <span className="tracking-widest">CÔNG TY LÀM PHIM QUẢNG CÁO</span>
                  <span className="tracking-widest">SHOOTING TVC</span>
                  <span className="tracking-widest">CORPORATION</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: LOGO ĐỐI TÁC */}
          <FadeIn direction="left" delay={0.8} className="w-full md:w-[15%] flex flex-col justify-center pl-8 pt-8 z-10">
            <div className="flex flex-col text-[1.8rem] font-display font-bold tracking-widest leading-[1.1] uppercase">
              <span>LOGO</span>
              <span>ĐỐI</span>
              <span>TÁC</span>
            </div>
          </FadeIn>

        </div>
        
        {/* NỀN LÀ SHOWREEL 2 (Absolute right) */}
        <div className="absolute right-24 bottom-48 text-[#f4efe6] font-display font-bold text-xl tracking-wider uppercase z-10 drop-shadow-md">
          NỀN LÀ SHOWREEL 2
        </div>
      </div>
    </section>
  );
}
