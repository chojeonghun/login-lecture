"use strict";

const db = require("../config/db");

class userStorage{

    static getUserInfo(id){
        return new Promise((resolve, reject) =>{
            const query = "select * from users where id = ?;";
            db.query(query, [id], (err, data) => {
                if(err) reject(`${err}`);
                resolve(data[0]);
            });
        })
    }

    static async save(userInfo){
        return  await new  Promise((resolve, reject) =>{
            const query = "insertd into users(id,name,psword) values(?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
                if(err) reject(`${err}`);
                resolve({ success: true });
            });
        })
    }

}

module.exports = userStorage;