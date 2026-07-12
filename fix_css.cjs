const fs = require('fs');
const file = 'src/index.css';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('film-scroll')) {
    content += `
@keyframes film-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50% - 8px)); }
}

.animate-film-scroll {
  animation: film-scroll 40s linear infinite;
}
`;
    fs.writeFileSync(file, content);
}
