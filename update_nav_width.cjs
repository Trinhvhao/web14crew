const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const navStart = `<FadeIn delay={0.1} direction="down" className="fixed top-0 left-0 w-full z-[100] px-8 py-4 flex justify-between items-start bg-black/40 backdrop-blur-md border-b border-white/10 text-[#fef5e4]">`;

const newNav = `<FadeIn delay={0.1} direction="down" className="fixed top-0 left-0 w-full z-[100] bg-black/40 backdrop-blur-md border-b border-white/10 text-[#fef5e4]">
            <div className="max-w-[1440px] mx-auto px-8 py-4 flex justify-between items-start w-full">`;

content = content.replace(navStart, newNav);

// Now we need to add the closing </div> before the </FadeIn> for this block.
// Let's use regex to find the closing FadeIn of this block
// It ends with:
/*
                </a>
              </div>
              
            </div>
          </FadeIn>
*/
content = content.replace(
  /<\/a>\s*<\/div>\s*<\/div>\s*<\/FadeIn>/,
  `</a>
              </div>
            </div>
          </div>
          </FadeIn>`
);

fs.writeFileSync('src/App.tsx', content);
