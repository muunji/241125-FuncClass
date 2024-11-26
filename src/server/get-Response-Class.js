import path from 'path';
import fs from 'fs';

export default class get_Response {
  constructor(url, response, dirName, filename,contentType) {
    this.url = url;
    this.response = response;
    this.dirName = dirName;
    this.filename = filename;
    this.contype = contentType; 
  }

  set setUrl(value) {
    if(typeof(value)==="string") {
      return this.url = url;
    } else {
      console.error("'/'가 포함된 주소를 입력해주세요");
    }
  }

  set setResponse(value) {
    if(typeof(value)==="object"){
      return this.response = value;
    }
  }

  set setFilename(value) {
    if(typeof(value)==="string") {
      if(value.includes("/publilc")) {
        return this.filename = value;
      } else {
        console.error(".(dot)이 포함되어있지 않습니다.")
      }
    }
  }

  set setConType(value) {
    if(typeof(value)==="string") {
      if(value.includes("/")){
        return this.contype = value;
      }else {
        console.error("파일 형식을 입력해주세요");
      }
    }
  }

  getResponse() {
    // if (this.url === '/') {
      const pathUrl = path.join(this.dirName,`${this.filename}`);
      const responseData = fs.readFileSync(pathUrl,"utf-8",function(err,data){
        if(err){
          console.error(err);
        }else {
          return data;
        }
      });
      this.response.writeHead(200,{"Content-Type":`${this.contype};charset=utf-8;"`});
      this.response.write(responseData);
      this.response.end();
    // }
  }
}