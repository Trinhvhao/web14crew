import React from 'react';
import { ArrowDown, MonitorPlay, Volume2, Camera, Radio, MessageSquare, Users } from 'lucide-react';

export default function EighthSection() {
  const services = [
    { icon: <MonitorPlay size={20} className="mb-2 stroke-[1.5]" />, title: 'TVC & PHIM QUẢNG CÁO' },
    { icon: <Volume2 size={20} className="mb-2 stroke-[1.5]" />, title: 'COMMERCIAL VIDEO' },
    { icon: <Camera size={20} className="mb-2 stroke-[1.5]" />, title: 'KEY VISUAL' },
    { icon: <Radio size={20} className="mb-2 stroke-[1.5]" />, title: 'LIVESTREAM & SỰ KIỆN' },
  ];

  const subServices = [
    { icon: <MessageSquare size={20} className="mb-2 stroke-[1.5]" />, title: 'TESTIMONIAL', desc: '' },
    { 
      icon: <Users size={20} className="mb-2 stroke-[1.5]" />, 
      title: 'ĐỘI NGŨ SẢN XUẤT VÀ HẬU CẦN',
      desc: 'Viewfinder có đội ngũ sản xuất chuyên nghiệp, được đào tạo bài bản và có'
    },
    { 
      icon: <Users size={20} className="mb-2 stroke-[1.5]" />, 
      title: 'ĐỘI NGŨ SẢN XUẤT VÀ HẬU CẦN',
      desc: 'Viewfinder có đội ngũ sản xuất chuyên nghiệp, được đào tạo bài bản và có'
    }
  ];

  const stats = [
    { number: '10', label: 'SHOOTING YEAR' },
    { number: '200+', label: 'PROJECT SCROP' },
    { number: '100+', label: 'CLIENT BRAND' },
  ];

  return (
    <section className="relative flex flex-col pt-12 pb-8 px-8 z-10 w-full bg-[#791220] text-[#f4efe6] h-screen font-sans overflow-hidden">
      
      {/* Background Watermark Image */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none flex items-center justify-center">
         <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=2000&h=1500" alt="Background Texture" className="w-full h-full object-cover filter blur-[2px] contrast-125" />
      </div>

      {/* Flower Background Image - specific to this section */}
      <div className="absolute inset-y-0 right-0 z-0 w-2/3 opacity-30 pointer-events-none flex items-end justify-center mix-blend-screen">
         <img src="https://images.unsplash.com/photo-1546851172-e1c72635bc32?auto=format&fit=crop&q=80&w=1200&h=1200" alt="White Flower" className="w-[800px] h-[800px] object-contain translate-y-32 translate-x-12" style={{ filter: 'grayscale(100%) contrast(1.2) brightness(1.5)' }} />
      </div>

      {/* Absolute "05" */}
      <div className="absolute top-8 right-12 text-[#f4efe6] text-3xl font-display font-medium z-10">
        05
      </div>

      {/* Scroll Indicator */}
      <div className="absolute left-8 bottom-24 flex flex-col items-center gap-[6px] z-10">
        <span className="text-[13px] font-bold uppercase tracking-[0.15em] font-sans text-[#F2C94C] mb-[8px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          SCROLL
        </span>
        <div className="w-[2px] h-[60px] bg-[#F2C94C]"></div>
        <ArrowDown size={16} className="text-[#F2C94C] stroke-[3] -mt-[2px]" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-24 flex flex-col h-full z-10">
        
        {/* Large Title */}
        <h1 className="text-[6rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left mb-12 text-[#f4efe6]">
          ALL-IN FOR PRODUCTION
        </h1>

        {/* Services Grid */}
        <div className="flex flex-col gap-3 mb-auto">
          {/* Top Row */}
          <div className="flex gap-3">
            {services.map((svc, idx) => (
              <div key={idx} className="w-[150px] h-[85px] bg-[#1a1a1a] flex flex-col items-center justify-center text-center p-3 hover:bg-[#222] transition-colors cursor-pointer shadow-lg">
                {svc.icon}
                <h3 className="text-[8px] font-bold tracking-widest uppercase">{svc.title}</h3>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex gap-3 pl-[81px]">
             {subServices.map((svc, idx) => (
              <div key={idx} className="w-[150px] h-[85px] bg-[#1a1a1a] flex flex-col items-center justify-center text-center p-2 hover:bg-[#222] transition-colors cursor-pointer shadow-lg">
                {svc.icon}
                <h3 className="text-[8px] font-bold tracking-widest uppercase mb-1">{svc.title}</h3>
                {svc.desc && (
                  <p className="text-[6px] text-gray-400 leading-tight px-1 font-sans">
                    {svc.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-between items-center px-12 mb-16 mt-8 w-full relative z-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-[6rem] font-display font-normal leading-[0.7] text-[#f4efe6] tracking-tighter transform scale-y-[1.2] drop-shadow-lg mb-2">
                {stat.number}
              </span>
              <span className="text-[1.8rem] font-display font-normal uppercase tracking-tight leading-none text-[#f4efe6] transform scale-y-[1.3] mt-8 drop-shadow-md">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="flex justify-between items-end pb-4 font-sans font-medium text-[1.1rem] tracking-wide text-[#f4efe6]">
          <div className="flex flex-col">
            <span>MEDIA14CREW@GMAIL.COM</span>
            <span>+123-456-7890</span>
          </div>
          <div className="text-[1.3rem] tracking-wider mb-2 pr-32">
            WWW.MEDIA14CREW.COM
          </div>
        </div>

      </div>
    </section>
  );
}
