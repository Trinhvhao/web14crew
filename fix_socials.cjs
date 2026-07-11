const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

if (!content.includes('import { SiTiktok, SiZalo, SiFacebook, SiYoutube }')) {
  content = content.replace(
    "import { Play, Facebook, Youtube, MessageCircle, Video, ArrowDown } from 'lucide-react';",
    "import { Play, ArrowDown } from 'lucide-react';\nimport { SiTiktok, SiZalo, SiFacebook, SiYoutube } from 'react-icons/si';"
  );
}

content = content.replace(
  /<a href="#" className="w-8 h-8 bg-\[#00adef\] rounded flex items-center justify-center hover:opacity-90 transition-opacity">[\s\S]*?<\/a>/,
  `<a href="#" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:opacity-90 transition-opacity">
                <SiTiktok size={14} className="text-[#fef5e4]" />
              </a>`
);

content = content.replace(
  /<a href="#" className="w-8 h-8 bg-\[#0068ff\] rounded flex items-center justify-center hover:opacity-90 transition-opacity">[\s\S]*?<\/a>/,
  `<a href="#" className="w-8 h-8 bg-[#0068ff] rounded flex items-center justify-center hover:opacity-90 transition-opacity">
                <SiZalo size={18} className="text-[#fef5e4]" />
              </a>`
);

content = content.replace(
  /<a href="#" className="w-8 h-8 bg-\[#1877f2\] rounded flex items-center justify-center hover:opacity-90 transition-opacity">[\s\S]*?<\/a>/,
  `<a href="#" className="w-8 h-8 bg-[#1877f2] rounded flex items-center justify-center hover:opacity-90 transition-opacity">
                <SiFacebook size={16} className="text-[#fef5e4]" />
              </a>`
);

content = content.replace(
  /<a href="#" className="w-8 h-8 bg-\[#ff0000\] rounded flex items-center justify-center hover:opacity-90 transition-opacity">[\s\S]*?<\/a>/,
  `<a href="#" className="w-8 h-8 bg-[#ff0000] rounded flex items-center justify-center hover:opacity-90 transition-opacity">
                <SiYoutube size={16} className="text-[#fef5e4]" />
              </a>`
);

fs.writeFileSync('src/App.tsx', content);
