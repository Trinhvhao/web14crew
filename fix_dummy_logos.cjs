const fs = require('fs');
const file = 'src/components/NinthSection.tsx';

let content = fs.readFileSync(file, 'utf8');

// Replace the map function to have different numbers
content = content.replace(
  /\{key=\{i\} className="w-\[100px\] h-\[75px\] bg-\[#90CAF9\] opacity-90 flex-shrink-0 flex items-center justify-center text-black\/50 text-xs font-bold shadow-md">\s*THÊM VĂN BẢN\s*<\/div>\s*\)\)}/g,
  `{key=i} className="w-[100px] h-[75px] bg-[#90CAF9] opacity-90 flex-shrink-0 flex items-center justify-center text-black/50 text-[10px] font-bold shadow-md border border-black/10">
                    LOGO {i + 1}
                  </div>
                ))}`
);
// Above regex is broken, let's use string replace

const target = `{[...logosRow1, ...logosRow1, ...logosRow1, ...logosRow1].map((_, i) => (
                  <div key={i} className="w-[100px] h-[75px] bg-[#90CAF9] opacity-90 flex-shrink-0 flex items-center justify-center text-black/50 text-xs font-bold shadow-md">
                    THÊM VĂN BẢN
                  </div>
                ))}`;
                
const replacement = `{[...logosRow1, ...logosRow1, ...logosRow1, ...logosRow1].map((_, i) => (
                  <div key={i} className="w-[100px] h-[75px] bg-[#90CAF9] opacity-90 flex-shrink-0 flex items-center justify-center text-black/50 text-[10px] font-bold shadow-md">
                    LOGO {(i % 10) + 1}
                  </div>
                ))}`;

content = content.replace(target, replacement);

fs.writeFileSync(file, content);
