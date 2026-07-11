const fs = require('fs');
let content = fs.readFileSync('src/components/SecondSection.tsx', 'utf8');

content = content.replace(
  /onClick=\{\(\) => navigate\(\`\/tvc\/\$\{t\.id\}\`\)\}/g,
  `onClick={() => { window.history.replaceState(null, '', '/#showreel'); navigate(\`/tvc/\$\{t.id\}\`); }}`
);

fs.writeFileSync('src/components/SecondSection.tsx', content);
