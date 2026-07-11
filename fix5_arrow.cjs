const fs = require('fs');
let content = fs.readFileSync('src/components/FifthSection.tsx', 'utf8');

// Insert the curved SVG arrow pointing to the video
content = content.replace(
  '<div className="w-full h-[2px] bg-[#f4efe6] relative">',
  '<div className="w-full h-[2px] bg-[#f4efe6] relative">\n                   {/* Curved arrow pointing to video */}\n                   <svg className="absolute left-[100%] top-0 w-[400px] h-[300px] pointer-events-none z-50 overflow-visible" style={{ transform: "translate(-10px, 0)" }}>\n                      <path d="M 0 0 C 150 0, 250 150, 380 200" fill="none" stroke="#f4efe6" strokeWidth="2" />\n                      <circle cx="380" cy="200" r="8" fill="#00bcd4" />\n                   </svg>'
);

fs.writeFileSync('src/components/FifthSection.tsx', content);
