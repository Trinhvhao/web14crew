const fs = require('fs');
const file = 'src/components/NinthSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/  \);\n\}\n  \);\n\}/, '  );\n}');

fs.writeFileSync(file, content);
