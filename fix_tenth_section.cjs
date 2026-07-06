const fs = require('fs');
let content = fs.readFileSync('src/components/TenthSection.tsx', 'utf8');

if (!content.includes('import TextReveal')) {
  content = content.replace("import FadeIn from './FadeIn';", "import FadeIn from './FadeIn';\nimport TextReveal from './TextReveal';\nimport MagneticButton from './MagneticButton';");
}

// Replace SAY HELLO with TextReveal
content = content.replace(
  /<h1 className="text-\[8rem\] font-display font-normal uppercase tracking-tighter leading-\[0\.8\] transform scale-y-\[1\.3\] scale-x-\[0\.95\] origin-left mb-6 mt-8">[\s\S]*?SAY HELLO[\s\S]*?<\/h1>/,
  `<TextReveal text="SAY HELLO" className="text-[8rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left mb-6 mt-8 text-[#f4efe6]" delay={0.3} />`
);

// Apply MagneticButton to logo and socials
content = content.replace(
  /<img src="https:\/\/files\.oaiusercontent\.com\/file-R2gVfU5YkF1Vv8aM1eN1Q9\?[\s\S]*?alt="Viewfinder Logo" className="h-6 object-contain" \/>/,
  `<MagneticButton><img src="https://files.oaiusercontent.com/file-R2gVfU5YkF1Vv8aM1eN1Q9?se=2024-11-23T05%3A22%3A18Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D492b4515-515a-4fc8-a28a-72efb459bb6e.webp&sig=qE4aJ8w1k1P29u7Zl4X9E21975n%2BWvXlP423mU5GZ0M%3D" alt="Viewfinder Logo" className="h-6 object-contain cursor-pointer" /></MagneticButton>`
);

content = content.replace(
  /<a href="#" className="hover:text-\[#F2C94C\] transition-colors">FB<\/a>/,
  `<MagneticButton><a href="#" className="hover:text-[#F2C94C] transition-colors cursor-pointer" data-cursor-text="LINK">FB</a></MagneticButton>`
);
content = content.replace(
  /<a href="#" className="hover:text-\[#F2C94C\] transition-colors">IN<\/a>/,
  `<MagneticButton><a href="#" className="hover:text-[#F2C94C] transition-colors cursor-pointer" data-cursor-text="LINK">IN</a></MagneticButton>`
);
content = content.replace(
  /<a href="#" className="hover:text-\[#F2C94C\] transition-colors">BE<\/a>/,
  `<MagneticButton><a href="#" className="hover:text-[#F2C94C] transition-colors cursor-pointer" data-cursor-text="LINK">BE</a></MagneticButton>`
);
content = content.replace(
  /<a href="#" className="hover:text-\[#F2C94C\] transition-colors">VI<\/a>/,
  `<MagneticButton><a href="#" className="hover:text-[#F2C94C] transition-colors cursor-pointer" data-cursor-text="LINK">VI</a></MagneticButton>`
);

fs.writeFileSync('src/components/TenthSection.tsx', content);
