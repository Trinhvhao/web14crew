import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { BrowserRouter, Routes, Route, useLocation, Link, useNavigationType } from 'react-router-dom';
import { Play, ArrowDown } from 'lucide-react';
import { SiVimeo, SiZalo, SiFacebook, SiYoutube } from 'react-icons/si';
import { motion } from 'motion/react';
import FadeIn from './components/FadeIn';
import FloatingContact from './components/FloatingContact';

import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import FifthSection from './components/FifthSection';
import SixthSection from './components/SixthSection';
import SeventhSection from './components/SeventhSection';
import EighthSection from './components/EighthSection';
import NinthSection from './components/NinthSection';
import TenthSection from './components/TenthSection';
import EleventhSection from './components/EleventhSection';
import CustomCursor from './components/CustomCursor';
import LensTransition from './components/LensTransition';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();
  const prevPathname = React.useRef(pathname);
  const prevHash = React.useRef(hash);

  React.useEffect(() => {
    const isSamePage = prevPathname.current === pathname;
    
    if (isSamePage && prevHash.current !== hash) {
      if (hash && hash !== '#') {
        const element = document.querySelector(`[data-scroll-id="${hash.slice(1)}"]`);
        if (element) {
          // @ts-ignore
          if (window.__customLenis && typeof window.__customLenis.scrollTo === 'function') {
            // @ts-ignore
            window.__customLenis.scrollTo(element, { offset: 0, duration: 1.2, force: true });
          } else {
             const y = element.getBoundingClientRect().top + window.scrollY;
             window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      } else {
         // @ts-ignore
         if (window.__customLenis && typeof window.__customLenis.scrollTo === 'function') {
           // @ts-ignore
           window.__customLenis.scrollTo(0, { duration: 1.2, force: true });
         } else {
           window.scrollTo({ top: 0, behavior: 'smooth' });
         }
      }
      prevHash.current = hash;
      return;
    }

    prevPathname.current = pathname;
    prevHash.current = hash;

    let timeoutId;
    let attempts = 0;
    
    const performScroll = () => {
      if (hash && hash !== '#') {
        const element = document.querySelector(`[data-scroll-id="${hash.slice(1)}"]`);
        if (element) {
          // @ts-ignore
          if (window.__customLenis && typeof window.__customLenis.scrollTo === 'function') {
            // @ts-ignore
            window.__customLenis.scrollTo(element, { offset: 0, immediate: true, force: true });
          } else {
            const y = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: y, behavior: 'instant' });
          }
        } else if (attempts < 20) {
          attempts++;
          timeoutId = setTimeout(performScroll, 50);
        }
      } else if (navType !== 'POP') {
        // @ts-ignore
        if (window.__customLenis && typeof window.__customLenis.scrollTo === 'function') {
          // @ts-ignore
          window.__customLenis.scrollTo(0, { immediate: true, force: true });
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }
    };

    timeoutId = setTimeout(performScroll, 30);

    return () => clearTimeout(timeoutId);
  }, [pathname, hash, navType]);

  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  return <>
    <CustomCursor />
    <InnerLayout>{children}</InnerLayout>
  </>
}

function InnerLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    // @ts-ignore
    window.__customLenis = lenis;
    }
    requestAnimationFrame(raf);
    return () => {
      // @ts-ignore
      window.__customLenis = undefined;
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="noise-bg text-[#fef5e4] font-sans relative selection:bg-brand-yellow selection:text-brand-red min-h-screen w-full ">
        <div 
          className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20 pointer-events-none mix-blend-screen z-0"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
            filter: 'blur(40px)'
          }}
        />
        {children}
        <FloatingContact />
      </div>
    </>
  );
}

function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] noise-bg border-b border-white/10 text-[#fef5e4] shadow-md">
            <FadeIn delay={0.1} direction="down" className="max-w-[1440px] mx-auto px-8 py-2 flex justify-between items-center w-full">
            <div className="w-1/4">
              <Link to="/" className="inline-block hover:text-brand-yellow transition-colors">
                <h1 className="font-display font-bold text-xl leading-tight uppercase tracking-wide">
                  Media 14Crew<br />Logo
                </h1>
              </Link>
            </div>
            <nav className="w-2/4 flex justify-center">
              <div className="relative flex items-center justify-between w-[400px] pb-1">
                <Link to="/#" className="font-bold text-sm uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Home</Link>
                <Link to="/#showreel" className="font-bold text-sm uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Showreel</Link>
                <Link to="/#contact" className="font-bold text-sm uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Contact</Link>
              </div>
            </nav>
            <div className="w-1/4 flex flex-col items-end">
              <div className="flex gap-2">
                <a href="#" className="w-8 h-8 bg-[#1ab7ea] rounded flex items-center justify-center text-[#fef5e4] hover:opacity-90 transition-opacity">
                  <SiVimeo size={16} />
                </a>
                
                <a href="#" className="w-8 h-8 bg-[#1877f2] rounded flex items-center justify-center text-[#fef5e4] hover:opacity-90 transition-opacity">
                  <SiFacebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-[#ff0000] rounded flex items-center justify-center text-[#fef5e4] hover:opacity-90 transition-opacity">
                  <SiYoutube size={16} />
                </a>
              </div>
            </div>
          </FadeIn>
          </header>
      <section className="h-screen relative overflow-hidden flex flex-col z-10 shrink-0 ">
        <div className="max-w-[1440px] mx-auto px-8 pt-24 pb-6 relative z-10 flex flex-col h-full w-full">
          
          
          <main className="flex-grow flex flex-col justify-center relative mt-0 mb-8">
            <motion.div 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 left-0 -translate-y-[120%] -translate-x-4 w-[550px] h-[150px] pointer-events-none z-0"
            >
              <svg viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-brand-blue overflow-visible" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <motion.path d="M -30 183 L 155 25 Q 160 15 150 35 L 120 105 Q 115 120 130 110 L 235 45 Q 240 35 230 55 L 215 85 Q 210 95 225 90 L 295 60 Q 300 50 290 65 L 280 80 Q 275 90 290 85 Q 380 70 480 40" />
              </svg>
            </motion.div>
            <div className="relative z-10">
              <FadeIn delay={0.2} direction="left">
                <h2 className="font-display font-normal uppercase text-[7.5rem] leading-[0.95] tracking-tight drop-shadow-lg text-[#fef5e4]">
                  <span className="block">Inspiration</span>
                  <span className="block">Oriented</span>
                </h2>
              </FadeIn>
              <div className="mt-2 relative w-fit pl-[120px] pt-4 pb-2">
                <motion.svg className="absolute top-0 left-0 w-[580px] h-[170px] overflow-visible pointer-events-none" fill="none" viewBox="0 0 580 170" xmlns="http://www.w3.org/2000/svg">
                  <motion.path d="M 10 10 L 80 10 Q 100 10 100 30 L 100 70 Q 100 90 120 90 L 520 90 Q 540 90 540 110 L 540 125" stroke="#F2C94C" strokeWidth="2.5" fill="none" />
                  <circle cx="506" cy="80" r="6" fill="#FFEAA7" />
                  <circle cx="522" cy="80.5" r="6" fill="#FFC312" />
                  <circle cx="538" cy="86" r="6" fill="#F79F1F" />
                  <circle cx="548" cy="100" r="6" fill="#EA2027" />
                </motion.svg>
                <FadeIn delay={0.4} direction="up" className="relative z-10 w-[580px]">
                  <p className="text-[15px] uppercase font-medium leading-[1.6] text-[#fef5e4] text-left tracking-tight font-serif pb-1">
                    BEYOND PRODUCTION, WE CRAFT HIGH-QUALITY TVCS,<br />
                    CORPORATION AND BRANDED CONTENT WHILE STRICTLY<br />
                    HONORING YOUR TIMELINE AND BUDGET.
                  </p>
                  <Link to="/#showreel" className="flex w-fit items-center gap-3 group mt-5 ml-12 border border-black/30 rounded-md p-1 pr-6 hover:bg-black/10 transition-colors">
                    <div className="w-10 h-10 bg-[#ff6b35] rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform shrink-0">
                      <Play className="text-[#fef5e4] fill-current ml-1" size={18} />
                    </div>
                    <span className="font-display font-normal uppercase tracking-wider text-[16px]">
                      WATCH OUR SHOWREEL
                    </span>
                  </Link>
                </FadeIn>
              </div>
            </div>
            <FadeIn delay={0.6} direction="right" className="absolute right-32 top-1/2 -translate-y-1/2">
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Nền là clip showreel</p>
            </FadeIn>
          </main>
          
          <FadeIn delay={0.5} direction="up" className="mt-auto flex flex-col items-center pb-4">
            <div className="w-full flex justify-center items-center mb-4 relative">
               <h3 className="text-xl font-display font-bold uppercase tracking-widest absolute -top-8">Logo đối tác</h3>
            </div>
            <div className="flex items-center justify-center gap-8 w-full">
              <div className="flex-shrink-0">
                <h3 className="text-3xl font-display font-bold uppercase tracking-widest border-r-2 border-[#fef5e4]/50 pr-6 py-2">
                  Trusted by
                </h3>
              </div>
              <div className="w-[576px] overflow-hidden relative">
                <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-brand-red to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-brand-red to-transparent z-10 pointer-events-none"></div>
                <div className="flex gap-3 w-max animate-marquee" style={{ animation: "marquee 15s linear infinite" }}>
                  {[...Array(14)].map((_, i) => (
                    <div key={i} className="w-[72px] h-[72px] bg-[#89c4f4] relative flex flex-col items-center justify-between p-1.5 shrink-0 border border-transparent hover:border-black/20 cursor-pointer">
                      <span className="text-[7px] text-gray-700 opacity-50 uppercase font-bold text-center leading-tight">Thêm văn bản</span>
                      {(i % 7) === 1 && <div className="flex gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div></div>}
                      <span className="text-[5px] text-gray-700 opacity-50 uppercase font-bold text-center">Phát đó</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={1} direction="none" className="absolute left-8 bottom-24 flex flex-col items-center gap-[6px] z-10">
          <span className="text-[13px] font-bold uppercase tracking-[0.15em] font-sans text-[#F2C94C] mb-[8px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>SCROLL</span>
          <div className="w-[2px] h-[60px] bg-[#F2C94C]"></div>
          <ArrowDown size={16} className="text-[#F2C94C] stroke-[3] -mt-[2px]" />
        </FadeIn>
      </section>

      <div data-scroll-id="showreel"><SecondSection /></div>
      <div data-scroll-id="corp"><FourthSection /></div>
      <div data-scroll-id="prod"><SixthSection /></div>
      <EleventhSection />
      <EighthSection />
      <NinthSection />
      <div data-scroll-id="contact"><TenthSection /></div>
    </>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <LensTransition>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvc/:id" element={<ThirdSection />} />
          <Route path="/corp/:id" element={<FifthSection />} />
          <Route path="/prod/:id" element={<SeventhSection />} />
        </Routes>
          </LensTransition>
      </Layout>
    </BrowserRouter>
  );
}
