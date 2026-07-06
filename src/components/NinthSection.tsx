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
        <h1 className="text-[5rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left mb-6 text-[#f4efe6] mt-4">
          YOUR SUCCESSFUL - OUR REPUTATION
        </h1>
        </FadeIn>

        {/* Logos Container */}
        <FadeIn direction="left" delay={0.4} className="flex w-full mb-auto mt-2">
          {/* Grid */}
          <div className="flex flex-col gap-2 flex-1">
            {/* Row 1 */}
            <div className="flex gap-2">
              {logosRow1.map((_, i) => (
                <div key={`r1-${i}`} className="w-[65px] h-[65px] bg-[#90CAF9] opacity-90 rounded-sm"></div>
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex gap-2 ml-12">
              {logosRow2.map((_, i) => (
                <div key={`r2-${i}`} className="w-[65px] h-[65px] bg-[#90CAF9] opacity-90 rounded-sm"></div>
              ))}
            </div>
            {/* Row 3 */}
            <div className="flex gap-2 ml-24">
              {logosRow3.map((_, i) => (
                <div key={`r3-${i}`} className="w-[65px] h-[65px] bg-[#90CAF9] opacity-90 rounded-sm"></div>
              ))}
            </div>
          </div>
          
          {/* Logo Đối Tác Text */}
          <div className="flex flex-col justify-center ml-8 text-[1.2rem] font-bold tracking-widest leading-tight uppercase mr-32 mt-4">
            <span>LOGO</span>
            <span>ĐỐI</span>
            <span>TÁC</span>
          </div>
        </FadeIn>

        {/* Bottom Section */}
        <FadeIn direction="up" delay={0.6} className="flex flex-col mt-4 w-3/4">
          <h2 className="text-[5rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left mb-6 text-[#f4efe6]">
            ROLLING - ACTION!
          </h2>

          <div className="flex gap-24 text-[1.1rem] leading-relaxed font-medium uppercase tracking-wide">
            {/* Column 1 */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="font-bold mb-1">ĐỊA CHỈ</span>
                <span>TẦNG 8, TÒA NHÀ PEARL PLAZA</span>
                <span>361 ĐIỆN BIÊN PHỦ............................</span>
              </div>
              <div className="flex gap-4 mt-2">
                 <span className="font-bold">MAIL</span>
              </div>
              <div className="flex gap-4">
                 <span className="font-bold">PHONE</span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2">
              <span className="font-bold mb-1">ARTICLE</span>
              <span>PRODUCTION HOUSE</span>
              <span>CÔNG TY LÀM PHIM QUẢNG CÁO</span>
              <span>SHOOTING TVC</span>
              <span>CORPORATION</span>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
