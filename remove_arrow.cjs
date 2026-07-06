const fs = require('fs');
let content = fs.readFileSync('src/components/FifthSection.tsx', 'utf8');

content = content.replace(
  /\{\/\* Curved arrow pointing to video \*\/\}[\s\S]*?<\/svg>/,
  ''
);

fs.writeFileSync('src/components/FifthSection.tsx', content);
