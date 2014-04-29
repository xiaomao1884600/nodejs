var http = require('http');
	sys = require('sys');
	test = require('test-wwj');
server = http.createServer(function(req, res){
	res.writeHeader(200, {"Content-Type":"text/html"});
	res.write("<b style='font-size:20px; color:red'>Hello World</b>\n");
	res.end();
});
server.listen(8080);
//console.log("http server start @8080");
sys.puts("Server running at http://localhost:8080/");
