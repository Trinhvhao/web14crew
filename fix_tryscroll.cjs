const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// replace the initial timeout call with immediate call + timeout
content = content.replace(
  /timeoutId = setTimeout\(tryScroll, 10\);/,
  `tryScroll();\n    timeoutId = setTimeout(tryScroll, 10);`
);

fs.writeFileSync('src/App.tsx', content);
