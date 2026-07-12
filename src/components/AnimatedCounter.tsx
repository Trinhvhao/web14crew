import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

export default function AnimatedCounter({ value, duration = 2, suffix = '' }: { value: number, duration?: number, suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" }); // removed once: true
  
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.floor(current) + suffix);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    } else {
      spring.set(0); // reset to 0 when out of view
    }
  }, [inView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
