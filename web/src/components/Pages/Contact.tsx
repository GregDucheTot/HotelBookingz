import React, {Component} from "react";
import Header from "../Header/Header";

export default class Contact extends Component{
    render() {
        return <>
            <Header/>
            <div className={'contact'}>
                <form>
                    <label>
                        Your Name*
                        <input type={'text'} required={true} name={'name'}/>
                    </label>
                    <label>
                        Your Email address*
                        <input type={'text'} required={true} name={'email'}/>
                    </label>
                    <label>Your message:
                        <textarea></textarea>
                    </label>
                    <button type={'submit'}>Send</button>
                </form>
            </div>
        </>;
    }
}
