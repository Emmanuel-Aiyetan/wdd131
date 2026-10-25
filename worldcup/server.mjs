import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import handler from './api/players.js';
try {process.loadEnvFile('.env.local');} catch {}
const root=path.resolve('public');
http.createServer(async(req,res)=>{
  const url=new URL(req.url,'http://localhost');
  if(url.pathname==='/api/players') {
    res.status=code=>{res.statusCode=code;return res;};res.json=data=>res.end(JSON.stringify(data));
    res.setHeader('Content-Type','application/json');return handler(req,res);
  }
  try {
    const file=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
    if(!file.startsWith(root+path.sep)) {res.writeHead(403);return res.end();}
    const content=await readFile(file);
    res.setHeader('Content-Type',({'.html':'text/html','.js':'text/javascript','.css':'text/css','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.ico':'image/x-icon'})[path.extname(file)]||'application/octet-stream');res.end(content);
  } catch {res.writeHead(404);res.end('Not found');}
}).listen(3000,'127.0.0.1',()=>console.log('World Cup Player Cards: http://localhost:3000'));
