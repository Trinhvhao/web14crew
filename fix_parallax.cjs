const fs = require('fs');

function applyTo(file) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('import ParallaxImage')) {
    content = content.replace("import React from 'react';", "import React from 'react';\nimport ParallaxImage from './ParallaxImage';");
  }
  
  // For TenthSection
  content = content.replace(
    /<div className="absolute inset-x-0 bottom-0 z-0 w-full opacity-40 pointer-events-none flex items-end justify-center mix-blend-screen overflow-hidden">[\s\S]*?<\/div>/,
    `<ParallaxImage src="https://images.unsplash.com/photo-1546851172-e1c72635bc32?auto=format&fit=crop&q=80&w=1200&h=1200" alt="White Flower" className="w-[800px] h-[800px] object-contain translate-y-1/3" style={{ filter: 'grayscale(100%) contrast(1.2) brightness(1.5)' }} offset={200} />`
  );
  
  // For EighthSection and NinthSection
  content = content.replace(
    /<div className="absolute inset-y-0 right-0 z-0 w-2\/3 opacity-30 pointer-events-none flex items-end justify-center mix-blend-screen">[\s\S]*?<\/div>/,
    `<ParallaxImage src="https://images.unsplash.com/photo-1546851172-e1c72635bc32?auto=format&fit=crop&q=80&w=1200&h=1200" alt="White Flower" className="w-[800px] h-[800px] object-contain translate-y-32 translate-x-12" style={{ filter: 'grayscale(100%) contrast(1.2) brightness(1.5)' }} offset={150} />`
  );
  
  fs.writeFileSync(file, content);
}

applyTo('src/components/EighthSection.tsx');
applyTo('src/components/NinthSection.tsx');
applyTo('src/components/TenthSection.tsx');

