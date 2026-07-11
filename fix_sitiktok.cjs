const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  '<a href="#" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:opacity-90 transition-opacity">\n                <SiTiktok size={14} className="text-[#fef5e4]" />\n              </a>',
  '<a href="#" className="w-8 h-8 bg-[#1ab7ea] rounded flex items-center justify-center hover:opacity-90 transition-opacity">\n                <SiVimeo size={16} className="text-[#fef5e4]" />\n              </a>'
);

// Fallback if formatting is slightly different
if (content.includes('SiTiktok')) {
  content = content.replace(/SiTiktok/g, 'SiVimeo');
  content = content.replace(/bg-black/g, 'bg-[#1ab7ea]'); 
}

fs.writeFileSync('src/App.tsx', content);
