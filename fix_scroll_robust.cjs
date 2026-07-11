const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldScrollToTopRegex = /function ScrollToTop\(\) \{[\s\S]*?return null;\s*\}/;

const newScrollToTop = `function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    let timeoutId;
    let retries = 15;
    
    const tryScroll = () => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Force immediate scroll using native APIs first
          const y = element.getBoundingClientRect().top + window.scrollY - 50;
          window.scrollTo({ top: y, behavior: 'instant' });
          
          // Then tell lenis
          // @ts-ignore
          if (window.lenis) {
            // @ts-ignore
            window.lenis.scrollTo(y, { immediate: true });
          }
          
          // Retry a few times to ensure layout shifts don't ruin it
          if (retries > 0) {
            retries--;
            timeoutId = setTimeout(tryScroll, 100);
          }
        } else if (retries > 0) {
          retries--;
          timeoutId = setTimeout(tryScroll, 50);
        }
      } else {
        if (navType !== 'POP') {
          window.scrollTo({ top: 0, behavior: 'instant' });
          // @ts-ignore
          if (window.lenis) {
            // @ts-ignore
            window.lenis.scrollTo(0, { immediate: true });
          }
        }
      }
    };

    timeoutId = setTimeout(tryScroll, 10);

    return () => clearTimeout(timeoutId);
  }, [pathname, hash, navType]);

  return null;
}`;

content = content.replace(oldScrollToTopRegex, newScrollToTop);

fs.writeFileSync('src/App.tsx', content);
