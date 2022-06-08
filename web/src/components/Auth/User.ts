export default class User {
    name: string;
    token: string;

    constructor(name: string, token?: string) {
        this.name = name;
        if (token) {
            this.token = token;
        }
    }
}