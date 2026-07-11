const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const navStart = `<FadeIn delay={0.1} direction="down" className="fixed top-0 left-0 w-full z-[100] bg-black/40 backdrop-blur-md border-b border-white/10 text-[#fef5e4]">
            <div className="max-w-[1440px] mx-auto px-8 py-4 flex justify-between items-start w-full">`;

const newNavStart = `<header className="fixed top-0 left-0 w-full z-[100] bg-black/40 backdrop-blur-md border-b border-white/10 text-[#fef5e4]">
            <FadeIn delay={0.1} direction="down" className="max-w-[1440px] mx-auto px-8 py-4 flex justify-between items-start w-full">`;

content = content.replace(navStart, newNavStart);

// Now change the closing tags
content = content.replace(
  `</a>
              </div>
            </div>
          </div>
          </FadeIn>`,
  `</a>
              </div>
            </div>
          </FadeIn>
          </header>`
);

fs.writeFileSync('src/App.tsx', content);
