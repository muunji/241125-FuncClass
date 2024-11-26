import http from 'http';
import fs from 'fs';
//--------------------------path-------
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
// console.log(import.meta.url);
// console.log(__filename);

const __dirname = path.dirname(__filename);
// console.log(__dirname);

//-------------------------server-----
import getResponseUrl from './server/get-ResponseUrl.js';
import get_Response from './server/get-Response-Class.js';

const server = http.createServer(function(request,response){
  if(request.method === "GET") {
    // console.log(request.url);
    // getResponseUrl(request.url,response,__dirname,".././public/index.html");
    if(request.url === '/'){
      const getClass = new get_Response(request.url,response,__dirname,".././public/index.html","text/html");
    getClass.getResponse();
    }
    if(request.url ==='/style.css') {
      const getStyle = new get_Response(request.url,response,__dirname,"../public/style.css","text/css");
      getStyle.getResponse();
    }
    if(request.url === '/script.js') {
      const getJs = new get_Response(request.url,response,__dirname,"../public/script.js","application/javascript");
      getJs.getResponse();
    }
  }
});

server.listen(3030,function(){
  console.log("http://localhost:3030");
})