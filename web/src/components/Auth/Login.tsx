import React, {ChangeEvent, Component} from "react";
import Header from "../Header/Header";
import {Md5} from "ts-md5";
import User from "./User";
import {AuthRepository} from "../../Services/Auth/AuthRepository";
import {Navigate} from "react-router-dom";

export default class Login extends Component<{}, { user: User, loggedIn: boolean }> {

    onLogin = async () => {
        const authRepo = AuthRepository.getInstance();
        const loggedIn = await authRepo.login(this.state?.user);
        this.setState({loggedIn: loggedIn});
        if (!loggedIn) {
            alert('Your credentials are incorrect')
        }
    }

    onChange = (event: ChangeEvent) => { // @fixme: this type shows some conflicts in the IDE, so may have to double check this is the correct type
        let user: User = this.state?.user || new User('');

        if (event.target.id === 'name') {
            // @ts-ignore
            user.name = event.target.value;
        }

        if (event.target.id === 'password') {
            // @ts-ignore
            user.hash = Md5.hashStr(event.target.value || '');
        }

        this.setState({user: user})
    }

    render() {
        const auth = AuthRepository.getInstance();
        return <>
            <Header/>
            {this.state?.loggedIn &&
                <Navigate replace to={'/admin'}/>
            }
            <label>
                <input type={'text'} id={'name'} placeholder={'Your username'} onChange={this.onChange}/>
            </label>
            <label>
                <input type={'password'} id={'password'} placeholder={'Your password'} onChange={this.onChange}/>
            </label>
            <button onClick={this.onLogin}>Log in</button>
        </>
    }
}