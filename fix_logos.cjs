const fs = require('fs');
const file = 'src/components/NinthSection.tsx';

let content = fs.readFileSync(file, 'utf8');

const targetRegex = /\{\/\*\s*Logos Container\s*\*\/\}.*?<\/FadeIn>/s;

const replacement = `{/* Logos Container */}
        <FadeIn direction="up" delay={0.4} className="flex flex-col w-full mb-auto mt-12">
          <h3 className="text-center font-display font-bold text-3xl uppercase tracking-widest mb-4 z-20">LOGO ĐỐI TÁC</h3>
          <div className="flex items-center w-full">
            <h2 className="text-[4rem] font-display font-bold uppercase mr-6 whitespace-nowrap leading-none transform scale-y-[1.2]">TRUSTED BY</h2>
            <div className="w-[2px] h-[90px] bg-[#f4efe6] opacity-50 mr-6 shrink-0"></div>
            
            {/* Running Logos */}
            <div className="flex-1 overflow-hidden relative w-full h-[90px]">
              <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#791220] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#791220] to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex animate-marquee gap-4 h-full items-center w-max">
                {[...logosRow1, ...logosRow1, ...logosRow1, ...logosRow1].map((_, i) => (
                  <div key={i} className="w-[100px] h-[75px] bg-[#90CAF9] opacity-90 flex-shrink-0 flex items-center justify-center text-black/50 text-xs font-bold shadow-md">
                    THÊM VĂN BẢN
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>`;

content = content.replace(targetRegex, replacement);
fs.writeFileSync(file, content);
