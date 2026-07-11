const fs = require('fs');

const files = [
  'src/components/SecondSection.tsx',
  'src/components/FourthSection.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace old Right Title block with new one
  const oldTitleRegex = /<div className="flex flex-col text-\[#791220\] font-display text-\[1\.5rem\] leading-\[1\.1\] tracking-tight pb-3">[\s\S]*?<\/div>/;
  
  const newTitleBlock = `<div className="flex flex-col text-[#791220] font-display leading-[1] tracking-tight pb-3 uppercase text-right justify-end">
            <span className="font-normal text-[1.8rem] opacity-90">${file.includes('FourthSection') ? 'CORPORATION FILM' : 'TÊN DỰ ÁN'}</span>
            <span className="font-bold text-[2.2rem]">${file.includes('FourthSection') ? 'SETIABECAMEX' : 'THÔNG ĐIỆP BRAND'}</span>
          </div>`;

  content = content.replace(oldTitleRegex, newTitleBlock);

  fs.writeFileSync(file, content);
});
