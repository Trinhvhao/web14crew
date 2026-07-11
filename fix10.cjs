const fs = require('fs');
let content = fs.readFileSync('src/components/TenthSection.tsx', 'utf8');
content = content.replace(
  '            WWW.MEDIA14CREW.COM\n          </div>\n        </div>\n      </div>',
  '            WWW.MEDIA14CREW.COM\n          </div>\n        </FadeIn>\n      </div>'
);
fs.writeFileSync('src/components/TenthSection.tsx', content);
