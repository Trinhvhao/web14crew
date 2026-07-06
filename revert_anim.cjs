const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('Section.tsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace wrapper FadeIn back to div
  content = content.replace(/<FadeIn direction="up" delay=\{0\.2\} className="(.*?)">/, '<div className="$1">');
  content = content.replace(/<\/FadeIn>\n\s*<\/section>/, '</div>\n    </section>');
  
  fs.writeFileSync(filePath, content);
  console.log(`Reverted ${file}`);
});
