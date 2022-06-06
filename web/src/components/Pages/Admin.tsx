import React, {Component} from "react";
import Header from "../Header/Header";
import CreateHotel from "../Admin/CreateHotel";
export default class Admin extends Component{
    render() {
        return <>
            <Header/>
            <CreateHotel />
        </>;
    }
}
