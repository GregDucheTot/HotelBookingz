export default class User {
    name: string;
    hash: string = '';

    /**
     * The Auth token from the server
     */
    token: string = '';

    constructor(name: string, hash?: string) {
        this.name = name;
        if (hash) {
            this.hash = hash;
        }
    }
}