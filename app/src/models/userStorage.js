"use strict";


class userStorage{
    static #users = {
        id: ["4545","woorimIT", "나개발", "김팀장"],
        passwd: ["4545","1234", "1234", "123456"],
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
}

module.exports = userStorage;