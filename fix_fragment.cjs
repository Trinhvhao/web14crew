const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  '<CustomCursor />\n    <div className="noise-bg',
  '<>\n    <CustomCursor />\n    <div className="noise-bg'
);

content = content.replace(
  '  );\n}\n',
  '    </>\n  );\n}\n'
);

fs.writeFileSync('src/App.tsx', content);
