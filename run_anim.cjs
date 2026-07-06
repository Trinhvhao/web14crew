const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('Section.tsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('import FadeIn')) {
    content = content.replace("import React", "import React from 'react';\nimport FadeIn from './FadeIn';\nimport React");
    // Clean up if I accidentally duplicated
    content = content.replace("import React from 'react';\nimport FadeIn from './FadeIn';\nimport React from 'react';", "import React from 'react';\nimport FadeIn from './FadeIn';");
    
    // Replace <div className="max-w-[1440px]... ">
    // Since there is only one such div per section usually
    content = content.replace(/<div className="max-w-\[1440px\].*?">/, (match) => {
      return `<FadeIn direction="up" delay={0.2} className="${match.match(/className="(.*?)"/)[1]}">`;
    });

    // Replace the matching closing div. It's tricky to parse HTML, but the closing div is usually right before `</section>`
    content = content.replace(/<\/div>\s*<\/section>/, '</FadeIn>\n    </section>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
