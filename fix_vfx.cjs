const fs = require('fs');

function updateVfxImages(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace left VFX image
  content = content.replace(
    /<img src="https:\/\/images\.unsplash\.com\/photo-[A-Za-z0-9\-]+\?[\s\S]*?" className="w-\[120%\] max-w-none h-auto object-cover rounded shadow-xl" alt="T-shirt" \/>/,
    '<img src={mainItem.img} className="w-[120%] max-w-none h-[120%] object-cover rounded shadow-xl opacity-90" alt={mainItem.name} />'
  );

  // Replace right VFX image
  content = content.replace(
    /<img src="https:\/\/images\.unsplash\.com\/photo-[A-Za-z0-9\-]+\?[\s\S]*?" className="w-\[130%\] max-w-none h-auto object-cover shadow-2xl drop-shadow-2xl" alt="Laptop" \/>/,
    '<img src={mainItem.img} className="w-[130%] max-w-none h-[130%] object-cover shadow-2xl drop-shadow-2xl opacity-90" alt={mainItem.name} />'
  );

  fs.writeFileSync(filePath, content);
}

updateVfxImages('src/components/ThirdSection.tsx');
updateVfxImages('src/components/FifthSection.tsx');
updateVfxImages('src/components/SeventhSection.tsx');
