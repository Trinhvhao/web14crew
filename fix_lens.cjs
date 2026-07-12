const fs = require('fs');
const file = 'src/components/LensTransition.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/animate={{ filter: "blur\\(0px\\)", scale: 1 }}/g, 'animate={{ filter: "blur(0px)", scale: 1 }}\n        onAnimationComplete={() => { document.getElementById("lens-wrapper").style.transform = "none"; }}');

content = content.replace(/<motion\.div\n        initial={{/g, '<motion.div\n        id="lens-wrapper"\n        initial={{');

fs.writeFileSync(file, content);
