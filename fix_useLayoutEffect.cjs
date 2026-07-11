const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// replace useEffect with useLayoutEffect in ScrollToTop
content = content.replace(
  /function ScrollToTop\(\) \{[\s\S]*?useEffect\(\(\) => \{/,
  `function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  React.useLayoutEffect(() => {`
);

// Ensure React is available if not imported
if (!content.includes("import React, { useEffect } from 'react';")) {
  // It's probably `import React, { useEffect } from 'react';`
}

fs.writeFileSync('src/App.tsx', content);
