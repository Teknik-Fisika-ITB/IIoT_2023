const mqtt = require('mqtt');
const port = 8000;

const broker_address = 'mqtt://10.6.100.38:1883'

const client = mqtt.connect(broker_address);

var i = 0;

client.on('connect',function(){
	console.log("Publishing to $s",broker_address);

	setInterval(function(){
		i++;
		let message = `hello-hello ${i}`;
        client.publish('faqihza', message);
    },100)
});