//problem: need a simple way to look at a users badge count and javascript point from a web browser
//solution: use node js to perform the profile lookups and serve out template via http
var router = require("./router.js");
//1.create a web server
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((request, response) => {
  router.home(request,response);
  router.user(request,response);

}).listen(3000);

  console.log(`Server running at http://${hostname}:${port}/`);






//4. Function that handles the reading of files and merge in value

  //read from file and get a string
    //merge values in to string
