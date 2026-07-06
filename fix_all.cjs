const fs = require('fs');

function applyTo(file, replacements) {
  let content = fs.readFileSync(file, 'utf8');
  replacements.forEach(([search, replace]) => {
    content = content.replace(search, replace);
  });
  fs.writeFileSync(file, content);
}

applyTo('src/components/EighthSection.tsx', [
  ['            WWW.MEDIA14CREW.COM\n          </div>\n        </div>\n      </div>\n    </section>', '            WWW.MEDIA14CREW.COM\n          </div>\n        </FadeIn>\n      </div>\n    </section>']
]);

applyTo('src/components/NinthSection.tsx', [
  ['              <span>CORPORATION</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>', '              <span>CORPORATION</span>\n            </div>\n          </div>\n        </FadeIn>\n      </div>\n    </section>']
]);
