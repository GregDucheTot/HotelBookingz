const Adapter = require("../Database/Adapter");
const md5 = require('md5');

module.exports = class Auth {
    adapter;
    collection = 'users';
    token_collection = 'users_token';

    constructor() {
        this.adapter = new Adapter();
    }

    async login(username, password) {
        return await this.adapter.findOne(this.collection, {
            user: username,
            password: password
        });
    }

    async getToken(userId) {
        let tokenStr = '';
        const date = (new Date()).getTime()/1000;
        const dbToken  = await this.adapter.findOne(this.token_collection, {
            uid: userId
        }, {
            updatedAt: { $gte: date - 30} // token valid only for 30s
        });

        if (dbToken) {
            // update the updateAt
            tokenStr = dbToken.token;
            this.adapter.updateOne(this.token_collection, {
                token: tokenStr,
                uid: userId
            },  {
                $set: { updatedAt: date }
            });
        } else {
            tokenStr = md5(`${userId}-${date}`);
            // generate new token

            const token = {
                token: tokenStr,
                uid: userId,
                updatedAt: date
            }

            this.adapter.insert(this.token_collection, token);
        }

        return tokenStr;
    }

    async checkToken(token) {
        const date = (new Date()).getTime()/1000;
        const dbToken  = await this.adapter.findOne(this.token_collection, {
            token: token
        }, {
            updatedAt: { $gte: date - 30} // token valid only for 30s
        });

        if (dbToken) {
            this.adapter.updateOne(this.token_collection, {
                token: token
            }, {
                $set: {
                    updatedAt: date
                }
            })
        } else {
            throw 'Not token found';
        }
    };

}