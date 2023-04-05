const sqlite3 = require('sqlite3').verbose();
const DB_PATH = './database/data.db';

class Data {
    static getTemperature(callback){
        const db = new sqlite3.Database(DB_PATH);
        db.all('SELECT * FROM temperature',[], (err,rows)=>{
            callback(err,rows);
        });

        db.close();
    }

    static stream(callback){
        const db = new sqlite3.Database(DB_PATH);
        db.get('SELECT * FROM temperature ORDER BY timestamp DESC LIMIT 1', (err, row) => {
            callback(err,row);
        });    

        db.close();
    }
}

module.exports = Data;