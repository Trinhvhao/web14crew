const fs = require('fs');

function updateListingSection(filePath, dataImport, dataVar, linkPrefix) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('react-router-dom')) {
    content = content.replace("import React from 'react';", `import React from 'react';\nimport { useNavigate } from 'react-router-dom';\nimport { ${dataVar} } from '../data';`);
  }
  
  if (content.includes('const thumbnails = [')) {
    content = content.replace(/const thumbnails = \[\s*\{ id: 1[\s\S]*?\];/g, '');
  }
  
  if (!content.includes('const navigate = useNavigate();')) {
    content = content.replace(/export default function [A-Za-z]+\(\) \{/, `$& \n  const navigate = useNavigate();\n  const thumbnails = ${dataVar};`);
  }
  
  content = content.replace(/className="relative w-\[220px\] h-full flex-shrink-0 group cursor-pointer overflow-hidden bg-gray-900 border border-transparent hover:border-brand-yellow transition-all"/g, 
    `className="relative w-[220px] h-full flex-shrink-0 group cursor-pointer overflow-hidden bg-gray-900 border border-transparent hover:border-brand-yellow transition-all" onClick={() => navigate(\`${linkPrefix}/\${t.id}\`)}`);
    
  fs.writeFileSync(filePath, content);
}

updateListingSection('src/components/SecondSection.tsx', 'tvcData', 'tvcData', '/tvc');
updateListingSection('src/components/FourthSection.tsx', 'corpData', 'corpData', '/corp');
updateListingSection('src/components/SixthSection.tsx', 'prodData', 'prodData', '/prod');

// Also fix arrow down to be motion from 'motion/react' and useScroll if they use parallax, wait...
