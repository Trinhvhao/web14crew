const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /<a href="#" className="w-8 h-8 bg-\[#0068ff\] rounded flex items-center justify-center hover:opacity-90 transition-opacity">\s*<SiZalo size=\{18\} className="text-\[#fef5e4\]" \/>\s*<\/a>/,
  ''
);

fs.writeFileSync('src/App.tsx', content);
