const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Update ScrollToTop
content = content.replace(
  `function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}`,
  `function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}`
);

// Update nav links
content = content.replace(
  /<a href="#social" className="font-bold text-sm uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Home<\/a>/g,
  '<a href="/#" className="font-bold text-sm uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Home</a>'
);
content = content.replace(
  /<a href="#social" className="font-bold text-sm uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Showreel<\/a>/g,
  '<a href="/#showreel" className="font-bold text-sm uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Showreel</a>'
);
content = content.replace(
  /<a href="#social" className="font-bold text-sm uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Contact<\/a>/g,
  '<a href="/#contact" className="font-bold text-sm uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Contact</a>'
);

// Add IDs to Home sections
content = content.replace(
  '<SecondSection />',
  '<div id="showreel"><SecondSection /></div>'
);

content = content.replace(
  '<TenthSection />',
  '<div id="contact"><TenthSection /></div>'
);

fs.writeFileSync('src/App.tsx', content);
