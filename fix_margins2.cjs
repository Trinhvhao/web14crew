const fs = require('fs');
const files = ['src/components/FifthSection.tsx', 'src/components/SeventhSection.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Change pt-[4.5rem] to pt-14
  content = content.replace(/pt-\[4\.5rem\]/g, 'pt-14');
  
  // Change mb-6 to mb-2 in the paragraph
  content = content.replace(/opacity-90 mb-6 max-w-\[95%\]/g, 'opacity-90 mb-2 max-w-[95%]');

  // Make the title smaller maybe?
  // content = content.replace(/text-\[3\.5rem\]/g, 'text-[3.2rem]');

  fs.writeFileSync(file, content);
});
