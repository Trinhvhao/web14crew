import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tvcData } from '../data';
import FadeIn from './FadeIn';
import TextReveal from './TextReveal';
import { ArrowDown, ArrowLeft, X } from 'lucide-react';

export default function ThirdSection() { 
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { mainItem, remainingItems } = useMemo(() => {
    const activeId = id ? parseInt(id) : 1;
    const main = tvcData.find(t => t.id === activeId) || tvcData[0];
    const others = tvcData.filter(t => t.id !== main.id);
    // ensure we have 9 items for the pyramid
    while(others.length < 9) others.push(others[0]);
    return { mainItem: main, remainingItems: others.slice(0, 9) };
  }, [id]);

  

  return (
    <section className="relative flex flex-col pt-8 pb-3 px-8 z-10 w-full bg-[#f4efe6] text-black h-screen font-sans overflow-hidden shrink-0  ">
      
      {/* Absolute "02-A" */}
      <div className="absolute top-8 right-12 text-[#791220] text-3xl font-display font-medium">
        02-A
      </div>

      {/* Scroll Indicator */}
      <div className="absolute left-10 bottom-12 flex items-end gap-[6px] h-[100px]">
        <span className="text-[13px] font-bold uppercase tracking-[0.15em] font-sans text-[#791220] mb-[8px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          SCROLL
        </span>
        <div className="flex flex-col items-center h-full">
          <div className="w-[2px] flex-1 bg-[#F2C94C]"></div>
          <ArrowDown size={16} className="text-[#F2C94C] stroke-[3] -mt-[2px]" />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-24 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-center items-center mb-6 mt-2 flex-shrink-0 relative">
          <h2 className="text-[5.5rem] font-display font-normal text-[#791220] uppercase tracking-tighter leading-[0.75] transform scale-y-[1.3] scale-x-95 origin-bottom relative z-10 text-center mr-8">
            SKILL & EXPERTISE
          </h2>
        </div>

        {/* 3 Columns Layout */}
        <div className="flex w-full flex-grow gap-8 mt-4 overflow-hidden mb-8">
          
          {/* Left Column */}
          <div className="absolute top-8 left-12 z-50 flex items-center gap-4">
            <button onClick={() => navigate('/#showreel')} className="flex items-center justify-center w-10 h-10 bg-transparent text-[#791220] border border-[#791220] rounded-full hover:bg-[#791220] hover:text-[#f4efe6] transition-all group shadow-sm hover:shadow-md">
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            </button>
            <div className="text-[#791220] font-sans font-bold text-[11px] uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity" onClick={() => navigate('/')}>HOME</span>
              <span className="opacity-50">/</span>
              <span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity" onClick={() => navigate('/#showreel')}>SHOWREEL</span>
              <span className="opacity-50">/</span>
              <span className="opacity-100">{mainItem.name}</span>
            </div>
          </div>
          <div className="flex flex-col w-[25%] h-full">
            <div className="w-full flex-grow bg-[#d31c36] p-5 flex flex-col relative overflow-hidden group shadow-md">
              <h3 className="text-white font-sans font-bold text-2xl uppercase tracking-tighter relative z-10 leading-none">KHUNG DỌC<br/>9/16</h3>
              <div className="absolute top-16 -left-8 -right-8 -bottom-16 flex items-start justify-center rotate-[-12deg] origin-top-left transition-transform duration-500 group-hover:rotate-0">
                <img src={mainItem.img} className="w-[120%] max-w-none h-[120%] object-cover rounded shadow-xl opacity-90" alt={mainItem.name} />
              </div>
            </div>
            <h3 className="text-[#791220] font-sans font-bold text-2xl uppercase tracking-tighter mt-2">BREAKDOWN VFX</h3>
          </div>

          {/* Center Column */}
          <div className="flex flex-col w-[50%] h-full items-center justify-start relative">
            <h3 className="text-[#791220] font-sans font-bold text-[1.8rem] uppercase tracking-tighter mb-4 mt-[-10px]">{mainItem.name}</h3>
            <div className="w-full aspect-[21/9] bg-gray-900 overflow-hidden relative shadow-lg mb-6 group cursor-pointer">
               <img src={mainItem.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" alt={mainItem.name} />
               <div className="absolute inset-0 border-[3px] border-transparent group-hover:border-[#F2C94C]/50 transition-colors"></div>
            </div>

            {/* Pyramid Grid */}
            <div className="flex flex-col items-center gap-2">
              {/* Row 1 */}
              <div className="flex gap-2">
                <div onClick={() => { window.history.replaceState(null, '', '/#showreel'); navigate(`/tvc/${remainingItems[0].id}`); }} className="cursor-pointer hover:scale-105 transition-all w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden group shadow-sm hover:shadow-md hover:z-10 z-0">
                   <img src={remainingItems[0].img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="" />
                </div>
                <div onClick={() => { window.history.replaceState(null, '', '/#showreel'); navigate(`/tvc/${remainingItems[1].id}`); }} className="cursor-pointer hover:scale-105 transition-all w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden group shadow-sm hover:shadow-md hover:z-10 z-0">
                   <img src={remainingItems[1].img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="" />
                </div>
              </div>
              {/* Row 2 */}
              <div className="flex gap-2">
                <div onClick={() => { window.history.replaceState(null, '', '/#showreel'); navigate(`/tvc/${remainingItems[2].id}`); }} className="cursor-pointer hover:scale-105 transition-all w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden group shadow-sm hover:shadow-md hover:z-10 z-0">
                   <img src={remainingItems[2].img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="" />
                </div>
                <div onClick={() => { window.history.replaceState(null, '', '/#showreel'); navigate(`/tvc/${remainingItems[3].id}`); }} className="cursor-pointer hover:scale-105 transition-all w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden group shadow-sm hover:shadow-md hover:z-10 z-0">
                   <img src={remainingItems[3].img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="" />
                </div>
                <div onClick={() => { window.history.replaceState(null, '', '/#showreel'); navigate(`/tvc/${remainingItems[4].id}`); }} className="cursor-pointer hover:scale-105 transition-all w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden group shadow-sm hover:shadow-md hover:z-10 z-0">
                   <img src={remainingItems[4].img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="" />
                </div>
              </div>
              {/* Row 3 */}
              <div className="flex gap-2">
                <div onClick={() => { window.history.replaceState(null, '', '/#showreel'); navigate(`/tvc/${remainingItems[5].id}`); }} className="cursor-pointer hover:scale-105 transition-all w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden group shadow-sm hover:shadow-md hover:z-10 z-0">
                   <img src={remainingItems[5].img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="" />
                </div>
                <div onClick={() => { window.history.replaceState(null, '', '/#showreel'); navigate(`/tvc/${remainingItems[6].id}`); }} className="cursor-pointer hover:scale-105 transition-all w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden group shadow-sm hover:shadow-md hover:z-10 z-0">
                   <img src={remainingItems[6].img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="" />
                </div>
                <div onClick={() => { window.history.replaceState(null, '', '/#showreel'); navigate(`/tvc/${remainingItems[7].id}`); }} className="cursor-pointer hover:scale-105 transition-all w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden group shadow-sm hover:shadow-md hover:z-10 z-0">
                   <img src={remainingItems[7].img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="" />
                </div>
                <div onClick={() => { window.history.replaceState(null, '', '/#showreel'); navigate(`/tvc/${remainingItems[8].id}`); }} className="cursor-pointer hover:scale-105 transition-all w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden group shadow-sm hover:shadow-md hover:z-10 z-0">
                   <img src={remainingItems[8].img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="" />
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-[25%] h-full">
            <h3 className="text-[#791220] font-sans font-bold text-2xl uppercase tracking-tighter mb-2 text-left">BREAKDOWN VFX</h3>
            <div className="w-full flex-grow bg-[#d31c36] p-5 flex flex-col justify-end relative overflow-hidden group shadow-md">
              <div className="absolute top-16 -left-4 -right-16 bottom-16 flex items-center justify-center rotate-[15deg] origin-bottom-right transition-transform duration-500 group-hover:rotate-0">
                <img src={mainItem.img} className="w-[130%] max-w-none h-[130%] object-cover shadow-2xl drop-shadow-2xl opacity-90" alt={mainItem.name} />
              </div>
              <h3 className="text-white font-sans font-bold text-2xl uppercase tracking-tighter relative z-10 leading-none text-left">KHUNG DỌC<br/>9/16</h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
