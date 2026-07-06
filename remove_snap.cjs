const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('Section.tsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/snap-start/g, '');
  content = content.replace(/snap-always/g, '');
  fs.writeFileSync(filePath, content);
});

let cssContent = fs.readFileSync('src/index.css', 'utf8');
cssContent = cssContent.replace('scroll-snap-type: y mandatory;', '');
fs.writeFileSync('src/index.css', cssContent);

