const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldScrollToTopRegex = /function ScrollToTop\(\) \{[\s\S]*?return null;\s*\}/;

const newScrollToTop = `function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  React.useEffect(() => {
    let timeoutId;
    let attempts = 0;
    
    const performScroll = () => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 50;
          // @ts-ignore
          if (window.lenis) {
            // @ts-ignore
            window.lenis.scrollTo(y, { immediate: true });
          } else {
            window.scrollTo({ top: y, behavior: 'instant' });
          }
        } else if (attempts < 20) {
          attempts++;
          timeoutId = setTimeout(performScroll, 50);
        }
      } else if (navType !== 'POP') {
        // @ts-ignore
        if (window.lenis) {
          // @ts-ignore
          window.lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }
    };

    // Important: Wait for React to render the new route
    timeoutId = setTimeout(performScroll, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname, hash, navType]);

  return null;
}`;

content = content.replace(oldScrollToTopRegex, newScrollToTop);
fs.writeFileSync('src/App.tsx', content);
