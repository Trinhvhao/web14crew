import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovered(true);
        const customText = target.getAttribute('data-cursor-text') || target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
        if (customText) {
          setCursorText(customText);
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-[1.5px] border-[#F2C94C] pointer-events-none z-[9999] flex items-center justify-center text-[10px] font-bold text-black whitespace-nowrap overflow-hidden shadow-sm"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? (cursorText ? 2.5 : 1.5) : 1,
          backgroundColor: isHovered ? (cursorText ? '#F2C94C' : 'rgba(242, 201, 76, 0.1)') : 'transparent',
          borderColor: isHovered ? 'transparent' : '#F2C94C',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <motion.span 
          animate={{ opacity: cursorText ? 1 : 0, y: cursorText ? 0 : 10 }} 
          className="uppercase tracking-wider"
        >
          {cursorText}
        </motion.span>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#F2C94C] rounded-full pointer-events-none z-[10000]"
        style={{
          x: useSpring(cursorX, { damping: 40, stiffness: 1000 }),
          y: useSpring(cursorY, { damping: 40, stiffness: 1000 }),
          translateX: 13,
          translateY: 13,
        }}
        animate={{
          opacity: isHovered && cursorText ? 0 : 1,
          scale: isHovered && !cursorText ? 0 : 1
        }}
      />
    </>
  );
}
