const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

if (!content.includes('import CustomCursor')) {
  content = content.replace(
    "import React from 'react';",
    "import React from 'react';\nimport CustomCursor from './components/CustomCursor';"
  );
  
  content = content.replace(
    '<div className="noise-bg',
    '<CustomCursor />\n    <div className="noise-bg'
  );
  
  fs.writeFileSync('src/App.tsx', content);
}

let cssContent = fs.readFileSync('src/index.css', 'utf8');
if (!cssContent.includes('cursor: none')) {
  cssContent += '\n* {\n  cursor: none !important;\n}\n';
  fs.writeFileSync('src/index.css', cssContent);
}

