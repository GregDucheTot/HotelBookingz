const express = require('express');
const HotelRepository = require("./Hotels/HotelRepository");
const cors = require('cors');
const app = express();
app.use(cors());
const defaultPort = 9000;
const mongoClient =  require('mongodb').MongoClient;


const connect = () => {
    return new Promise((resolve, reject) => {
        console.log('prom');
        mongoClient.connect('mongodb://127.0.0.1:27017/hotelbookingz', (err, db) => {
            console.log('promcon');
            if (err) {
                reject(err);
            }
            resolve(db);
        })
    });

};

app.get('/status', (request, response) => {

    connect().then((db) => {

        db.close();
    }, (err) => {
        console.log(err)
    });

    response.json('ok')

});

app.get('/hotels', (request, response) => {
    connect();
    const hotelrepo = new HotelRepository();
    response.json(hotelrepo.read());
});

app.get('/', (request, response) => {
    const hotelrepo = new HotelRepository();
    response.send('Hello, world');
    console.log(hotelrepo.read())
});

app.listen(defaultPort, () => {
    console.log(`Listening on ${defaultPort}`);
})