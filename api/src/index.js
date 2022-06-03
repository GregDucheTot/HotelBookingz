const express = require('express');
const HotelRepository = require("./Hotels/HotelRepository");
const app = express();
const defaultPort = 8080;
app.get('/', (request, response) => {
    const hotelrepo = new HotelRepository();
    response.send('Hello, world');
    console.log(hotelrepo.read())
});

app.listen(defaultPort, () => {
    console.log(`Listening on ${defaultPort}`);
})