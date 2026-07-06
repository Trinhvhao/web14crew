const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Change from h-screen overflow-y-scroll snap-y snap-mandatory 
// to min-h-screen
content = content.replace(
  'h-screen w-full overflow-y-scroll overflow-x-hidden snap-y snap-mandatory',
  'min-h-screen w-full overflow-x-hidden'
);

fs.writeFileSync('src/App.tsx', content);

let cssContent = fs.readFileSync('src/index.css', 'utf8');
if (!cssContent.includes('scroll-snap-type')) {
  cssContent += '\nhtml, body {\n  height: 100%;\n  scroll-snap-type: y mandatory;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n';
  fs.writeFileSync('src/index.css', cssContent);
}

