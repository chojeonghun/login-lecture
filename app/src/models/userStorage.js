"use strict";

const fs = require("fs").promises;

class userStorage{


    static #getUserInfo(id, data){
        const users = JSON.parse(data);
    
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
    
        return userInfo;
        } 

        static getUsers(...fields){
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
         }, {});

            return newUsers;
    }

    static getUserInfo(id){
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(id, data); 
        })
        .catch(console.err)

    }

    static save(userInfo){
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        users.name.push(userInfo.name);
        return {success: true};
    }

}

module.exports = userStorage;