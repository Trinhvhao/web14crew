const fs = require('fs');
const file = 'src/components/LensTransition.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/className="w-full h-full"/g, 'className="w-full h-full"\n        style={{ transform: "none" }}');

fs.writeFileSync(file, content);
