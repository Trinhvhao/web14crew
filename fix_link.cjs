const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /Media 14Crew<br \/>Logo\n                <\/h1>\n              <\/a>/g,
  'Media 14Crew<br />Logo\n                </h1>\n              </Link>'
);

fs.writeFileSync('src/App.tsx', content);
