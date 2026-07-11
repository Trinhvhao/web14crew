const fs = require('fs');

const files = [
  'src/components/ThirdSection.tsx',
  'src/components/FifthSection.tsx',
  'src/components/SeventhSection.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace the back button onClick
  content = content.replace(
    /onClick=\{\(\) => navigate\('\/#[a-z]+'\)\}/g,
    `onClick={() => navigate(-1)}`
  );

  fs.writeFileSync(file, content);
});

