const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

if (!content.includes('import Lenis')) {
  content = content.replace("import React from 'react';", "import React, { useEffect } from 'react';\nimport Lenis from 'lenis';");
}

const lenisEffect = `
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
`;

if (!content.includes('new Lenis')) {
  content = content.replace(
    'export default function App() {',
    `export default function App() {\n${lenisEffect}`
  );
}

fs.writeFileSync('src/App.tsx', content);
