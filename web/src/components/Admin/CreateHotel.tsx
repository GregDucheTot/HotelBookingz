import React, {ChangeEvent, Component} from "react";
import User from "../Auth/User";
import {Hotel} from "../../Services/Hotels/Hotel";
import {HotelRepository} from "../../Services/Hotels/HotelRepository";

export default class CreateHotel extends Component<{}, { user: User, hotel: Hotel}>{

    onChange = (e: ChangeEvent) => {
        const id = e.target.id;
        const hotel = this.state?.hotel || new Hotel({});
        // @ts-ignore
        hotel.setAttribute(id, e.target.value);
        this.setState({
            hotel: hotel
        });
    }

    loadImage = (e: ChangeEvent) => {
        const input: HTMLInputElement = e.target;
        if (input && input.files) {
            if (!input.files[0].type.match('image.*')) {
                throw 'Not an image';
            }
            const reader = new FileReader();
            reader.onload = () => {
                const hotel = this.state?.hotel || new Hotel({});
                hotel.setAttribute('image', reader.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    save = () => {
        const hotelRepository = new HotelRepository();
        hotelRepository.createHotel(this.state?.hotel)
    };

    render()
    {
        return <>
            <div className={'admin'}>
                <label>Name:
                    <input type={'text'} id={'name'} onChange={this.onChange}/>
                </label>
                <label>Description:
                    <textarea id={'description'} onChange={this.onChange}/>
                </label>
                <label>Image:
                    <input type={'file'} id={'image'} onChange={this.loadImage}  accept={'.jpg,.png'}/>
                </label>
                <label>Country:
                    <input type={'text'} id={'country'} onChange={this.onChange}/>
                </label>
                <label>City:
                    <input type={'text'} id={'city'} onChange={this.onChange}/>
                </label>
                <fieldset>
                    <legend>Price:</legend>
                    <label>Price per night:
                        <input type={'number'} id={'perNight'} onChange={this.onChange}/>
                    </label>
                    <label>Price per week:
                        <input type={'number'} id={'perWeek'} onChange={this.onChange}/>
                    </label>
                    <label>Cost per night:
                        <input type={'number'} id={'costPerNight'} onChange={this.onChange}/>
                    </label>
                </fieldset>
                <button type={'submit'} name={'save'} onClick={this.save}>Save</button>
            </div>
        </>;
    }
}