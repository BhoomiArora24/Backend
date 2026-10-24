const http = require('http');

const server = http.createServer(function(req, res){
    res.end("Hello World")
})

server.listen(3000);
//server created and its working 
//can check on http://localhost:3000/