import React, {Component} from "react";
import User from "../Auth/User";

export default class CreateHotel extends Component<{}, { user: User}>{
    render()
    {
        return <>
            <div className={'admin'}>
                <label>Name:
                    <input type={'text'} name={'name'}/>
                </label>
                <label>Description:
                    <textarea name={'description'}/>
                </label>
                <label>Image:
                    <input type={'text'} name={'image'}/>
                </label>
                <label>Country:
                    <input type={'text'} name={'country'}/>
                </label>
                <label>City:
                    <input type={'text'} name={'city'}/>
                </label>
                <label>Price per night:
                    <input type={'number'} name={'perNight'}/>
                </label>
                <label>Price per week:
                    <input type={'number'} name={'perWeek'}/>
                </label>
                <label>Cost per night:
                    <input type={'number'} name={'costPerNight'}/>
                </label>
                <input type={'submit'} name={'save'} value={'save'} />
            </div>
        </>;
    }
}