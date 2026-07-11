const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace the Nav block in Home
const oldNavBlock = `<FadeIn delay={0.1} direction="down" className="flex justify-between items-start mb-0">`;
const newNavBlock = `<FadeIn delay={0.1} direction="down" className="fixed top-0 left-0 w-full z-[100] px-8 py-4 flex justify-between items-start bg-black/40 backdrop-blur-md border-b border-white/10 text-[#fef5e4]">`;

content = content.replace(oldNavBlock, newNavBlock);

// To prevent the content of Home from jumping up under the fixed nav, add padding-top to the main container
content = content.replace(
  `<div className="max-w-[1440px] mx-auto px-8 pt-2 pb-6 relative z-10 flex flex-col h-full w-full">`,
  `<div className="max-w-[1440px] mx-auto px-8 pt-24 pb-6 relative z-10 flex flex-col h-full w-full">`
);

fs.writeFileSync('src/App.tsx', content);
