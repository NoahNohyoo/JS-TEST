"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const { id, psword} = await UserStorage.getUserInfo(client.id);

        if (id) {
            if (id === client.id && psword === client.psword) {
                return { success: true};
            }
            return { success: false, msg: "Wrong password"};
        }
        return { success: false, msg: "No exist"};
    }

    register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
};

module.exports = User;