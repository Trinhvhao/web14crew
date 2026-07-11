const fs = require('fs');
const file = 'src/components/NinthSection.tsx';

let content = fs.readFileSync(file, 'utf8');

// Replace the animate-marquee div with inline animation if needed, or add a more specific tailwind animation class.
// But first let's see if we can use a custom tailwind animation instead.
