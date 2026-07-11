const fs = require('fs');

function updateDetailSection(filePath, dataImport, dataVar) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('useParams')) {
    content = content.replace("import React from 'react';", `import React, { useMemo } from 'react';\nimport { useParams, useNavigate } from 'react-router-dom';\nimport { ${dataVar} } from '../data';`);
  }
  
  if (content.includes('const thumbnails = [')) {
    content = content.replace(/const thumbnails = \[\s*\{ id: 1[\s\S]*?\];/g, '');
  }
  
  if (!content.includes('const { id } = useParams();')) {
    content = content.replace(/export default function [A-Za-z]+\(\) \{/, `$& \n  const { id } = useParams();\n  const navigate = useNavigate();\n  \n  const { mainItem, remainingItems } = useMemo(() => {\n    const activeId = id ? parseInt(id) : 1;\n    const main = ${dataVar}.find(t => t.id === activeId) || ${dataVar}[0];\n    const others = ${dataVar}.filter(t => t.id !== main.id);\n    // ensure we have 9 items for the pyramid\n    while(others.length < 9) others.push(others[0]);\n    return { mainItem: main, remainingItems: others.slice(0, 9) };\n  }, [id]);\n`);
  }
  
  // Replace main image
  content = content.replace(
    /<img src="https:\/\/images.unsplash.com\/photo-1542204165-65bf26472b9b\?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" alt="Main Clip" \/>/,
    `<img src={mainItem.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" alt={mainItem.name} />`
  );
  
  // Fallback if image path was different in Fifth/Seventh
  content = content.replace(
    /<img src="https:\/\/images.unsplash.com\/photo-1522202176988-66273c2fd55f[\s\S]*?" alt="Main Clip" \/>/,
    `<img src={mainItem.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" alt={mainItem.name} />`
  );

  content = content.replace(
    /<img src="https:\/\/images.unsplash.com\/photo-[\s\S]*?" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" alt="Main Clip" \/>/g,
    `<img src={mainItem.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" alt={mainItem.name} />`
  );
  
  // Update TÊN CLIP to use mainItem.name
  content = content.replace(
    /<h3 className="text-\[#791220\] font-sans font-bold text-\[1\.8rem\] uppercase tracking-tighter mb-4 mt-\[-10px\]">TÊN CLIP<\/h3>/,
    `<h3 className="text-[#791220] font-sans font-bold text-[1.8rem] uppercase tracking-tighter mb-4 mt-[-10px]">{mainItem.name}</h3>`
  );
  
  // Replace pyramid thumbnails map
  for (let i = 0; i < 9; i++) {
    content = content.replace(new RegExp(`thumbnails\\[${i}\\].img`, 'g'), `remainingItems[${i}].img`);
  }
  
  // Also add a back button to the left column
  if (!content.includes('Quay lại')) {
    content = content.replace(
      '{/* Left Column */}',
      `{/* Left Column */}\n          <button onClick={() => navigate('/')} className="absolute top-4 left-4 z-50 bg-[#F2C94C] text-[#791220] px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-[#e0b83e] transition-colors rounded shadow-lg">\n            Quay lại\n          </button>`
    );
  }

  fs.writeFileSync(filePath, content);
}

updateDetailSection('src/components/ThirdSection.tsx', 'tvcData', 'tvcData');
updateDetailSection('src/components/FifthSection.tsx', 'corpData', 'corpData');
updateDetailSection('src/components/SeventhSection.tsx', 'prodData', 'prodData');
