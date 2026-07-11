const fs = require('fs');

function addParallaxToSection(filePath, targetTitleStr, titleRegex, replaceWithFn) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('useScroll')) {
    content = content.replace(
      "import { ArrowDown } from 'lucide-react';",
      "import { ArrowDown } from 'lucide-react';\nimport { motion, useScroll, useTransform } from 'motion/react';\nimport { useRef } from 'react';"
    );
  }
  
  if (!content.includes('const { scrollYProgress }')) {
    content = content.replace(
      'export default function ' + filePath.split('/').pop().replace('.tsx', '') + '() {',
      `export default function ${filePath.split('/').pop().replace('.tsx', '')}() {\n  const ref = useRef(null);\n  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });\n  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);`
    );
  }
  
  if (!content.includes('ref={ref}')) {
    content = content.replace('<section className="relative', '<section ref={ref} className="relative');
  }

  content = content.replace(titleRegex, replaceWithFn);
  
  fs.writeFileSync(filePath, content);
}

// 5th Section
addParallaxToSection(
  'src/components/FifthSection.tsx',
  'CORPORATION FILM...',
  /<h1 className="text-\[3\.5rem\] font-display font-normal uppercase tracking-tighter leading-\[0\.8\] transform scale-y-\[1\.3\] scale-x-\[0\.95\] origin-left">[\s\S]*?CORPORATION FILM\.\.\.[\s\S]*?<\/h1>/,
  () => `<motion.h1 style={{ y }} className="text-[3.5rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left">
                CORPORATION FILM...
              </motion.h1>`
);

// 7th Section
addParallaxToSection(
  'src/components/SeventhSection.tsx',
  'PROJECT BRAND',
  /<h1 className="text-\[3\.5rem\] font-display font-normal uppercase tracking-tighter leading-\[0\.8\] transform scale-y-\[1\.3\] scale-x-\[0\.95\] origin-left mb-auto mt-2 whitespace-nowrap">[\s\S]*?PROJECT BRAND[\s\S]*?<\/h1>/,
  () => `<motion.h1 style={{ y }} className="text-[3.5rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left mb-auto mt-2 whitespace-nowrap">
            PROJECT BRAND
          </motion.h1>`
);

