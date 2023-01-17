import React from "react";
import {Link} from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";

const About = () => {
    return (
        <>
            <Header/>
            <section id='about'>
                About <br/>
                <br/>
                <Link to='/'>Strona główna</Link>
            </section>
            <Footer/>
        </>
    )
}

export default About;