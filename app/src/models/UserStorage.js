"use strict";

class UserStorage {
    static #users = {
        id: ["gaga", "nana", "dada"],
        psword: ["1234", "1234", "123456"],
        name: ["가가", "나나", "다다"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});
        return userInfo;
    }

};

module.exports = UserStorage;