const fs = require('fs');

function applyTo(file, replacements) {
  let content = fs.readFileSync(file, 'utf8');
  replacements.forEach(([search, replace]) => {
    content = content.replace(search, replace);
  });
  fs.writeFileSync(file, content);
}

applyTo('src/components/TenthSection.tsx', [
  ['        </div>\n      </div>\n    </section>', '        </FadeIn>\n      </div>\n    </section>']
]);
applyTo('src/components/NinthSection.tsx', [
  ['        </div>\n      </div>\n    </section>', '        </FadeIn>\n      </div>\n    </section>']
]);
applyTo('src/components/EighthSection.tsx', [
  ['        </div>\n      </div>\n    </section>', '        </FadeIn>\n      </div>\n    </section>']
]);

