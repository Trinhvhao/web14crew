const fs = require('fs');

const files = [
  'src/components/SecondSection.tsx',
  'src/components/FourthSection.tsx',
  'src/components/SixthSection.tsx',
  'src/components/FifthSection.tsx',
  'src/components/SeventhSection.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // Remove Number Overlay on thumbnails
    content = content.replace(/\{\/\*\s*Number Overlay\s*\*\/\}\s*<div className="absolute inset-0 flex items-center justify-center(?: pointer-events-none)?">\s*<span className="text-\[\d+rem\][^>]+>\s*\{?[^<]+\}?\s*<\/span>\s*<\/div>/g, '');

    // Remove absolute number on main image in Second, Fourth, Sixth
    content = content.replace(/<div className="absolute top-12 left-1\/4 pointer-events-none">\s*<span className="text-\[8rem\][^>]+>\s*\d+\s*<\/span>\s*<\/div>/g, '');

    // Remove absolute number on main image in Fifth, Seventh
    content = content.replace(/<div className="absolute inset-0 flex items-center justify-center pointer-events-none">\s*<span className="text-\[6rem\][^>]+>\s*\d+\s*<\/span>\s*<\/div>/g, '');

    fs.writeFileSync(file, content);
  }
});
