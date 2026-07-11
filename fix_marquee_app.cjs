const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldStr = `<div className="flex-1 overflow-hidden relative">
                <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-brand-red to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-brand-red to-transparent z-10 pointer-events-none"></div>
                <div className="flex gap-3 w-max animate-marquee" style={{ animation: "marquee 30s linear infinite" }}>
                  {[...Array(14)].map((_, i) => (
                    <div key={i} className="w-[72px] h-[72px] bg-[#89c4f4] relative flex flex-col items-center justify-center p-1.5 shrink-0 border border-black/10">
                      <span className="text-[10px] text-gray-700 font-bold text-center leading-tight">LOGO {(i % 7) + 1}</span>
                    </div>
                  ))}
                </div>
              </div>`;

const newStr = `<div className="w-[576px] overflow-hidden relative">
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
              </div>`;

content = content.replace(oldStr, newStr);
fs.writeFileSync(file, content);
