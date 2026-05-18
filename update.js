const fs = require('fs');
let content = fs.readFileSync('src/app/DiversionAudio.tsx', 'utf8');

const regex = /\{\/\* Research \/ Inspiration Grid \*\/\}[\s\S]*?\{\/\* Breakdown Section \*\/\}/g;
content = content.replace(regex, '{/* Breakdown Section */}');

const importsToRemove = [
  'imgRectangle27', 'imgRectangle57', 'imgRectangle28', 'imgRectangle58', 'imgRectangle29', 'imgRectangle59', 'imgRectangle93', 'imgRectangle76', 'imgRectangle77', 'imgRectangle78', 'imgRectangle80'
];

for (const imp of importsToRemove) {
  const impRegex = new RegExp(`import ${imp} from ".*";\\n?`, 'g');
  content = content.replace(impRegex, '');
}

fs.writeFileSync('src/app/DiversionAudio.tsx', content);
console.log('Update complete');
