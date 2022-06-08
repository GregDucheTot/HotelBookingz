import {Hotel} from "./Hotel";
import {response} from "express";

export class HotelRepository {
    serviceUrl: string = 'http://localhost:9000/hotels';

    async createHotel(hotel: Hotel) {
        const results = await fetch(this.serviceUrl, {
            method: 'POST',
            body: JSON.stringify(hotel),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })


        console.log('RESULTS', results);
    }

    async getHotels() {
        let hotels: Hotel[] = [];
        try {
            const response = await fetch(this.serviceUrl);
            if (response.ok) {
                const data = await response.json();
                for (let hotel of data) {
                    hotels.push(new Hotel(hotel));
                }
            }
        } catch (exception) {
        }

        return hotels;

    }
}