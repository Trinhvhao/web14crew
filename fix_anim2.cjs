const fs = require('fs');

function applyTo(file, replacements) {
  let content = fs.readFileSync(file, 'utf8');
  replacements.forEach(([search, replace]) => {
    content = content.replace(search, replace);
  });
  fs.writeFileSync(file, content);
}

// EighthSection
applyTo('src/components/EighthSection.tsx', [
  ['{/* Large Title */}\n        <h1', '{/* Large Title */}\n        <FadeIn direction="down" delay={0.2}>\n        <h1'],
  ['ALL-IN FOR PRODUCTION\n        </h1>', 'ALL-IN FOR PRODUCTION\n        </h1>\n        </FadeIn>'],
  ['{/* Services Grid */}\n        <div className="flex flex-col gap-3 mb-auto">', '{/* Services Grid */}\n        <FadeIn direction="left" delay={0.4} className="flex flex-col gap-3 mb-auto">'],
  ['</p>\n                )}\n              </div>\n            ))}\n          </div>\n        </div>\n\n        {/* Stats Section */}', '</p>\n                )}\n              </div>\n            ))}\n          </div>\n        </FadeIn>\n\n        {/* Stats Section */}'],
  ['{/* Stats Section */}\n        <div className="flex justify-between items-center px-12 mb-16 mt-8 w-full relative z-10">', '{/* Stats Section */}\n        <FadeIn direction="up" delay={0.6} className="flex justify-between items-center px-12 mb-16 mt-8 w-full relative z-10">'],
  ['{stat.label}\n              </span>\n            </div>\n          ))}\n        </div>\n\n        {/* Footer Info */}', '{stat.label}\n              </span>\n            </div>\n          ))}\n        </FadeIn>\n\n        {/* Footer Info */}'],
  ['{/* Footer Info */}\n        <div className="flex justify-between items-end pb-4 font-sans font-medium text-[1.1rem] tracking-wide text-[#f4efe6]">', '{/* Footer Info */}\n        <FadeIn direction="up" delay={0.8} className="flex justify-between items-end pb-4 font-sans font-medium text-[1.1rem] tracking-wide text-[#f4efe6]">'],
  ['WWW.MEDIA14CREW.COM\n          </div>\n        </div>\n      </div>', 'WWW.MEDIA14CREW.COM\n          </div>\n        </FadeIn>\n      </div>']
]);

// NinthSection
applyTo('src/components/NinthSection.tsx', [
  ['{/* Top Title */}\n        <h1', '{/* Top Title */}\n        <FadeIn direction="down" delay={0.2}>\n        <h1'],
  ['YOUR SUCCESSFUL - OUR REPUTATION\n        </h1>', 'YOUR SUCCESSFUL - OUR REPUTATION\n        </h1>\n        </FadeIn>'],
  ['{/* Logos Container */}\n        <div className="flex w-full mb-auto mt-2">', '{/* Logos Container */}\n        <FadeIn direction="left" delay={0.4} className="flex w-full mb-auto mt-2">'],
  ['<span>TÁC</span>\n          </div>\n        </div>\n\n        {/* Bottom Section */}', '<span>TÁC</span>\n          </div>\n        </FadeIn>\n\n        {/* Bottom Section */}'],
  ['{/* Bottom Section */}\n        <div className="flex flex-col mt-4 w-3/4">', '{/* Bottom Section */}\n        <FadeIn direction="up" delay={0.6} className="flex flex-col mt-4 w-3/4">'],
  ['<span>CORPORATION</span>\n            </div>\n          </div>\n        </div>\n      </div>', '<span>CORPORATION</span>\n            </div>\n          </div>\n        </FadeIn>\n      </div>']
]);

