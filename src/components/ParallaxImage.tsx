import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function ParallaxImage({ src, alt, className, style, offset = 150 }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  
  return (
    <div ref={ref} className="w-full h-full absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0 mix-blend-screen opacity-30">
      <motion.img 
        src={src} 
        alt={alt} 
        className={className} 
        style={{ ...style, y }} 
      />
    </div>
  );
}
