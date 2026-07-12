const fs = require('fs');
const file = 'src/components/EleventhSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// Update background colors
content = content.replace(/bg-\[#0a0a0a\]/g, 'bg-[#791220]');
content = content.replace(/bg-\[#111\]/g, 'bg-[#4A0B13]');
content = content.replace(/bg-\[#050505\]/g, 'bg-[#5A0D18]');

// Update accents from red to brand yellow (#F2C94C)
content = content.replace(/text-red-500/g, 'text-[#F2C94C]');
content = content.replace(/bg-red-500/g, 'bg-[#F2C94C]');
content = content.replace(/shadow-\[0_0_10px_red\]/g, 'shadow-[0_0_10px_#F2C94C]');
content = content.replace(/border-red-500\/50/g, 'border-[#F2C94C]/50');

// Fix border colors to match brand
content = content.replace(/border-white\/20/g, 'border-[#F2C94C]/20');
content = content.replace(/border-white\/10/g, 'border-[#F2C94C]/10');
content = content.replace(/border-white\/5/g, 'border-[#F2C94C]/5');
content = content.replace(/bg-white\/20/g, 'bg-[#F2C94C]/20');

fs.writeFileSync(file, content);
