import React, {Component} from "react";

export default class Search extends Component {
    render() {
        return <>
            <input className={'search'} name={'search'} placeholder={'Search by name or location'} />
        </>
    }
}