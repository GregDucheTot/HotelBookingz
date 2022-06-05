import React from "react";
import {Link} from "react-router-dom";

const Logo = () => {
    return <>
        <Link to='/' className={'logo'}><img src={ '/assets/images/logo.png'} /></Link>
    </>;
}
export default Logo;
