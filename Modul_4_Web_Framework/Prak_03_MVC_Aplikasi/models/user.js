const sqlite3 = require('sqlite3').verbose()
const DB_PATH = './db/db.sqlite';

class User {
    static all(callback){
        const db = new sqlite3.Database(DB_PATH);
        db.all('SELECT * FROM users',[], (err,rows)=>{
            callback(err,rows);
        });

        db.close();
    }

    static create(params, callback){
        const db = new sqlite3.Database(DB_PATH);
        db.run('INSERT INTO users (name,email) VALUES (?,?)',
                [params.name, params.email],
                (err)=>{
            callback(err);
        });

        db.close();
    }
}

module.exports = User;