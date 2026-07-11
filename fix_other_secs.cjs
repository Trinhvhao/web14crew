const fs = require('fs');

let content4 = fs.readFileSync('src/components/FourthSection.tsx', 'utf8');
content4 = content4.replace(
  /onClick=\{\(\) => navigate\(\`\/corp\/\$\{t\.id\}\`\)\}/g,
  `onClick={() => { window.history.replaceState(null, '', '/#corp'); navigate(\`/corp/\$\{t.id\}\`); }}`
);
fs.writeFileSync('src/components/FourthSection.tsx', content4);

let content6 = fs.readFileSync('src/components/SixthSection.tsx', 'utf8');
content6 = content6.replace(
  /onClick=\{\(\) => navigate\(\`\/prod\/\$\{t\.id\}\`\)\}/g,
  `onClick={() => { window.history.replaceState(null, '', '/#prod'); navigate(\`/prod/\$\{t.id\}\`); }}`
);
fs.writeFileSync('src/components/SixthSection.tsx', content6);

