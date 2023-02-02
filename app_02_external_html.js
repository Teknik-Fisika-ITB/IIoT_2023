const http = require("http");
const fs = require("fs");
const host = 'localhost';
const port = 8000;

const requestListener = function(req,res){
	fs.readFile('index.html',function(err,data){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(data);
		return res.end();
	});
}

const server = http.createServer(requestListener);

server.listen(port,host,() =>{
	console.log(`Server is running on http://${host}:${port}`);
});