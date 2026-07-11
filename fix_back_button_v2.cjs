const fs = require('fs');

function replaceBack(file, hashText, hashUrl) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/onClick=\{\(\) => navigate\(-1\)\}/g, "onClick={() => navigate('" + hashUrl + "')}");
  content = content.replace(/<span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity" onClick=\{\(\) => navigate\('[^']+'\)\}>SHOWREEL<\/span>/g, '<span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity" onClick={() => navigate(\'' + hashUrl + '\')}>' + hashText + '</span>');
  fs.writeFileSync(file, content);
}

replaceBack('src/components/ThirdSection.tsx', 'SHOWREEL', '/#showreel');
replaceBack('src/components/FifthSection.tsx', 'OTHER', '/#corp');
replaceBack('src/components/SeventhSection.tsx', 'PRODUCTION', '/#prod');

