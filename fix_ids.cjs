const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Change id="..." to data-id="..."
content = content.replace(/id="showreel"/g, 'data-scroll-id="showreel"');
content = content.replace(/id="corp"/g, 'data-scroll-id="corp"');
content = content.replace(/id="prod"/g, 'data-scroll-id="prod"');
content = content.replace(/id="contact"/g, 'data-scroll-id="contact"');

// Update ScrollToTop to use data-scroll-id
content = content.replace(/const element = document.querySelector\(hash\);/g, "const element = document.querySelector(`[data-scroll-id=\"${hash.slice(1)}\"]`);");
// Wait, Lenis can scrollTo an element.
// In ScrollToTop: window.lenis.scrollTo(hash, ...) -> window.lenis.scrollTo(element, ...)

content = content.replace(/window\.lenis\.scrollTo\(hash, \{ offset: 0, duration: 1\.2, force: true \}\);/g, "window.lenis.scrollTo(element, { offset: 0, duration: 1.2, force: true });");
content = content.replace(/window\.lenis\.scrollTo\(hash, \{ offset: 0, immediate: true, force: true \}\);/g, "window.lenis.scrollTo(element, { offset: 0, immediate: true, force: true });");

fs.writeFileSync('src/App.tsx', content);
