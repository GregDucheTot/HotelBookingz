import React, {ChangeEvent, Component} from "react";
import Header from "../Header/Header";
import {Md5} from "ts-md5";
import User from "./User";

export default class Login extends Component<{}, {user: User}> {
    onLogin() {
        // @ttodo
    }

    onChange = (event:ChangeEvent)  => { // @fixme: this type shows some conflicts in the IDE, so may have to douvle check this is the correct type
        let user: User = this.state?.user || new User('');

        if (event.target.id === 'name') {
            user.name = event.target.value;
        }

        if (event.target.id === 'password') {
            user.token = Md5.hashStr(event.target.value || '');
        }

        console.log(user);
        this.setState({user: user})
    }

    render () {
        return <>
            <Header />
            <label>
                <input type={'text'} id={'name'} placeholder={'Your username'} onChange={this.onChange}/>
            </label>
            <label>
                <input type={'password'} id={'password'} placeholder={'Your password'}  onChange={this.onChange}/>
            </label>
            <button onClick={this.onLogin}>Log in</button>
        </>
    }
}