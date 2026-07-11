const fs = require('fs');

let content3 = fs.readFileSync('src/components/ThirdSection.tsx', 'utf8');
content3 = content3.replace(
  /onClick=\{\(\) => navigate\(\`\/tvc\/\$\{remainingItems\[(\d+)\]\.id\}\`\)\}/g,
  `onClick={() => { window.history.replaceState(null, '', '/#showreel'); navigate(\`/tvc/\$\{remainingItems[$1].id\}\`); }}`
);
fs.writeFileSync('src/components/ThirdSection.tsx', content3);

let content5 = fs.readFileSync('src/components/FifthSection.tsx', 'utf8');
content5 = content5.replace(
  /onClick=\{\(\) => navigate\(\`\/corp\/\$\{remainingItems\[(\d+)\]\.id\}\`\)\}/g,
  `onClick={() => { window.history.replaceState(null, '', '/#corp'); navigate(\`/corp/\$\{remainingItems[$1].id\}\`); }}`
);
fs.writeFileSync('src/components/FifthSection.tsx', content5);

let content7 = fs.readFileSync('src/components/SeventhSection.tsx', 'utf8');
content7 = content7.replace(
  /onClick=\{\(\) => navigate\(\`\/prod\/\$\{remainingItems\[(\d+)\]\.id\}\`\)\}/g,
  `onClick={() => { window.history.replaceState(null, '', '/#prod'); navigate(\`/prod/\$\{remainingItems[$1].id\}\`); }}`
);
fs.writeFileSync('src/components/SeventhSection.tsx', content7);

