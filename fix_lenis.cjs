const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/window\.lenis/g, 'window.__customLenis');

fs.writeFileSync(file, content);
