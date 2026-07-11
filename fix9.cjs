const fs = require('fs');
let content = fs.readFileSync('src/components/NinthSection.tsx', 'utf8');
content = content.replace(
  '<span>CORPORATION</span>\n            </div>\n          </div>\n        </div>\n      </div>',
  '<span>CORPORATION</span>\n            </div>\n          </div>\n        </FadeIn>\n      </div>'
);
fs.writeFileSync('src/components/NinthSection.tsx', content);
