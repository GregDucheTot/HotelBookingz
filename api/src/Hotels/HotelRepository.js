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
            results.push(new Hotel(hotel));
        }

        return results;
    }

    update() {}
    delete() {}
}