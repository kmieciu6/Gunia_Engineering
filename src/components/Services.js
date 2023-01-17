import React from "react";
import {Link} from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";

const Services = () => {
    return (
        <>
            <Header/>
            <section id='services'>
                Services <br/>
                <br/>
                <Link to='/'>Strona główna</Link>
            </section>
            <Footer/>
        </>
    )
}

export default Services;