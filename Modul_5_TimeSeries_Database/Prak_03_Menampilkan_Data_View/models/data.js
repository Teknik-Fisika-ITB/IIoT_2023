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
}

module.exports = Data;