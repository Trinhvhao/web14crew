const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/if \(window\.__customLenis\)/g, "if (window.__customLenis && typeof window.__customLenis.scrollTo === 'function')");

fs.writeFileSync(file, content);
