const fs = require('fs');

const files = [
  'src/components/FifthSection.tsx',
  'src/components/SeventhSection.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(
    /className="flex items-center justify-center w-10 h-10 bg-transparent text-\[#791220\] border border-\[#791220\] rounded-full hover:bg-\[#791220\] hover:text-\[#f4efe6\] transition-all group shadow-sm hover:shadow-md"/g,
    'className="flex items-center justify-center w-10 h-10 bg-transparent text-[#f4efe6] border border-[#f4efe6] rounded-full hover:bg-[#f4efe6] hover:text-[#791220] transition-all group shadow-sm hover:shadow-md"'
  );
  
  content = content.replace(
    /<div className="text-\[#791220\] font-sans font-bold text-\[11px\] uppercase tracking-\[0\.2em\] flex items-center gap-2">/g,
    '<div className="text-[#f4efe6] font-sans font-bold text-[11px] uppercase tracking-[0.2em] flex items-center gap-2">'
  );
  
  fs.writeFileSync(file, content);
});
