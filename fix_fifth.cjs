const fs = require('fs');
let c = fs.readFileSync('src/components/FifthSection.tsx', 'utf8');
c = c.replace('        </div>\n        </div>\n      </div>\n    </section>', '        </div>\n      </div>\n    </section>');
fs.writeFileSync('src/components/FifthSection.tsx', c);
