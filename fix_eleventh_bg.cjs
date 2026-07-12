const fs = require('fs');
const file = 'src/components/EleventhSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// Fix opacity and add background to sticky div
content = content.replace(/opacity-10 mix-blend-overlay/g, 'opacity-20 mix-blend-overlay');
content = content.replace(/className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center"/g, 'className="sticky top-0 h-screen w-full bg-[#791220] overflow-hidden flex flex-col justify-center items-center"');

fs.writeFileSync(file, content);
