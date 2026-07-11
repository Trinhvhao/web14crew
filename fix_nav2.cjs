const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Ensure Link is imported
if (!content.includes('import { BrowserRouter, Routes, Route, useLocation, Link }')) {
  content = content.replace(
    "import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';",
    "import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';"
  );
}

// Replace <a> with <Link> for nav
content = content.replace(
  /<a href="\/#" className="font-bold text-sm uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Home<\/a>/g,
  '<Link to="/#" className="font-bold text-sm uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Home</Link>'
);
content = content.replace(
  /<a href="\/#showreel" className="font-bold text-sm uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Showreel<\/a>/g,
  '<Link to="/#showreel" className="font-bold text-sm uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Showreel</Link>'
);
content = content.replace(
  /<a href="\/#contact" className="font-bold text-sm uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Contact<\/a>/g,
  '<Link to="/#contact" className="font-bold text-sm uppercase tracking-wider hover:text-brand-yellow transition-colors relative z-10">Contact</Link>'
);

// Also fix the logo link
content = content.replace(
  /<a href="#social" className="inline-block hover:text-brand-yellow transition-colors">/g,
  '<Link to="/" className="inline-block hover:text-brand-yellow transition-colors">'
);
content = content.replace(
  /Logo<br \/>\s*<\/h1>\s*<\/a>/g,
  'Logo<br />\n                </h1>\n              </Link>'
);

// Watch showreel button
content = content.replace(
  /<button className="flex items-center gap-3 group mt-5 ml-12 border border-black\/30 rounded-md p-1 pr-6 hover:bg-black\/10 transition-colors">/g,
  '<Link to="/#showreel" className="flex w-fit items-center gap-3 group mt-5 ml-12 border border-black/30 rounded-md p-1 pr-6 hover:bg-black/10 transition-colors">'
);
content = content.replace(
  /WATCH OUTR SHOWREEL\s*<\/span>\s*<\/button>/g,
  'WATCH OUR SHOWREEL\n                    </span>\n                  </Link>'
);

fs.writeFileSync('src/App.tsx', content);
