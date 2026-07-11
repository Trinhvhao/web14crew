const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  'className="flex gap-2 mb-1.5"',
  'className="flex gap-2"'
);

fs.writeFileSync('src/App.tsx', content);
