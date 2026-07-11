const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace('SiTiktok', 'SiVimeo');

content = content.replace(
  /<a href="#" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:opacity-90 transition-opacity">[\s\S]*?<SiTiktok size={14} className="text-\[#fef5e4\]" \/>[\s\S]*?<\/a>/,
  `<a href="#" className="w-8 h-8 bg-[#1ab7ea] rounded flex items-center justify-center hover:opacity-90 transition-opacity">
                <SiVimeo size={16} className="text-[#fef5e4]" />
              </a>`
);

fs.writeFileSync('src/App.tsx', content);
