const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const navBlockRegex = /(<FadeIn delay=\{0\.1\} direction="down" className="fixed top-0 left-0 w-full z-\[100\] bg-black\/40 backdrop-blur-md border-b border-white\/10 text-\[#fef5e4\]">[\s\S]*?<\/FadeIn>)/;

const match = content.match(navBlockRegex);
if (match) {
  const navBlock = match[1];
  
  // Remove the navBlock from its current location
  content = content.replace(navBlock, '');
  
  // Insert the navBlock right after <section className="h-screen relative overflow-hidden flex flex-col z-10 shrink-0 ">
  // Wait, if we want it to be truly fixed for the entire Home, we can put it BEFORE <section>
  const insertTarget = '<section className="h-screen relative overflow-hidden flex flex-col z-10 shrink-0 ">';
  content = content.replace(insertTarget, navBlock + '\n      ' + insertTarget);
  
  fs.writeFileSync('src/App.tsx', content);
} else {
  console.log("Nav block not found");
}

