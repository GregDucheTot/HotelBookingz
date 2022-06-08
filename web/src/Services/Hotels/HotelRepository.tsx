import {Hotel} from "./Hotel";
import {response} from "express";
import {AuthRepository} from "../Auth/AuthRepository";

export class HotelRepository {
    serviceUrl: string = 'http://localhost:9000/hotels';

    async createHotel(hotel: Hotel) {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const authRepo = AuthRepository.getInstance();
        authRepo.augmentHeaders(headers);

        const results = await fetch(this.serviceUrl, {
            method: 'POST',
            body: JSON.stringify(hotel),
            headers: headers
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