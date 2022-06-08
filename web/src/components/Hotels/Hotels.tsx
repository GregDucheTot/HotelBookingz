import React, {Component} from "react";
import {Hotel as HotelModel} from "../../Services/Hotels/Hotel";
import {HotelRepository} from "../../Services/Hotels/HotelRepository";
export default class Hotels extends Component<{}, { hotels: HotelModel[] }> {
    getHotels() {

        const hotelRepository = new HotelRepository();
        hotelRepository.getHotels().then((listOfHotels) => {
            this.setState({
                hotels: listOfHotels
            });

        });

    }

    componentDidMount() {
        this.getHotels();
    }

    render() {

        return <>
            {this.state?.hotels?.map((hotel, i) => {
                return <div key={i} style={{backgroundImage: `url(${hotel.image})`, backgroundSize:'contain', backgroundRepeat:'no-repeat'}} className={'hotel'}>
                            <h1>{hotel.name}</h1>
                            <p>{hotel.description}</p>
                            <div className={'pricing'}>
                                <h2>${hotel.pricing.perNight}</h2>
                                <h3>Or ${hotel.pricing.perWeek} for a week</h3>
                            </div>
                        </div>
            })}
        </>;
    }
}