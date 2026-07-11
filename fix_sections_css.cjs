const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('Section.tsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find the first <section className="..."> and append ' shrink-0 snap-start snap-always'
  content = content.replace(/<section className="([^"]+)">/, (match, p1) => {
    // If it already has snap-start, ignore
    if (p1.includes('snap-start')) return match;
    return `<section className="${p1} shrink-0 snap-start snap-always">`;
  });

  fs.writeFileSync(filePath, content);
  console.log(`Updated CSS for ${file}`);
});
