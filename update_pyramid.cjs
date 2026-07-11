const fs = require('fs');

function updatePyramid(filePath, pathPrefix) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace each remaining item div to add onClick and hover styles
  for (let i = 0; i < 9; i++) {
    content = content.replace(
      new RegExp(`<div className="w-\\[120px\\] h-\\[65px\\] bg-\\[#9ccc65\\] relative overflow-hidden">\\s*<img src={remainingItems\\[${i}\\].img} className="w-full h-full object-cover opacity-80" alt="" \\/>\\s*<\\/div>`, 'g'),
      `<div onClick={() => navigate(\`${pathPrefix}/\${remainingItems[${i}].id}\`)} className="cursor-pointer hover:scale-105 transition-all w-[120px] h-[65px] bg-[#9ccc65] relative overflow-hidden group shadow-sm hover:shadow-md hover:z-10 z-0">
                   <img src={remainingItems[${i}].img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="" />
                </div>`
    );
  }

  fs.writeFileSync(filePath, content);
}

updatePyramid('src/components/ThirdSection.tsx', '/tvc');
updatePyramid('src/components/FifthSection.tsx', '/corp');
updatePyramid('src/components/SeventhSection.tsx', '/prod');
