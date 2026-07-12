const fs = require('fs');
const file = 'src/components/EleventhSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// Fix title
content = content.replace(
  /<div className="absolute top-12 left-24 z-20 pointer-events-none">\s*<h1 className="text-\[3rem\] font-display font-normal uppercase tracking-tighter leading-\[0\.8\] transform scale-y-\[1\.3\] scale-x-\[0\.95\] origin-left text-white drop-shadow-md">\s*BEHIND THE SCENES\s*<\/h1>\s*<\/div>/g,
  `<div className="absolute top-12 left-0 w-full z-20 pointer-events-none">
          <div className="max-w-[1440px] mx-auto px-24 w-full">
            <h1 className="text-[6rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left text-white drop-shadow-md">
              BEHIND THE SCENES
            </h1>
          </div>
        </div>`
);

// Fix frame size
content = content.replace(
  /className="relative w-\[90vw\] md:w-\[75vw\] lg:w-\[65vw\] max-w-\[1100px\] flex flex-col z-10 mt-\[-5vh\]"/g,
  'className="relative w-[80vw] md:w-[60vw] lg:w-[45vw] max-w-[750px] flex flex-col z-10 mt-8"'
);

fs.writeFileSync(file, content);
