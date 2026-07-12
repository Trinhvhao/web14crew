const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('import LensTransition')) {
    content = content.replace(
        `import CustomCursor from './components/CustomCursor';`,
        `import CustomCursor from './components/CustomCursor';\nimport LensTransition from './components/LensTransition';`
    );
}

content = content.replace(
    /<Routes>/g,
    `<LensTransition>\n          <Routes>`
);

content = content.replace(
    /<\/Routes>/g,
    `</Routes>\n          </LensTransition>`
);

fs.writeFileSync(file, content);
