const fs = require('fs');

function updateCloseButton(filePath, closeLink) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Add X icon import
  if (!content.includes(' X } from')) {
    content = content.replace(
      "import { ArrowDown } from 'lucide-react';",
      "import { ArrowDown, X } from 'lucide-react';"
    );
  }

  // Replace Quay lại button
  const oldBtnRegex = /<button onClick=\{\(\) => navigate\('\/'\)\} className="absolute top-4 left-4 z-50 bg-\[#F2C94C\] text-\[#791220\] px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-\[#e0b83e\] transition-colors rounded shadow-lg">\s*Quay lại\s*<\/button>/;
  
  const newBtn = `<button onClick={() => navigate('${closeLink}')} className="absolute top-8 left-12 z-50 flex items-center justify-center w-12 h-12 bg-transparent text-[#791220] border-2 border-[#791220] rounded-full hover:bg-[#791220] hover:text-[#f4efe6] transition-all group">
            <X size={24} className="transition-transform group-hover:scale-110 group-hover:rotate-90" />
          </button>`;

  content = content.replace(oldBtnRegex, newBtn);
  fs.writeFileSync(filePath, content);
}

updateCloseButton('src/components/ThirdSection.tsx', '/#showreel');
updateCloseButton('src/components/FifthSection.tsx', '/#');
updateCloseButton('src/components/SeventhSection.tsx', '/#');

