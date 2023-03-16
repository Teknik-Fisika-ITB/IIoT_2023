const sqlite3 = require('sqlite3').verbose();
const mqtt = require('mqtt');
const db = new sqlite3.Database('./database/data.db');

const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect',function(){
    client.subscribe('temperature');
});

client.on('message',function(topic,message){
    const data = JSON.parse(message.toString());

    if(topic==='temperature'){
        const query = `
            INSERT INTO temperature(timestamp,value)
            VALUES(?,?)
        `;
        
        const values = [data.timestamp,data.value];

        db.run(query,values,function(err){
            if(err){
                console.error(err.message);
            } else {
                console.log(`inserted time series data:${data.timestamp} ${data.value}`);
            }
        });
    } 
});