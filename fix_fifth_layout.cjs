const fs = require('fs');

let content = fs.readFileSync('src/components/FifthSection.tsx', 'utf8');

// Replace pt-8 with pt-24 in the main layout wrapper
content = content.replace(/<div className="max-w-\[1440px\] mx-auto w-full px-24 flex h-full gap-12 pt-8">/, '<div className="max-w-[1440px] mx-auto w-full px-24 flex h-full gap-12 pt-24">');

// Replace OTHER with CORPORATION
content = content.replace(/<span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity" onClick=\{\(\) => navigate\('\/#corp'\)\}>OTHER<\/span>/g, '<span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity" onClick={() => navigate(\'/#corp\')}>CORPORATION</span>');

fs.writeFileSync('src/components/FifthSection.tsx', content);
