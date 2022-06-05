import {Hotel} from "./Hotel";
import {response} from "express";

export class HotelRepository {
    serviceUrl: string = 'http://localhost:9000/hotels';

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