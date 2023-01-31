import React, {useState} from "react";
import {Link} from "react-router-dom";
import Nav from "./Nav";
import logo from "../../assets/logo.svg";
import ScrollTop from "./ScrollTop";
import Cookies from "../Cookies";
import Burger from "./Burger";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <section id='header'>
            <div className='container'>
                <Link to="/" className='title'>
                    <img className='main_logo' src={logo} alt="logo"/>
                    <h3>Finite Engineering</h3>
                </Link>
                <Nav/>
                <Burger open={open} setOpen={setOpen}/>
            </div>
            <ScrollTop/>
            <Cookies/>
        </section>
    );
};

export default Header;