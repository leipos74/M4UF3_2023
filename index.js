

const http = require("http");
const fs = require("fs");

http.createServer(function(request, response){
	
	fs.readFile("index.html", function(err, data){
		if (err){
			console.error(err);
			return;
		}


		response.writeHead(200, {"content-Type":"text/html"});
		response.write(data);

		response.end();
	});


}).listen(6969);
