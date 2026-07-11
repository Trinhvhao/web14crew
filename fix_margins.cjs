const fs = require('fs');
const files = ['src/components/FifthSection.tsx', 'src/components/SeventhSection.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Change pt-24 to pt-16
  content = content.replace(/gap-12 pt-24"/g, 'gap-12 pt-[4.5rem]"');
  
  // Change mb-12 to mb-6 in the paragraph
  content = content.replace(/opacity-90 mb-12 max-w-\[95%\]/g, 'opacity-90 mb-6 max-w-[95%]');

  // Change mb-16 to mb-8 in the grid
  content = content.replace(/gap-3 w-full mb-16 relative/g, 'gap-3 w-full mb-6 relative');

  fs.writeFileSync(file, content);
});
