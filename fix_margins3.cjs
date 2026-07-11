const fs = require('fs');
const files = ['src/components/FifthSection.tsx', 'src/components/SeventhSection.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Change mb-auto mt-2 to mb-auto mt-0
  content = content.replace(/className="mb-auto mt-2"/g, 'className="mb-auto mt-0"');
  
  // Right column spacing
  content = content.replace(/mb-6/g, 'mb-4');
  content = content.replace(/mb-8/g, 'mb-4');

  // Also in left column, the grid had mb-6, which is now mb-4
  // And the header text had mb-4
  content = content.replace(/inline-block pb-1 mb-4 w-fit/g, 'inline-block pb-1 mb-2 w-fit');

  fs.writeFileSync(file, content);
});
