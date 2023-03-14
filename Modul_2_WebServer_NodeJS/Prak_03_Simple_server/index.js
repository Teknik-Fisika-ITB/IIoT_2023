const http = require("http");
const host = "localhost";
const port = 3000;


let requestListener = function(req,res){
	res.writeHead(200);
	res.end("Server live!");
}

let server = http.createServer(requestListener);

server.listen(port,host,()=>{
	console.log(`listening request on ${host}:${port}`)
});