const fs = require('fs');
let content = fs.readFileSync('src/components/FifthSection.tsx', 'utf8');

const target = '<h1 className="text-[3.5rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left">\n              CROPORATION FILM...\n            </h1>';

const replace = `<div className="flex items-center w-full whitespace-nowrap">
              <h1 className="text-[3.5rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left">
                CROPORATION FILM...
              </h1>
              <div className="flex-grow h-[2px] bg-[#f4efe6] relative ml-2 -mt-4 opacity-80 min-w-[50px]">
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-[#f4efe6]"></div>
              </div>
            </div>`;

content = content.replace(target, replace);
fs.writeFileSync('src/components/FifthSection.tsx', content);
