const fs = require('fs');
let content = fs.readFileSync('src/components/SeventhSection.tsx', 'utf8');

// Replace pt-8 with pt-24 in the main layout wrapper
content = content.replace(/<div className="max-w-\[1440px\] mx-auto w-full px-24 flex h-full gap-12 pt-8">/, '<div className="max-w-[1440px] mx-auto w-full px-24 flex h-full gap-12 pt-24">');

fs.writeFileSync('src/components/SeventhSection.tsx', content);
