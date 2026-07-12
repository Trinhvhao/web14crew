const fs = require('fs');
const file = 'src/components/EighthSection.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('import AnimatedCounter')) {
    content = content.replace(
        `import FadeIn from './FadeIn';`,
        `import FadeIn from './FadeIn';\nimport AnimatedCounter from './AnimatedCounter';`
    );
}

const targetArray = `  const stats = [
    { number: '10', label: 'SHOOTING YEAR' },
    { number: '200+', label: 'PROJECT SCROP' },
    { number: '100+', label: 'CLIENT BRAND' },
  ];`;

const replacementArray = `  const stats = [
    { value: 10, suffix: '', label: 'SHOOTING YEAR' },
    { value: 200, suffix: '+', label: 'PROJECT SCROP' },
    { value: 100, suffix: '+', label: 'CLIENT BRAND' },
  ];`;

content = content.replace(targetArray, replacementArray);

const targetRender = `{stat.number}`;
const replacementRender = `<AnimatedCounter value={stat.value} suffix={stat.suffix} />`;

content = content.replace(targetRender, replacementRender);

fs.writeFileSync(file, content);
