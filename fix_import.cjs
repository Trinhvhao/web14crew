const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  "import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';",
  "import { BrowserRouter, Routes, Route, useLocation, Link, useNavigationType } from 'react-router-dom';"
);

fs.writeFileSync('src/App.tsx', content);
