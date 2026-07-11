const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldScrollToTopRegex = /function ScrollToTop\(\) \{[\s\S]*?return null;\s*\}/;

const newScrollToTop = `function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();
  const prevPathname = React.useRef(pathname);
  const prevHash = React.useRef(hash);

  React.useEffect(() => {
    const isSamePage = prevPathname.current === pathname;
    
    if (isSamePage && prevHash.current !== hash) {
      if (hash && hash !== '#') {
        // @ts-ignore
        if (window.lenis) {
          // @ts-ignore
          window.lenis.scrollTo(hash, { offset: 0, duration: 1.2, force: true });
        } else {
          const element = document.querySelector(hash);
          if (element) {
             const y = element.getBoundingClientRect().top + window.scrollY;
             window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      } else {
         // @ts-ignore
         if (window.lenis) {
           // @ts-ignore
           window.lenis.scrollTo(0, { duration: 1.2, force: true });
         } else {
           window.scrollTo({ top: 0, behavior: 'smooth' });
         }
      }
      prevHash.current = hash;
      return;
    }

    prevPathname.current = pathname;
    prevHash.current = hash;

    let timeoutId;
    let attempts = 0;
    
    const performScroll = () => {
      if (hash && hash !== '#') {
        const element = document.querySelector(hash);
        if (element) {
          // @ts-ignore
          if (window.lenis) {
            // @ts-ignore
            window.lenis.scrollTo(hash, { offset: 0, immediate: true, force: true });
          } else {
            const y = element.getBoundingClientRect().top + window.scrollY;
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
          window.lenis.scrollTo(0, { immediate: true, force: true });
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }
    };

    timeoutId = setTimeout(performScroll, 30);

    return () => clearTimeout(timeoutId);
  }, [pathname, hash, navType]);

  return null;
}`;

content = content.replace(oldScrollToTopRegex, newScrollToTop);

fs.writeFileSync('src/App.tsx', content);
