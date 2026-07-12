import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';

const baseImages = [
  "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1518131672697-613becd4fab5?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1527555611100-3fb1c9dcb9ea?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200"
];

const btsImages = Array(8).fill(baseImages).flat();

export default function EleventhSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.floor(latest * (btsImages.length - 1));
    setActiveIndex(idx);
  });

  const timecodeStr = useTransform(scrollYProgress, (latest) => {
    const totalFrames = latest * 1000;
    const mins = Math.floor(totalFrames / (24 * 60)).toString().padStart(2, '0');
    const secs = Math.floor((totalFrames / 24) % 60).toString().padStart(2, '0');
    const frames = Math.floor(totalFrames % 24).toString().padStart(2, '0');
    return `00:${mins}:${secs}:${frames}`;
  });

  const timelineX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#791220] text-[#f4efe6] h-[300vh]">
      <div className="sticky top-0 h-screen w-full bg-[#791220] overflow-hidden flex flex-col justify-center items-center">
        
        {/* Background Noise/Texture */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none flex items-center justify-center">
           <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=2000&h=1500" alt="Background Texture" className="w-full h-full object-cover filter blur-[2px] contrast-125" />
        </div>

        {/* Absolute number */}
        <div className="absolute top-8 right-12 text-[#f4efe6] text-3xl font-display font-medium z-20">
          06
        </div>

        {/* Header Text */}
        <div className="absolute top-12 left-0 w-full z-20 pointer-events-none">
          <div className="max-w-[1440px] mx-auto px-24 w-full">
            <h1 className="text-[3.5rem] font-display font-normal uppercase tracking-tighter leading-[0.75] transform scale-y-[1.3] scale-x-95 origin-bottom text-white drop-shadow-md">
              BEHIND THE SCENES
            </h1>
          </div>
        </div>

        {/* Viewer Program Monitor */}
        <div className="relative w-[80vw] md:w-[60vw] lg:w-[40vw] max-w-[550px] flex flex-col z-10 mt-8">
          {/* Top Bar */}
          <div className="flex justify-between items-end mb-2 px-1">
            <div className="text-[10px] text-[#F2C94C] font-mono tracking-widest uppercase opacity-80 flex gap-4">
              <span>Viewer - Program</span>
              <span className="hidden sm:inline">1920x1080</span>
              <span className="hidden sm:inline">Fit</span>
            </div>
            <div className="text-[#F2C94C] font-mono text-xl tracking-wider flex items-center gap-2 drop-shadow-md">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <motion.div>{timecodeStr}</motion.div>
            </div>
          </div>
          
          {/* Center Frame sequence */}
          <div className="relative w-full aspect-video border border-[#F2C94C]/30 bg-black/40 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            {btsImages.map((src, idx) => {
              const isActive = activeIndex === idx;
              const scale = 1.05 + (idx % 3) * 0.02;
              const tx = (idx % 5 - 2) * 2;
              const ty = (idx % 4 - 1.5) * 2;
              return (
                <img 
                  key={idx}
                  src={src}
                  alt="BTS Frame"
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? `scale(${scale}) translate(${tx}px, ${ty}px)` : 'scale(1)',
                    zIndex: isActive ? 10 : 0
                  }}
                />
              );
            })}
            
            {/* Crosshair / Center mark */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center mix-blend-difference z-20 opacity-50">
              <div className="w-[40px] h-[1px] bg-[#F2C94C] absolute" />
              <div className="w-[1px] h-[40px] bg-[#F2C94C] absolute" />
              <div className="w-[80%] h-[80%] border border-[#F2C94C]/50 absolute" />
            </div>
            
            {/* Action Safe Area */}
            <div className="absolute inset-[10%] pointer-events-none border border-[#F2C94C]/10 z-20" />
          </div>
          
          {/* Editor Controls Bar */}
          <div className="w-full h-10 mt-2 flex items-center justify-between px-4 bg-black/20 border border-[#F2C94C]/20 backdrop-blur-sm">
             <div className="flex gap-4 text-[#F2C94C]/60 text-[10px] font-mono">
                <span>00:00:00:00</span>
             </div>
             <div className="flex gap-6 items-center">
                <svg className="w-3 h-3 fill-[#F2C94C]/80" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
                <svg className="w-4 h-4 fill-[#F2C94C]/80" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                <svg className="w-3 h-3 fill-[#F2C94C]/80" viewBox="0 0 24 24"><path d="M6 6h12v12H6z"/></svg>
                <svg className="w-3 h-3 fill-[#F2C94C]/80" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
             </div>
             <div className="flex gap-4 text-[#F2C94C] text-[10px] font-mono">
                <motion.div>{timecodeStr}</motion.div>
             </div>
          </div>
        </div>

        {/* Timeline Scrubber UI at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[15vh] border-t border-[#F2C94C]/10 bg-black/40 z-20 flex flex-col justify-center overflow-hidden">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#F2C94C] z-30 transform -translate-x-1/2 shadow-[0_0_10px_#F2C94C]" />
            <div className="w-full h-full relative flex items-center">
                <motion.div 
                    className="flex items-center absolute left-1/2 h-full"
                    style={{ x: timelineX, width: "300%" }}
                >
                    {/* Tick marks */}
                    {Array.from({ length: 150 }).map((_, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center justify-end h-full pb-6 gap-2 relative border-l border-[#F2C94C]/5">
                            {i % 10 === 0 && <span className="text-[10px] font-mono text-white/50 absolute top-4">{i * 10}</span>}
                            <div className={`w-[1px] bg-[#F2C94C]/20 ${i % 10 === 0 ? 'h-[30px]' : i % 5 === 0 ? 'h-[15px]' : 'h-[8px]'}`} />
                        </div>
                    ))}
                </motion.div>
            </div>
            
            {/* Timeline audio tracks mockup */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-black/20 flex flex-col justify-around opacity-50 px-4">
                <div className="w-full h-[2px] bg-green-500/30" />
                <div className="w-full h-[2px] bg-green-500/30" />
            </div>
        </div>
      </div>
    </section>
  );
}
