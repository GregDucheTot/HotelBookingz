import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return <>
        <nav><ul>
            <li><Link to='/book'>Book a room</Link></li>
            <li><Link to='/offers'>See our offers</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul></nav>
    </>;
}
export default Nav;