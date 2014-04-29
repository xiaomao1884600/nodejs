// 简单的HTTP服务器
var http = require("http");
http.createServer(function(request,respond)
{
	console.log("request received");
	respond.writeHead(200,{"Content-Type":"text/plain"});
	respond.write("Hello World My name is xiaomao");
	respond.end();
}).listen(8888);

console.log("http server started");