"use strict";


class userStorage{
    static #users = {
        id: ["4545","woorimIT", "나개발", "김팀장"],
        psword: ["4545","1234", "1234", "123456"],
        name: ['테스터','우리밋','나개발','김팀장'],
    };
     
    
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
         }, {});

            return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

}

module.exports = userStorage;