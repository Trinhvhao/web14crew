const fs = require('fs');

function removeThumbnails(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/const thumbnails = \[\s*\{[\s\S]*?\];/g, '');
  fs.writeFileSync(filePath, content);
}

removeThumbnails('src/components/SecondSection.tsx');
removeThumbnails('src/components/FourthSection.tsx');
removeThumbnails('src/components/SixthSection.tsx');
