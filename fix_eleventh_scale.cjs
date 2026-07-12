const fs = require('fs');
const file = 'src/components/EleventhSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// Fix scale to cover translations
content = content.replace(/const scale = 1 \+ \(idx % 3\) \* 0\.02;/g, 'const scale = 1.05 + (idx % 3) * 0.02;');

// Reduce black shadow
content = content.replace(/shadow-\[0_0_50px_rgba\(0,0,0,0\.8\)\]/g, 'shadow-[0_0_30px_rgba(0,0,0,0.4)]');

fs.writeFileSync(file, content);
