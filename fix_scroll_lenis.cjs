const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace Layout to expose lenis
content = content.replace(
  'requestAnimationFrame(raf);',
  'requestAnimationFrame(raf);\n    // @ts-ignore\n    window.lenis = lenis;'
);

content = content.replace(
  'return () => lenis.destroy();',
  'return () => {\n      // @ts-ignore\n      window.lenis = undefined;\n      lenis.destroy();\n    };'
);

// Update ScrollToTop to use lenis and handle POP
const oldScrollToTopRegex = /function ScrollToTop\(\) \{[\s\S]*?return null;\s*\}/;

const newScrollToTop = `import { useNavigationType } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    let timeoutId;
    
    const tryScroll = (retries = 15) => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // @ts-ignore
          if (window.lenis) {
            // @ts-ignore
            window.lenis.scrollTo(element, { offset: -50, duration: 1.2 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else if (retries > 0) {
          timeoutId = setTimeout(() => tryScroll(retries - 1), 100);
        }
      } else {
        if (navType !== 'POP') {
          timeoutId = setTimeout(() => {
            // @ts-ignore
            if (window.lenis) {
              // @ts-ignore
              window.lenis.scrollTo(0, { immediate: true });
            } else {
              window.scrollTo(0, 0);
            }
          }, 850);
        }
      }
    };

    tryScroll();

    return () => clearTimeout(timeoutId);
  }, [pathname, hash, navType]);

  return null;
}`;

content = content.replace(oldScrollToTopRegex, newScrollToTop);

// Ensure useNavigationType is imported if not already
if (!content.includes('useNavigationType')) {
  content = content.replace(
    "import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';",
    "import { BrowserRouter, Routes, Route, useLocation, Link, useNavigationType } from 'react-router-dom';"
  );
}

fs.writeFileSync('src/App.tsx', content);
