const http = require("http");
const mqtt = require('mqtt');
const fs = require("fs");
const host = 'localhost';
const port = 8000;

const broker_address = 'mqtt://localhost:1883'

const client = mqtt.connect(broker_address);

var i = 0;

client.on('connect',function(){
	console.log("Publishing to $s",broker_address);

	setInterval(function(){
		i++;
		let message = i.toString();
        client.publish('test', message);
    },100)
});



// const requestListener = function(req,res){
// 	fs.readFile('index.html',function(err,data){
// 		res.writeHead(200,{'Content-Type':'text/html'});
// 		res.write(data);
// 		return res.end();
// 	});
// }

// const server = http.createServer(requestListener);

// server.listen(port,host,() =>{
// 	console.log(`Server is running on http://${host}:${port}`);
// });