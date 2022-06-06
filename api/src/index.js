const express = require('express');
const HotelRepository = require("./Hotels/HotelRepository");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const defaultPort = 9000;

app.get('/hotels', async (request, response) => {
    const hotelrepo = new HotelRepository();

    response.json(await hotelrepo.read());
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