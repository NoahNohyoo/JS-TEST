"USE STRICT";

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
};

module.exports = UserStorage;