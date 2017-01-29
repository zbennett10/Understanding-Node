var http = require('http'); //get http module from node core

//createServer takes an event listener
http.createServer(function(req, res) {  //create server - this function takes an event listening callback that takes two parameters (request, response)
    //write response header
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world\n'); //send response


}).listen(1337, '127.0.0.1'); //listen on this socket address (port and ip)

