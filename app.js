// Get the http module:
var http = require('http');
// Get the fs module (for reading and writing content for responses)
var fs = require('fs');
// Create a server using http module:
var server = http.createServer(function (request, response) {
  function readFile(htmlFile) {
    fs.readFile(htmlFile, 'utf8', function (errors, contents) {
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  if(request.url === '/') {
    readFile('index.html');
  }
  else if (request.url === "/ninjas") {
    readFile('ninjas.html');
  }
  else if (request.url === "/dojos/new") {
    readFile('dojos.html');
  }
  else {
    response.end('File not found!!!');
  }
});
server.listen(6789);
console.log("Running in localhost at port 6789");
