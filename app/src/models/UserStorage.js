"use strict";

const fs = require("fs").promises;
const path = "./src/databases/users.json";

class UserStorage {

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);    // => [id, pasword, name]
        const userInfo = userKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});

        return userInfo;
    }

    static getUsers(isAll, ...fields) {
        return fs
        .readFile(path)
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        })
        .catch(console.error);

        
    }

    static getUserInfo(id) {
        return fs
            .readFile(path)
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }

    static async save(userInfo) {
        const users = await this.getUsers(true);
        // const users = await this.getUsers("id", "psword", "name");

        if (users.id.includes(userInfo.id)) {
            throw "Already exists ID";
        }

        // add data
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile(path, JSON.stringify(users));
        return { success: true};
    }

};

module.exports = UserStorage;