import {mkdir,copyFile,cp,access} from 'node:fs/promises';
for(const file of ['worldcup.html','worldcup.js','styles/worldcup.css','api/players.js','lib/players.json'])await access(file);
await mkdir('public/styles',{recursive:true});
await copyFile('worldcup.html','public/index.html');
await copyFile('worldcup.html','public/worldcup.html');
await copyFile('worldcup.js','public/worldcup.js');
await copyFile('styles/worldcup.css','public/styles/worldcup.css');
await cp('images','public/images',{recursive:true});
console.log('Built original World Cup source files into public/.');
