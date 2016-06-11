//Lets require/import the HTTP module
var http = require('http');
var dispatcher = require('httpdispatcher');
var fs = require('fs');
var index = fs.readFileSync('html/index.html');
//Lets define a port we want to listen to
const PORT=8080;

//Lets use our dispatcher
function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

//A sample GET request
dispatcher.onGet("/home", function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, '192.168.0.114');
