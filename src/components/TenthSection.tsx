import React from 'react';

export default function TenthSection() {
  return (
    <section className="relative flex flex-col pt-12 pb-8 px-8 z-10 w-full bg-[#791220] text-[#f4efe6] h-screen font-sans overflow-hidden">
      
      {/* Background Watermark Image */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none flex items-center justify-center">
         <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=2000&h=1500" alt="Background Texture" className="w-full h-full object-cover filter blur-[2px] contrast-125" />
      </div>

      {/* Flower Background Image */}
      <div className="absolute inset-x-0 bottom-0 z-0 w-full opacity-40 pointer-events-none flex items-end justify-center mix-blend-screen overflow-hidden">
         <img src="https://images.unsplash.com/photo-1546851172-e1c72635bc32?auto=format&fit=crop&q=80&w=1200&h=1200" alt="White Flower" className="w-[800px] h-[800px] object-contain translate-y-1/3" style={{ filter: 'grayscale(100%) contrast(1.2) brightness(1.5)' }} />
      </div>

      {/* Vertical Lines */}
      <div className="absolute top-0 bottom-0 left-[33%] w-[1px] bg-white/20 z-0"></div>
      <div className="absolute top-0 bottom-0 left-[66%] w-[1px] bg-white/20 z-0"></div>

      {/* Absolute "07" */}
      <div className="absolute top-8 right-12 text-[#f4efe6] text-3xl font-display font-medium z-10">
        07
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-12 flex flex-col h-full z-10 relative">
        
        {/* Top Left Title */}
        <h1 className="text-[9rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left mt-12 text-[#f4efe6] mb-24">
          SAY HELLO
        </h1>

        {/* Decorative Inputs */}
        <div className="flex flex-col gap-12 w-full max-w-lg mt-12">
          {/* Input 1 */}
          <div className="flex">
            {Array(15).fill(0).map((_, i) => (
              <div key={i} className="w-[18px] h-[10px] bg-[#f4efe6] mr-[2px]"></div>
            ))}
          </div>
          {/* Input 2 */}
          <div className="flex">
            {Array(22).fill(0).map((_, i) => (
              <div key={i} className="w-[18px] h-[10px] bg-[#f4efe6] mr-[2px]"></div>
            ))}
          </div>
          {/* Input 3 */}
          <div className="flex">
            {Array(30).fill(0).map((_, i) => (
              <div key={i} className="w-[18px] h-[10px] bg-[#f4efe6] mr-[2px]"></div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto flex justify-center items-end w-full pb-8">
          <div className="flex flex-col items-center text-center font-bold tracking-widest text-[1rem]">
             <span className="mb-1">MEDIA14CREW@GMAIL.COM</span>
             <span>+123-456-7890</span>
          </div>
          
          <div className="absolute bottom-8 right-12 font-bold tracking-widest text-[1rem]">
            WWW.MEDIA14CREW.COM
          </div>
        </div>

      </div>
    </section>
  );
}
