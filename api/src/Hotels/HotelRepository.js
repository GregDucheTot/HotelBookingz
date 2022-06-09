const Adapter = require("../Database/Adapter");
const Hotel = require('./Hotel');

module.exports = class HotelRepository {
    collection = 'hotels';
    adapter;
    constructor() {
        this.adapter = new Adapter();
    }

    create(hotelData) {
        if (hotelData && hotelData['name']) {
            return this.adapter.insert(this.collection, {
                name: hotelData['name'],
                description: hotelData['description'],
                image: hotelData['image'],
                country: hotelData['country'],
                pricing: {
                    perNight: parseInt(hotelData.pricing?.perNight) || 0,
                    perWeek: parseInt(hotelData.pricing?.perWeek) || 0,
                    costPerNight: parseInt(hotelData.pricing?.costPerNight) || 0,
                }
            });
        }
    }

    async read() {
        let results = [];

        // Sort hotel by revenu to show the best available price first
        const data = await this.adapter.aggregate(this.collection, [
            {
                $project: {
                    revenue: {$subtract:['$pricing.perNight', '$pricing.costPerNight']},
                    _id: '$_id',
                    name: '$name',
                    image: '$image',
                    country:'$country',
                    pricing: '$pricing'
                }
            }, {
                $sort: {
                    revenue: -1
                }
            }
        ]);
        for (let hotel of data) {
            const objHotel  =new Hotel(hotel);
            results.push(objHotel);
        }
        return results;
    }
}