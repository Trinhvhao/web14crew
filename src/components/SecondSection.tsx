import React from 'react';
import { ArrowDown, Play } from 'lucide-react';

export default function SecondSection() {
  const thumbnails = [
    { id: 1, name: 'CAKE BANK', num: '1', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 3, name: 'VP BANK', num: '3', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 4, name: 'VIETNAM AIRLINE', num: '4', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 5, name: 'KEEP & FLY', num: '5', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 6, name: 'SUBARU VIETNAM', num: '6', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 7, name: 'BESWIS', num: '7', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 8, name: '', num: '8', img: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=400&h=250' }
  ];

  return (
    <section className="relative flex flex-col pt-8 pb-3 px-8 z-10 w-full bg-[#f4efe6] text-black h-screen font-sans overflow-hidden">
      
      {/* Absolute "02" */}
      <div className="absolute top-8 right-12 text-[#791220] text-3xl font-display font-medium">
        02
      </div>

      {/* Scroll Indicator */}
      <div className="absolute left-8 bottom-24 flex flex-col items-center gap-[6px]">
        <span className="text-[13px] font-bold uppercase tracking-[0.15em] font-sans text-[#791220] mb-[8px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          SCROLL
        </span>
        <div className="w-[2px] h-[60px] bg-[#F2C94C]"></div>
        <ArrowDown size={16} className="text-[#F2C94C] stroke-[3] -mt-[2px]" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-24 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-end mb-4 flex-shrink-0">
          {/* Left Title */}
          <div className="flex items-end gap-1">
            <h2 className="text-[3.5rem] font-display font-normal text-[#791220] uppercase tracking-tighter leading-[0.75] transform scale-y-[1.3] scale-x-95 origin-bottom mr-1">
              ON AIR
            </h2>
            <span className="text-[3.5rem] font-sans font-light text-black leading-[0.75] transform scale-y-[1.1] scale-x-75 origin-bottom mx-1 -mb-1">/</span>
            <div className="flex flex-col pl-1 mb-1">
              <h3 className="text-[1.5rem] font-sans font-bold uppercase tracking-tight border-b-[3px] border-black pb-0 leading-none">
                TVC - ITVC
              </h3>
              <div className="flex gap-2 justify-center mt-2">
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-pink-100 to-pink-300"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-pink-300 to-orange-400"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-orange-400 to-red-500"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-purple-400 to-blue-500"></div>
              </div>
            </div>
          </div>
          
          {/* Right Title */}
          <div className="flex flex-col text-[#791220] font-display text-[1.5rem] leading-[1.1] tracking-tight pb-3">
            <span className="font-normal opacity-90">TÊN DỰ ÁN</span>
            <span className="font-bold">THÔNG ĐIỆP BRAND</span>
          </div>
        </div>

        {/* Main Video/Image */}
        <div className="relative w-full shadow-lg bg-white p-2 pb-0 flex-1 min-h-0">
          <img 
            src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=1600&h=600" 
            alt="Main Feature" 
            className="w-full h-full object-cover object-center" 
          />
          
          {/* Decorators */}
          <div className="absolute top-12 left-40 w-12 h-12 rounded-full bg-[#1abc9c]"></div>
        </div>

        {/* Thumbnails row */}
        <div className="mt-8 overflow-hidden w-full pb-2 flex-shrink-0 h-[120px]">
          <div className="animate-marquee gap-5 h-full">
            {[...thumbnails, ...thumbnails].map((t, idx) => (
              <div key={`${t.id}-${idx}`} className="relative w-[220px] h-full flex-shrink-0 group cursor-pointer overflow-hidden bg-gray-900 border border-transparent hover:border-brand-yellow transition-all">
                <img src={t.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" alt={t.name} />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                
                <div className="absolute bottom-2 left-0 w-full text-center text-[#f4efe6] font-display text-[1.2rem] font-bold tracking-wider z-10 leading-tight uppercase px-4 drop-shadow-md">
                  {t.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-4 flex-shrink-0">
          <button className="flex items-center gap-2 border-[1px] border-black/80 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
            <div className="w-4 h-4 rounded-full bg-[#e74c3c] flex items-center justify-center">
              <Play size={8} className="fill-current text-white ml-[1px]" />
            </div>
            WATCH ALL ON YOUTUBE
          </button>
        </div>
      </div>
    </section>
  );
}
