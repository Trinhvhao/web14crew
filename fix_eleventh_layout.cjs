const fs = require('fs');
const file = 'src/components/EleventhSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// Change the main frame
content = content.replace(
  /<div className="relative h-\[50vh\] max-h-\[600px\] aspect-\[16\\\/9\] border border-\[#F2C94C\]\/20 bg-black\/20 z-10 flex items-center justify-center overflow-hidden shadow-\[0_0_30px_rgba\(0,0,0,0\.4\)\]">/g,
  `<div className="relative w-[90vw] md:w-[75vw] lg:w-[65vw] max-w-[1100px] flex flex-col z-10">
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
          
          <div className="relative w-full aspect-video border border-[#F2C94C]/30 bg-black/40 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">`
);

// We need to close the extra div after the mapping and overlays.
// Look for Action Safe Area
content = content.replace(
  /          \{\/\* Action Safe Area \*\/}\n          <div className="absolute inset-\[10%\] pointer-events-none border border-\[#F2C94C\]\/10 z-20" \/>\n        <\/div>/g,
  `          {/* Action Safe Area */}
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
      </div>`
);

// Remove the floating timecode since we integrated it
content = content.replace(
  /        \{\/\* Timecode Overlay \*\/}\n        <div className="absolute top-\[25%\] right-24 font-mono text-4xl text-\[#F2C94C\] z-20 pointer-events-none mix-blend-screen opacity-80 flex flex-col items-end drop-shadow-lg">\n            <div className="text-\[12px\] text-white tracking-widest mb-1">SRC TC<\/div>\n            <motion\.div>\{timecodeStr\}<\/motion\.div>\n            <div className="flex gap-4 mt-4 text-\[12px\] text-\[#F2C94C\] font-sans font-bold tracking-widest uppercase">\n                <span>REC 709<\/span>\n                <span>24FPS<\/span>\n                <span>4K DCI<\/span>\n            <\/div>\n        <\/div>/g,
  ''
);

fs.writeFileSync(file, content);
