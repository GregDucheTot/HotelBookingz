import React, {Component} from "react";

export default class Login extends Component {
    onLogin() {
        alert('Click on login link !');
    }

    render () {
        return <>
            <a className={'login'} onClick={this.onLogin}>Login</a>
        </>;
    }
}