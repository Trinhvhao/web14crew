const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Change header background
content = content.replace(
  'header className="fixed top-0 left-0 w-full z-[100] bg-black/40 backdrop-blur-md border-b border-white/10 text-[#fef5e4]"',
  'header className="fixed top-0 left-0 w-full z-[100] noise-bg border-b border-white/10 text-[#fef5e4] shadow-md"'
);

// Reduce padding on FadeIn wrapper
content = content.replace(
  'FadeIn delay={0.1} direction="down" className="max-w-[1440px] mx-auto px-8 py-4 flex justify-between items-start w-full"',
  'FadeIn delay={0.1} direction="down" className="max-w-[1440px] mx-auto px-8 py-2 flex justify-between items-center w-full"'
);

// Reduce pb on the nav wrapper
content = content.replace(
  'className="relative flex items-center justify-between w-[400px] pb-3"',
  'className="relative flex items-center justify-between w-[400px] pb-1"'
);

fs.writeFileSync('src/App.tsx', content);
