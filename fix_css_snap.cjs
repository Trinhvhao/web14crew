const fs = require('fs');
let c = fs.readFileSync('src/index.css', 'utf8');
c = c.replace(/html, body \{\s*height: 100%;\s*scroll-snap-type: y mandatory;\s*overflow-y: scroll;\s*overflow-x: hidden;\s*\}/g, 'html {\n  scroll-snap-type: y mandatory;\n  overflow-x: hidden;\n}\nbody {\n  overflow-x: hidden;\n}');
fs.writeFileSync('src/index.css', c);
