const fs = require('fs');

let appContent = fs.readFileSync('src/App.tsx', 'utf8');
appContent = appContent.replace("import CustomCursor from './components/CustomCursor';\n", "");
appContent = appContent.replace("<CustomCursor />\n", "");
fs.writeFileSync('src/App.tsx', appContent);

let cssContent = fs.readFileSync('src/index.css', 'utf8');
cssContent = cssContent.replace(/\* \{\s*cursor: none !important;\s*\}/g, "");
fs.writeFileSync('src/index.css', cssContent);
