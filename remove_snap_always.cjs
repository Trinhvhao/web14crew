const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('Section.tsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/snap-always/g, '');
  fs.writeFileSync(filePath, content);
});

let appContent = fs.readFileSync('src/App.tsx', 'utf8');
appContent = appContent.replace(/snap-always/g, '');
fs.writeFileSync('src/App.tsx', appContent);

console.log('Removed snap-always');
