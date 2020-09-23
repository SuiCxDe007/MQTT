const http = require('http');



const server = http.createServer((req, res) => {

    console.log(req.url + " death");
    console.log(res);
    res.end;




});

server.listen(8080);

console.log('server running on port 8080');