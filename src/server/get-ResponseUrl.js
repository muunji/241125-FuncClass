
import fs from 'fs';
import path from 'path';

export default function getResponseUrl(url,response,dirName,filename){
  if(url === "/"){
      const pathUrl = path.join(dirName,`${filename}`);
      const responseData = fs.readFileSync(pathUrl,"utf-8",function(err,data){
        if(err){
          console.error(err)
        } else {
          return data;
        }
      });
      response.writeHead(200,{"Content-Type":"text/html; charset=utf-8;"})
      response.write(responseData);
      response.end();
  
    }
}
