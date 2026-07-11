const fs = require('fs');

const files = [
  'src/components/ThirdSection.tsx',
  'src/components/FifthSection.tsx',
  'src/components/SeventhSection.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace <FadeIn with <div
  content = content.replace(/<FadeIn/g, '<div');
  
  // Replace </FadeIn> with </div>
  content = content.replace(/<\/FadeIn>/g, '</div>');
  
  // Remove delay={...} and direction="..."
  content = content.replace(/\sdelay=\{[\d.]+\}/g, '');
  content = content.replace(/\sdirection="[^"]+"/g, '');
  
  fs.writeFileSync(file, content);
});

