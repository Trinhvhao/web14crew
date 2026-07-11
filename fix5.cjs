const fs = require('fs');
let content = fs.readFileSync('src/components/FifthSection.tsx', 'utf8');

content = content.replace(
  '<FadeIn direction="right" delay={0.3}>\n            <h1 className="text-[3.5rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left mb-auto mt-2">\n              CORPORATION FILM...\n            </h1>\n          </FadeIn>',
  '<FadeIn direction="right" delay={0.3} className="mb-auto mt-2">\n            <h1 className="text-[3.5rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left">\n              CORPORATION FILM...\n            </h1>\n          </FadeIn>'
);

fs.writeFileSync('src/components/FifthSection.tsx', content);
