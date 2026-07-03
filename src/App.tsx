import React from 'react';
import { Play, Facebook, Youtube, MessageCircle, Video, ArrowDown } from 'lucide-react';

export default function App() {
  return (
    <div className="h-screen noise-bg text-white font-sans relative overflow-hidden selection:bg-brand-yellow selection:text-brand-red">
      
      {/* Background Floral Overlay Placeholder */}
      <div 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20 pointer-events-none mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(40px)'
        }}
      />

      {/* Main Content Wrapper */}
      <div className="max-w-[1440px] mx-auto px-8 py-6 relative z-10 flex flex-col h-full">
        
        {/* Header */}
        <header className="flex justify-between items-start mb-4">
          {/* Logo */}
          <div className="w-1/4">
            <h1 className="font-display font-bold text-xl leading-tight uppercase tracking-wide">
              Media 14Crew<br />Logo
            </h1>
          </div>

          {/* Navigation */}
          <nav className="w-2/4 flex justify-center">
            <div className="relative flex items-center justify-between w-[400px] pb-3">
              <a href="#" className="font-bold text-xl uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Home</a>
              <a href="#" className="font-bold text-xl uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Showreel</a>
              <a href="#" className="font-bold text-xl uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Contact</a>
              
              {/* Yellow Underline */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-yellow/80 z-0 shadow-[0_0_8px_rgba(242,201,76,0.5)]"></div>
            </div>
          </nav>

          {/* Socials */}
          <div className="w-1/4 flex flex-col items-end">
            <div className="flex gap-2 mb-1.5">
              <a href="#" className="w-8 h-8 bg-[#00adef] rounded flex items-center justify-center hover:opacity-90 transition-opacity">
                <Video size={16} className="text-white fill-current" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#0068ff] rounded flex items-center justify-center hover:opacity-90 transition-opacity">
                <MessageCircle size={16} className="text-white fill-current" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#1877f2] rounded flex items-center justify-center hover:opacity-90 transition-opacity">
                <Facebook size={16} className="text-white fill-current" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#ff0000] rounded flex items-center justify-center hover:opacity-90 transition-opacity">
                <Youtube size={16} className="text-white fill-current" />
              </a>
            </div>
            <p className="text-[10px] font-semibold tracking-wider uppercase text-right opacity-90">
              Bấm dô là ra link dẫn vào social
            </p>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-grow flex flex-col justify-center relative mt-0 mb-8">
          
          {/* Blue Scribble SVG Placeholder */}
          <div className="absolute top-1/2 left-0 -translate-y-[120%] -translate-x-4 w-[550px] h-[150px] pointer-events-none z-0">
            <svg viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-brand-blue" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 20 140 L 155 25 Q 160 15 150 35 L 120 105 Q 115 120 130 110 L 235 45 Q 240 35 230 55 L 215 85 Q 210 95 225 90 L 295 60 Q 300 50 290 65 L 280 80 Q 275 90 290 85 Q 380 70 480 40" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="font-display font-bold uppercase text-[7.5rem] leading-[0.95] tracking-tight drop-shadow-lg">
              <span className="block text-[#fff0ed]">Inspiration</span>
              <span className="block text-[#fff0ed]">Oriented</span>
            </h2>
            
            <div className="mt-2 relative w-fit pl-[120px] pt-4 pb-2">
              {/* Yellow Decorative Line */}
              <svg 
                className="absolute top-0 left-0 w-[640px] h-[170px] overflow-visible pointer-events-none" 
                fill="none" 
                viewBox="0 0 640 170"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 10 10 L 80 10 Q 100 10 100 30 L 100 70 Q 100 90 120 90 L 580 90 Q 600 90 600 110 L 600 125" 
                  stroke="#F2C94C" 
                  strokeWidth="2.5" 
                  fill="none" 
                />
                
                {/* 4 Dots in an arc outside the corner */}
                <circle cx="566" cy="80" r="4.5" fill="#FFEAA7" />
                <circle cx="582" cy="80.5" r="5.5" fill="#FFC312" />
                <circle cx="598" cy="86" r="6.5" fill="#F79F1F" />
                <circle cx="608" cy="100" r="7.5" fill="#EA2027" />
              </svg>
              
              <div className="relative z-10 w-[550px]">
                <p className="text-[13px] uppercase font-medium leading-[1.6] text-white text-left tracking-[0.03em] font-sans pb-1">
                  BEYOND PRODUCTION, WE CRAFT HIGH-QUALITY TVCS,<br />
                  CROPORATION AND BRANDED CONTENT WHILE STRICTLY<br />
                  HONORING YOUR TIMELINE AND BUDGET.
                </p>
                
                <button className="flex items-center gap-3 group mt-5 ml-12 border border-black/30 rounded-md p-1 pr-6 hover:bg-black/10 transition-colors">
                  <div className="w-10 h-10 bg-[#ff6b35] rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform shrink-0">
                    <Play className="text-white fill-current ml-1" size={18} />
                  </div>
                  <span className="font-display font-normal uppercase tracking-wider text-[16px]">
                    WATCH OUTR SHOWREEL
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right side ghost text */}
          <div className="absolute right-32 top-1/2 -translate-y-1/2">
            <p className="text-sm font-bold uppercase tracking-widest opacity-80">
              Nền là clip showreel
            </p>
          </div>
        </main>

        {/* Footer / Trusted By */}
        <footer className="mt-auto flex flex-col items-center pb-4">
          <div className="w-full flex justify-center items-center mb-4 relative">
             <h3 className="text-xl font-display font-bold uppercase tracking-widest absolute -top-8">Logo đối tác</h3>
          </div>
          
          <div className="flex items-center justify-center gap-8 w-full">
            <div className="flex-shrink-0">
              <h3 className="text-3xl font-display font-bold uppercase tracking-widest border-r-2 border-white/50 pr-6 py-2">
                Trusted by
              </h3>
            </div>
            
            <div className="flex gap-3 overflow-hidden">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-[72px] h-[72px] bg-[#89c4f4] relative flex flex-col items-center justify-between p-1.5">
                  <span className="text-[7px] text-gray-700 opacity-50 uppercase font-bold text-center leading-tight">Thêm văn bản</span>
                  {i === 1 && <div className="flex gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div></div>}
                  <span className="text-[5px] text-gray-700 opacity-50 uppercase font-bold text-center">Phát đó</span>
                </div>
              ))}
            </div>
          </div>
        </footer>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute left-6 bottom-12 flex flex-col items-center gap-4">
        <span className="rotate-[-90deg] uppercase font-bold tracking-widest text-sm translate-y-8 origin-bottom">Scroll</span>
        <div className="h-20 w-[1.5px] bg-brand-yellow/50 relative">
          <ArrowDown className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-brand-yellow" size={16} />
        </div>
      </div>

    </div>
  );
}
