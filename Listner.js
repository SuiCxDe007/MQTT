const http = require('http');
var mysql = require('mysql');
var fs = require('fs');

//read SQL Credentials

var dataconfig = fs.readFileSync('file/cred.json');

myfileobj = JSON.parse(dataconfig);
var con = mysql.createConnection(myfileobj);

con.connect(function(err) {

    let d = new Date();
    if (err) {
        console.log(err);
        return;
    }
    console.log("CONNECTION SUCCESS", d.toLocaleDateString());



});

const server = http.createServer((req, res) => {

    console.log(req.url + " death");


    let sql = `INSERT INTO employee(eid,ename,eage,eaddress,nic,did,sid)
    VALUES(1,'charith',23,'wadd',42,21,235)`;

    // execute the insert statment
    con.query(sql);

    con.end();
    res.end("Successfully Written");


});

server.listen(8080);

console.log('server running on port 8080');