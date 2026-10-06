import {build} from 'esbuild';
import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await build({entryPoints:['src/main.ts'],bundle:true,outfile:'dist/app.js',format:'esm',minify:true,tsconfigRaw:{compilerOptions:{experimentalDecorators:true,useDefineForClassFields:false}}});
for(const file of ['index.html','styles.css','favicon.svg','breakfast.jpg']) await copyFile('src/'+file,'dist/'+file);
