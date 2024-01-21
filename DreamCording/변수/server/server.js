const http = require("http");

http.createServer((req, res)=> {
    // res.writeHead(200, {"Content-Type": "text/html"}); //200: 상태코드 , {}: type
    // res.end("<p>Hello World~!!!</p>");
    if(req.url === "/"){
        res.writeHead(200);
        res.end("main url");
    } else if(req.url === "/upload"){
        res.writeHead(200);
        res.end("upload url");
    } else if(req.url === "/delete"){
        res.writeHead(200);
        res.end("delete url");
    } else{
        res.writeHead(404);
        res.end("Not found!!");
    }
}).listen(3000, ()=>{
    //서버가 완료 되었다
    console.log("3000 포트 서버 접속 완료~!!!");
});

//localhost => 현재 컴퓨터의 내부 주소 서버 개발할 때 테스트 용으로 많이 쓰입니다.

//localhost = 127.0.0.1 =>ip(internet peotocol)
//포트(port) = 서버내의 프로세스를 구분 서버에서는 다양한 일을 처리 


