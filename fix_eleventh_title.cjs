const fs = require('fs');
const file = 'src/components/EleventhSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the title
content = content.replace(
  /<div className="absolute top-12 left-0 w-full z-20 pointer-events-none">\s*<div className="max-w-\[1440px\] mx-auto px-24 w-full">\s*<h1 className="text-\[6rem\] font-display font-normal uppercase tracking-tighter leading-\[0\.8\] transform scale-y-\[1\.3\] scale-x-\[0\.95\] origin-left text-white drop-shadow-md">\s*BEHIND THE SCENES\s*<\/h1>\s*<\/div>\s*<\/div>/g,
  `<div className="absolute top-12 left-0 w-full z-20 pointer-events-none">
          <div className="max-w-[1440px] mx-auto px-24 w-full">
            <h1 className="text-[3.5rem] font-display font-normal uppercase tracking-tighter leading-[0.75] transform scale-y-[1.3] scale-x-95 origin-bottom text-white drop-shadow-md">
              BEHIND THE SCENES
            </h1>
          </div>
        </div>`
);

fs.writeFileSync(file, content);
