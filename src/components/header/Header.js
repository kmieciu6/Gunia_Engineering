import React from "react";
import {Link} from "react-router-dom";
import Nav from "./Nav";
import logo from "../../assets/logo.svg";
import ScrollTop from "./ScrollTop";

const Header = () => {
    return (
        <section id='header'>
            <div className='container'>
                <Link to="/" className='title'>
                    <h3>Gunia</h3>
                    <img className='main_logo' src={logo} alt="logo"/>
                </Link>
                <Nav/>
            </div>
            <ScrollTop />
        </section>
    );
};

export default Header;