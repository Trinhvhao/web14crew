const fs = require('fs');
let content = fs.readFileSync('src/components/ThirdSection.tsx', 'utf8');

if (!content.includes('import TextReveal')) {
  content = content.replace("import FadeIn from './FadeIn';", "import FadeIn from './FadeIn';\nimport TextReveal from './TextReveal';");
}

content = content.replace(
  /<h1 className="text-\[4rem\] font-display font-normal uppercase tracking-tighter leading-\[0\.8\] transform scale-y-\[1\.3\] scale-x-\[0\.95\] origin-left whitespace-nowrap mb-8 mt-2">[\s\S]*?OUR SERVICES[\s\S]*?<\/h1>/,
  `<TextReveal text="OUR SERVICES" className="text-[4rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left whitespace-nowrap mb-8 mt-2" delay={0.2} />`
);

content = content.replace(
  /<div key={idx} className="relative cursor-pointer group">/g,
  '<div key={idx} className="relative cursor-pointer group" data-cursor-text="VIEW">'
);

fs.writeFileSync('src/components/ThirdSection.tsx', content);
