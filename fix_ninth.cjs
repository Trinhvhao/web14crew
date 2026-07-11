const fs = require('fs');
const file = 'src/components/NinthSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetRegex = /\{\/\*\s*Logos Container\s*\*\/\}.*?<\/FadeIn>/s;

const replacement = `{/* Logos Container */}
        <FadeIn direction="left" delay={0.4} className="flex w-full mb-auto mt-2">
          {/* Grid */}
          <div className="flex flex-col gap-2 flex-1">
            {/* Row 1 */}
            <div className="flex gap-2">
              {logosRow1.map((_, i) => (
                <div key={\`r1-\${i}\`} className="w-[65px] h-[65px] bg-[#90CAF9] opacity-90 rounded-sm flex flex-col items-center justify-between p-1 border border-black/10">
                  <span className="text-[6px] text-gray-700 opacity-50 uppercase font-bold text-center leading-tight">Thêm văn bản</span>
                  <span className="text-[10px] text-gray-700 font-bold text-center leading-tight">LOGO {i + 1}</span>
                  <span className="text-[5px] text-gray-700 opacity-50 uppercase font-bold text-center">Phát đó</span>
                </div>
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex gap-2 ml-12">
              {logosRow2.map((_, i) => (
                <div key={\`r2-\${i}\`} className="w-[65px] h-[65px] bg-[#90CAF9] opacity-90 rounded-sm flex flex-col items-center justify-between p-1 border border-black/10">
                  <span className="text-[6px] text-gray-700 opacity-50 uppercase font-bold text-center leading-tight">Thêm văn bản</span>
                  <span className="text-[10px] text-gray-700 font-bold text-center leading-tight">LOGO {i + 1}</span>
                  <span className="text-[5px] text-gray-700 opacity-50 uppercase font-bold text-center">Phát đó</span>
                </div>
              ))}
            </div>
            {/* Row 3 */}
            <div className="flex gap-2 ml-24">
              {logosRow3.map((_, i) => (
                <div key={\`r3-\${i}\`} className="w-[65px] h-[65px] bg-[#90CAF9] opacity-90 rounded-sm flex flex-col items-center justify-between p-1 border border-black/10">
                  <span className="text-[6px] text-gray-700 opacity-50 uppercase font-bold text-center leading-tight">Thêm văn bản</span>
                  <span className="text-[10px] text-gray-700 font-bold text-center leading-tight">LOGO {i + 1}</span>
                  <span className="text-[5px] text-gray-700 opacity-50 uppercase font-bold text-center">Phát đó</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Logo Đối Tác Text */}
          <div className="flex flex-col justify-center ml-8 text-[1.2rem] font-bold tracking-widest leading-tight uppercase mr-32 mt-4">
            <span>LOGO</span>
            <span>ĐỐI</span>
            <span>TÁC</span>
          </div>
        </FadeIn>`;

content = content.replace(targetRegex, replacement);
fs.writeFileSync(file, content);
