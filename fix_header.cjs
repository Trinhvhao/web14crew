const fs = require('fs');
const file = 'src/components/EleventhSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// Remove mix-blend-difference and the p tag
content = content.replace(
  /<div className="absolute top-12 left-24 z-20 mix-blend-difference pointer-events-none">\s*<h1 className="text-\[3rem\] font-display font-normal uppercase tracking-tighter leading-\[0\.8\] transform scale-y-\[1\.3\] scale-x-\[0\.95\] origin-left text-white">\s*BEHIND THE SCENES\s*<\/h1>\s*<p className="font-sans text-sm uppercase tracking-widest font-medium mt-4 text-\[#F2C94C\]">THE ART OF PRODUCTION<\/p>\s*<\/div>/g,
  `<div className="absolute top-12 left-24 z-20 pointer-events-none">\n          <h1 className="text-[3rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left text-white drop-shadow-md">\n            BEHIND THE SCENES\n          </h1>\n        </div>`
);

fs.writeFileSync(file, content);
