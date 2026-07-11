const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('Section.tsx') && f !== 'FirstSection.tsx' && f !== 'SecondSection.tsx' && f !== 'ThirdSection.tsx' && f !== 'FourthSection.tsx' && f !== 'FifthSection.tsx' && f !== 'SixthSection.tsx');

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // We want to replace specific blocks.
  // We can find `{/* Header */}`, `{/* Main Video/Image */}`, `{/* Thumbnails row */}`, `{/* Action Button */}`
  // Let's replace the first <div ...> after each comment to <FadeIn ...> and matching </div> to </FadeIn>

  function replaceBlock(comment, direction, delay) {
    const idx = content.indexOf(comment);
    if (idx === -1) return;

    const divStart = content.indexOf('<div', idx);
    if (divStart === -1) return;

    // find matching closing div
    let openCount = 0;
    let endIdx = -1;
    let inTag = false;
    let currentTag = '';
    
    // Simple tag balancer
    let pos = divStart;
    while (pos < content.length) {
      if (content.startsWith('<div', pos)) {
        openCount++;
        pos += 4;
      } else if (content.startsWith('</div>', pos)) {
        openCount--;
        if (openCount === 0) {
          endIdx = pos;
          break;
        }
        pos += 6;
      } else {
        pos++;
      }
    }

    if (endIdx !== -1) {
      // replace <div ...>
      const divClose = content.indexOf('>', divStart);
      const attrs = content.substring(divStart + 4, divClose);
      
      content = content.substring(0, divStart) 
        + `<FadeIn direction="${direction}" delay={${delay}}${attrs}>`
        + content.substring(divClose + 1, endIdx)
        + `</FadeIn>`
        + content.substring(endIdx + 6);
    }
  }

  replaceBlock('{/* Header */}', 'down', 0.1);
  replaceBlock('{/* Main Video/Image */}', 'up', 0.3);
  replaceBlock('{/* Thumbnails row */}', 'left', 0.5);
  replaceBlock('{/* Action Button */}', 'up', 0.7);
  replaceBlock('{/* 3 Columns Layout */}', 'up', 0.3);
  replaceBlock('{/* Left Column */}', 'right', 0.3);
  replaceBlock('{/* Center Column */}', 'up', 0.4);
  replaceBlock('{/* Right Column */}', 'left', 0.3);

  fs.writeFileSync(filePath, content);
  console.log(`Processed ${file}`);
});
