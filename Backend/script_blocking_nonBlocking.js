// Synchronous or Blocking -> line by line excecution
// Asynchronous or non-blocking -> line by line excecution not guaranteed but callbacks wil fire

// Serving Html file    
const { readFileSync } = require('fs');
const http = require('http');

const fileContent = readFileSync('FrontEnd/index_animations.html')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/html'})
    res.end(fileContent)
});

server.listen(80, '127.0.0.1', () => {
    console.log("Listening on port 80")
});