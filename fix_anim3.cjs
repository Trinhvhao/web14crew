const fs = require('fs');
let content = fs.readFileSync('src/components/TenthSection.tsx', 'utf8');

content = content.replace(
  '{/* Top Left Title */}\n        <h1', 
  '{/* Top Left Title */}\n        <FadeIn direction="down" delay={0.2}>\n        <h1'
).replace(
  'SAY HELLO\n        </h1>',
  'SAY HELLO\n        </h1>\n        </FadeIn>'
).replace(
  '{/* Decorative Inputs */}\n        <div className="flex flex-col gap-12 w-full max-w-lg mt-12">',
  '{/* Decorative Inputs */}\n        <FadeIn direction="left" delay={0.4} className="flex flex-col gap-12 w-full max-w-lg mt-12">'
).replace(
  '</div>\n        </div>\n\n        {/* Bottom Section */}',
  '</div>\n        </FadeIn>\n\n        {/* Bottom Section */}'
).replace(
  '{/* Bottom Section */}\n        <div className="mt-auto flex justify-center items-end w-full pb-8">',
  '{/* Bottom Section */}\n        <FadeIn direction="up" delay={0.6} className="mt-auto flex justify-center items-end w-full pb-8">'
).replace(
  'WWW.MEDIA14CREW.COM\n          </div>\n        </div>\n      </div>',
  'WWW.MEDIA14CREW.COM\n          </div>\n        </FadeIn>\n      </div>'
);

fs.writeFileSync('src/components/TenthSection.tsx', content);
