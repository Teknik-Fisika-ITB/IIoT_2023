const http = require("http");
const host = 'localhost';
const port = 8000;

const users = require('./fixtures/users.json');
const emails = require('./fixtures/emails.json');

const requestListener = function(req,res){
	let route = req.method + ' ' + req.url;

	if (route === 'GET /users'){
		res.end(JSON.stringify(users));
	} else if (route === 'GET /emails'){
		res.end(JSON.stringify(emails));
	} else {
		res.end("You asked for " + route);
	}
}

let server = http.createServer(requestListener);

server.listen(port,host,() =>{
	console.log(`Server is running on http://${host}:${port}`);
});