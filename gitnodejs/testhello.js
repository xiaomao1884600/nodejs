var sys = require("sys");
http = require("http");
http.createServer(function(request, response){
	//response.sendHeader(200,{"Content-Type": "text/html"});
	response.writeHead(200,{"Content-Type": "text/html"})
	response.write("Hello World! My name is xiaomao");
	//response.close();
	response.end();
}).listen(8080);
sys.puts("Server running at http://localhost:8080/");