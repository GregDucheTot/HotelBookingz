import User from "../../components/Auth/User";

export class AuthRepository {
    static readonly SERVICE_URL: string = 'http://localhost:9000/auth/login';
    private static instance: AuthRepository;

    user: User | null = null;

    /**
     * Singleton because we want to store the token in this repo for each request
     */
    public static getInstance(): AuthRepository {
        if (!AuthRepository.instance) {
            AuthRepository.instance = new AuthRepository();
        }
        return AuthRepository.instance;
    }

    /**
     * Logs in and returns true or false when logged in
     * @param user
     */
    async login(user: User) {
        const response = await fetch(AuthRepository.SERVICE_URL, {
            method: 'POST',
            body: JSON.stringify({
                user: user.name,
                password: user.hash
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const json = await response.json();
            this.user = user;
            this.user.token = json.authToken;
        } else {
            return false;
        }

        return true;
    }

    isLoggedIn() : boolean
    {
        return typeof this.user?.token !== 'undefined';
    }
}
