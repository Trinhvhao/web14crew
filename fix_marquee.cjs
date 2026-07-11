const fs = require('fs');
const file = 'src/components/NinthSection.tsx';

let content = fs.readFileSync(file, 'utf8');

// Replace the animate-marquee div with explicit styles
content = content.replace(
  /<div className="animate-marquee gap-4 h-full items-center">/g, 
  '<div className="animate-marquee gap-4 h-full items-center" style={{ animation: "marquee 30s linear infinite" }}>'
);

fs.writeFileSync(file, content);
