const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /<p className="text-\[10px\] font-semibold tracking-wider uppercase text-right opacity-90">\s*Bấm dô là ra link dẫn vào social\s*<\/p>/,
  ''
);

fs.writeFileSync('src/App.tsx', content);
