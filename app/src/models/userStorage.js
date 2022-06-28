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

        static #getUsers(data, isAll, fields){
            const users = JSON.parse(data); 
            if(isAll) return users;     
            const newUsers = fields.reduce((newUsers, field) => {
                if (users.hasOwnProperty(field)){
                    newUsers[field] = users[field];
                }
                return newUsers;
            }, {});

            return newUsers;
        }

        static getUsers(isAll, ...fields){
            return fs.readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUsers(data, isAll, fields); 
            })
            .catch(console.err)


    }

    static getUserInfo(id){
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(id, data); 
        })
        .catch(console.err)

    }

    static async save(userInfo){
        const users = await this.getUsers(true);
        console.log(users);
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        users.name.push(userInfo.name);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return {success: true};
    }

}

module.exports = userStorage;