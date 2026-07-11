const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('import CustomCursor')) {
    content = content.replace(
        `import PageTransition from './components/PageTransition';`,
        `import PageTransition from './components/PageTransition';\nimport CustomCursor from './components/CustomCursor';`
    );
}

const targetLayout = /function Layout\(\{ children \}: \{ children: React\.ReactNode \}\) \{/g;
if (content.includes('CustomCursor />')) {
  // do nothing
} else {
  content = content.replace(
      `function Layout({ children }: { children: React.ReactNode }) {`,
      `function Layout({ children }: { children: React.ReactNode }) {\n  return <>\n    <CustomCursor />\n    <InnerLayout>{children}</InnerLayout>\n  </>\n}\n\nfunction InnerLayout({ children }: { children: React.ReactNode }) {`
  );
}

fs.writeFileSync(file, content);
