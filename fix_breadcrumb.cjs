const fs = require('fs');

function updateBreadcrumb(filePath, categoryLink) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Add ArrowLeft import if missing
  if (!content.includes(' ArrowLeft')) {
    content = content.replace(
      "import { ArrowDown, X }",
      "import { ArrowDown, ArrowLeft, X }"
    );
    if (!content.includes(' ArrowLeft')) {
      content = content.replace(
        "import { ArrowDown }",
        "import { ArrowDown, ArrowLeft }"
      );
    }
  }

  const oldBtnRegex = /<button onClick=\{\(\) => navigate\('\/[^']*'\)\} className="absolute top-8 left-12 z-50 flex items-center justify-center w-12 h-12 bg-transparent text-\[#791220\] border-2 border-\[#791220\] rounded-full hover:bg-\[#791220\] hover:text-\[#f4efe6\] transition-all group">\s*<X size=\{24\} className="transition-transform group-hover:scale-110 group-hover:rotate-90" \/>\s*<\/button>/;

  const newNav = `<div className="absolute top-8 left-12 z-50 flex items-center gap-4">
            <button onClick={() => navigate('${categoryLink}')} className="flex items-center justify-center w-10 h-10 bg-transparent text-[#791220] border border-[#791220] rounded-full hover:bg-[#791220] hover:text-[#f4efe6] transition-all group shadow-sm hover:shadow-md">
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            </button>
            <div className="text-[#791220] font-sans font-bold text-[11px] uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity" onClick={() => navigate('/')}>HOME</span>
              <span className="opacity-50">/</span>
              <span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity" onClick={() => navigate('${categoryLink}')}>SHOWREEL</span>
              <span className="opacity-50">/</span>
              <span className="opacity-100">{mainItem.name}</span>
            </div>
          </div>`;

  content = content.replace(oldBtnRegex, newNav);
  fs.writeFileSync(filePath, content);
}

// Ensure IDs exist for the links
let appContent = fs.readFileSync('src/App.tsx', 'utf8');
if (!appContent.includes('id="corp"')) {
  appContent = appContent.replace(
    '<FourthSection />',
    '<div id="corp"><FourthSection /></div>'
  );
}
if (!appContent.includes('id="prod"')) {
  appContent = appContent.replace(
    '<SixthSection />',
    '<div id="prod"><SixthSection /></div>'
  );
}
fs.writeFileSync('src/App.tsx', appContent);

updateBreadcrumb('src/components/ThirdSection.tsx', '/#showreel');
updateBreadcrumb('src/components/FifthSection.tsx', '/#corp');
updateBreadcrumb('src/components/SeventhSection.tsx', '/#prod');

