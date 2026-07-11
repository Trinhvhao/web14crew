const fs = require('fs');

function addParallaxToSection(filePath, targetRegex, replaceWithFn) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('useScroll')) {
    content = content.replace(
      "import { ArrowDown",
      "import { motion, useScroll, useTransform } from 'motion/react';\nimport { useRef } from 'react';\nimport { ArrowDown"
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

  content = content.replace(targetRegex, replaceWithFn);
  
  fs.writeFileSync(filePath, content);
}

// 8th Section
addParallaxToSection(
  'src/components/EighthSection.tsx',
  /<h1 className="text-\[6rem\] font-display font-normal uppercase tracking-tighter leading-\[0\.8\] transform scale-y-\[1\.3\] scale-x-\[0\.95\] origin-left mb-12 text-\[#f4efe6\]">[\s\S]*?ALL-IN FOR PRODUCTION[\s\S]*?<\/h1>/,
  () => `<motion.h1 style={{ y }} className="text-[6rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left mb-12 text-[#f4efe6]">
          ALL-IN FOR PRODUCTION
        </motion.h1>`
);

// 9th Section
addParallaxToSection(
  'src/components/NinthSection.tsx',
  /<h1 className="text-\[5rem\] font-display font-normal uppercase tracking-tighter leading-\[0\.8\] transform scale-y-\[1\.3\] scale-x-\[0\.95\] origin-left mb-6 text-\[#f4efe6\] mt-4">[\s\S]*?WE WORK FOR BRANDS[\s\S]*?<\/h1>/,
  () => `<motion.h1 style={{ y }} className="text-[5rem] font-display font-normal uppercase tracking-tighter leading-[0.8] transform scale-y-[1.3] scale-x-[0.95] origin-left mb-6 text-[#f4efe6] mt-4">
          WE WORK FOR BRANDS
        </motion.h1>`
);

