const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldScrollToTopRegex = /function ScrollToTop\(\) \{[\s\S]*?return null;\s*\}/;

const newScrollToTop = `function ScrollToTop() {
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
          timeoutId = setTimeout(() => tryScroll(retries - 1), 50);
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
          }, 50);
        }
      }
    };

    // delay slightly to let DOM paint
    timeoutId = setTimeout(() => tryScroll(), 50);

    return () => clearTimeout(timeoutId);
  }, [pathname, hash, navType]);

  return null;
}`;

content = content.replace(oldScrollToTopRegex, newScrollToTop);

fs.writeFileSync('src/App.tsx', content);
