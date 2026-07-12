const fs = require('fs');
const file = 'src/components/EleventhSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// Change the inner dark reds to match the #791220 background, or transparent so they blend
content = content.replace(/bg-\[#4A0B13\]/g, 'bg-black/20');
content = content.replace(/bg-\[#5A0D18\]/g, 'bg-black/40');

fs.writeFileSync(file, content);
