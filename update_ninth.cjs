const fs = require('fs');
const file = 'src/components/NinthSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace Logos Container and Bottom section with custom exact structure
content = content.replace(
  /\{\/\*\s*Logos Container\s*\*\/\}.*?<\/section>/s,
  `{/* Main Content Area */}
        <div className="flex-1 w-full flex flex-col md:flex-row mt-8 z-10 relative">
          
          {/* Left Column: Logos and Bottom Info */}
          <div className="flex flex-col w-full md:w-[85%] pr-8">
            
            {/* Logos Grid */}
            <FadeIn direction="up" delay={0.4} className="w-full">
              <div className="flex flex-col gap-3">
                {/* Row 1 */}
                <div className="flex gap-3">
                  {Array(10).fill(0).map((_, i) => (
                    <div key={\`r1-\${i}\`} className="w-[85px] h-[85px] bg-[#90CAF9] opacity-90 rounded-sm flex flex-col items-center justify-between p-1.5 border border-black/10">
                      <span className="text-[6px] text-gray-700 opacity-50 uppercase font-bold text-center leading-tight">Thêm văn bản</span>
                      <span className="text-[11px] text-gray-700 font-bold text-center leading-tight">LOGO {i + 1}</span>
                      <span className="text-[5px] text-gray-700 opacity-50 uppercase font-bold text-center">Phát đó</span>
                    </div>
                  ))}
                </div>
                {/* Row 2 */}
                <div className="flex gap-3 ml-8">
                  {Array(10).fill(0).map((_, i) => (
                    <div key={\`r2-\${i}\`} className="w-[85px] h-[85px] bg-[#90CAF9] opacity-90 rounded-sm flex flex-col items-center justify-between p-1.5 border border-black/10">
                      <span className="text-[6px] text-gray-700 opacity-50 uppercase font-bold text-center leading-tight">Thêm văn bản</span>
                      <span className="text-[11px] text-gray-700 font-bold text-center leading-tight">LOGO {i + 1}</span>
                      <span className="text-[5px] text-gray-700 opacity-50 uppercase font-bold text-center">Phát đó</span>
                    </div>
                  ))}
                </div>
                {/* Row 3 */}
                <div className="flex gap-3 ml-16">
                  {Array(10).fill(0).map((_, i) => (
                    <div key={\`r3-\${i}\`} className="w-[85px] h-[85px] bg-[#90CAF9] opacity-90 rounded-sm flex flex-col items-center justify-between p-1.5 border border-black/10">
                      <span className="text-[6px] text-gray-700 opacity-50 uppercase font-bold text-center leading-tight">Thêm văn bản</span>
                      <span className="text-[11px] text-gray-700 font-bold text-center leading-tight">LOGO {i + 1}</span>
                      <span className="text-[5px] text-gray-700 opacity-50 uppercase font-bold text-center">Phát đó</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Bottom Section */}
            <FadeIn direction="up" delay={0.6} className="mt-16 w-full">
              <h2 className="text-[6.5rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.2] scale-x-[0.95] origin-left mb-6 text-[#f4efe6]">
                ROLLING - ACTION!
              </h2>
              
              <div className="flex gap-20 text-[1rem] leading-relaxed font-medium uppercase tracking-wide">
                {/* Column 1 */}
                <div className="flex flex-col gap-4 max-w-[400px]">
                  <div className="flex flex-col">
                    <span className="font-bold text-lg mb-1">ĐỊA CHỈ</span>
                    <span className="tracking-widest">TẦNG 8, TÒA NHÀ PEARL PLAZA</span>
                    <span className="tracking-widest">361 ĐIỆN BIÊN PHỦ............................</span>
                  </div>
                  <div className="flex flex-col gap-3 mt-4">
                     <span className="font-bold text-lg tracking-widest">MAIL</span>
                     <span className="font-bold text-lg tracking-widest">PHONE</span>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-1 max-w-[400px]">
                  <span className="font-bold text-lg mb-2">ARTICLE</span>
                  <span className="tracking-widest">PRODUCTION HOUSE</span>
                  <span className="tracking-widest">CÔNG TY LÀM PHIM QUẢNG CÁO</span>
                  <span className="tracking-widest">SHOOTING TVC</span>
                  <span className="tracking-widest">CORPORATION</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: LOGO ĐỐI TÁC */}
          <FadeIn direction="left" delay={0.8} className="w-full md:w-[15%] flex flex-col justify-center pl-8 pt-8 z-10">
            <div className="flex flex-col text-[1.8rem] font-display font-bold tracking-widest leading-[1.1] uppercase">
              <span>LOGO</span>
              <span>ĐỐI</span>
              <span>TÁC</span>
            </div>
          </FadeIn>

        </div>
        
        {/* NỀN LÀ SHOWREEL 2 (Absolute right) */}
        <div className="absolute right-24 bottom-48 text-[#f4efe6] font-display font-bold text-xl tracking-wider uppercase z-10 drop-shadow-md">
          NỀN LÀ SHOWREEL 2
        </div>
      </div>
    </section>
  );
}`
);

fs.writeFileSync(file, content);
