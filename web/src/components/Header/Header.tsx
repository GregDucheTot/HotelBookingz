import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import Login from "./Login";
import Search from "./Search";

const About = () => {
    return <>
        <header>
            <Logo />
            <Login />
            <Nav/>
            <Search />
        </header>
    </>;
}
export default About;
