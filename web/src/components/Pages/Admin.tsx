import React, {Component} from "react";
import Header from "../Header/Header";
import CreateHotel from "../Admin/CreateHotel";
import {AuthRepository} from "../../Services/Auth/AuthRepository";
import {Navigate} from "react-router-dom";

export default class Admin extends Component {

    /**
     * Redirect if user is not authenticated
     */
    componentWillMount() {

        const authRepo = AuthRepository.getInstance();
        if (!authRepo.user || !authRepo.user.token) {
            //history.pushState({}, '', '/login')
        }
    }

    render() {
        const authRepo = AuthRepository.getInstance();

        return <>
            <Header/>
            {
                !authRepo.isLoggedIn() &&
                <Navigate replace to={'/login'}/>
            }
            {
                authRepo.isLoggedIn() &&
                <CreateHotel /> // Displays only if you are logged in
            }

        </>;
    }
}
