const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Remove AnimatePresence and PageTransition
content = content.replace(/import \{ motion, AnimatePresence \} from 'motion\/react';/, "import { motion } from 'motion/react';");
content = content.replace(/import PageTransition from '\.\/components\/PageTransition';\n/, "");

const oldRoutesBlock = /function AnimatedRoutes\(\) \{[\s\S]*?export default function App\(\)/;

const newRoutesBlock = `export default function App()`;

content = content.replace(oldRoutesBlock, newRoutesBlock);

// Replace the Layout > AnimatedRoutes with Routes directly
const layoutBlockRegex = /<Layout>\s*<AnimatedRoutes \/>\s*<\/Layout>/;
const newLayoutBlock = `<Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvc/:id" element={<ThirdSection />} />
          <Route path="/corp/:id" element={<FifthSection />} />
          <Route path="/prod/:id" element={<SeventhSection />} />
        </Routes>
      </Layout>`;

content = content.replace(layoutBlockRegex, newLayoutBlock);

fs.writeFileSync('src/App.tsx', content);
