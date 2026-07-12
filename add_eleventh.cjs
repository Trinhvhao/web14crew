const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('import EleventhSection')) {
    content = content.replace(
        `import TenthSection from './components/TenthSection';`,
        `import TenthSection from './components/TenthSection';\nimport EleventhSection from './components/EleventhSection';`
    );
}

if (!content.includes('<EleventhSection />')) {
    content = content.replace(
        `<EighthSection />\n      <NinthSection />`,
        `<EighthSection />\n      <EleventhSection />\n      <NinthSection />`
    );
}

fs.writeFileSync(file, content);
