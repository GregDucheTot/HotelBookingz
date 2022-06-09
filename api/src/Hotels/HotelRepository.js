const Adapter = require("../Database/Adapter");
const Hotel = require('./Hotel');

module.exports = class HotelRepository {
    collection = 'hotels';
    adapter;
    constructor() {
        this.adapter = new Adapter();
    }

    create(hotelData) {
        // @fixme: add validation on hotel Data
        return this.adapter.insert(this.collection, hotelData);
    }

    async read() {
        let results = [];
        const data = await this.adapter.findAll(this.collection);
        for (let hotel of data) {
            const objHotel  =new Hotel(hotel);
            console.log(objHotel.pricing);
            results.push(objHotel);

        }

        return results;
    }
}