const fs = require('fs');
let c = fs.readFileSync('src/index.css', 'utf8');
c = c.replace(/html {\s*scroll-snap-type:[^}]*}\s*section {\s*scroll-snap-align:[^}]*}/g, '');
fs.writeFileSync('src/index.css', c);
