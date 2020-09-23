var mysql = require('mysql');
var fs = require('fs');

//read SQL Credentials

var dataconfig = fs.readFileSync('file/cred.json');

myfileobj = JSON.parse(dataconfig);
//console.log(myfileobj);


// connection to mysql 

var con = mysql.createConnection(myfileobj);

con.connect(function(err) {

    let d = new Date();
    if (err) {
        console.log(err);
        return;
    }
    console.log("CONNECTION SUCCESS", d.toLocaleDateString());



});