const fs = require('fs');
let content = fs.readFileSync('src/components/ThirdSection.tsx', 'utf8');

content = content.replace(
  /<div className="w-5 h-5 rounded-full bg-\\[#00bcd4\\] absolute left-\\[22%\\] translate-x-12"><\\/div>/,
  ''
);

fs.writeFileSync('src/components/ThirdSection.tsx', content);
