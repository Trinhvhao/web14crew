const fs = require('fs');
const file = 'src/components/LensTransition.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/initial={{ filter: "blur\\(15px\\)", scale: 1.05 }}/g, 'initial={{ filter: "blur(15px)" }}');
content = content.replace(/animate={{ filter: "blur\\(0px\\)", scale: 1 }}/g, 'animate={{ filter: "blur(0px)" }}');

fs.writeFileSync(file, content);
