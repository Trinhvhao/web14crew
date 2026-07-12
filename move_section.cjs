const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the block
content = content.replace(
  /<div data-scroll-id="prod"><SixthSection \/><\/div>\n      <EighthSection \/>\n      <EleventhSection \/>/g,
  '<div data-scroll-id="prod"><SixthSection /></div>\n      <EleventhSection />\n      <EighthSection />'
);

fs.writeFileSync(file, content);
