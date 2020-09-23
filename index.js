var fs = require('fs');

var dataconfig = fs.readFileSync('file/employee.json');
console.log(dataconfig);
myfileobj = JSON.parse(dataconfig);




try {
    console.log(myfileobj);
} catch (err) {

    console.log("ERRRR");
    console.log(err);
}