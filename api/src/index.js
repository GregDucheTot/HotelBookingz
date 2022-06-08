const express = require('express');
const HotelRepository = require("./Hotels/HotelRepository");
const Auth = require("./Auth/Auth");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const defaultPort = 9000;
const publicRoutes = {
    '/auth/login' : ['POST'],
    '/hotels': ['GET']
};

// Authentication middleware:
app.use(async (request, response, next) => {
    if (Object.keys(publicRoutes).indexOf(request.originalUrl) === -1 || publicRoutes[request.originalUrl].indexOf(request.method) === -1) {
        // verify token
        const headers = request.headers;
        const auth = new Auth();
        try {
            await auth.checkToken(headers['x-app-token']);
            // no need to do anything on token success, just follow to next step
        } catch (exception) {
            return response.status(403).json({'status': exception});
        }

    }
    next();
}); // auth middleware


app.get('/hotels', async (request, response) => {
    const hotelrepo = new HotelRepository();
    response.json(await hotelrepo.read());
});

app.post('/auth/login', async (request, response) => {
    const auth = new Auth();
    const user = await auth.login(request.body.user, request.body.password); // @fixme: move this to Authorization header.
    if (user) {
        const token = await auth.getToken(user._id);
        response.json({authToken: token});
    } else {
        response.status(403).json({status:'forbidden'});
    }
});

app.post('/hotels', (request, response) => {
    const hotelRepo = new HotelRepository();
    try {
        const success = hotelRepo.create(request.body);
        response.json(success);
    } catch (exception) {
        response.json(exception);
    }
});

app.get('/', (request, response) => {
    const hotelrepo = new HotelRepository();
    response.send('Hello, world');
    console.log(hotelrepo.read())
});

app.listen(defaultPort, () => {
    console.log(`Listening on ${defaultPort}`);
})