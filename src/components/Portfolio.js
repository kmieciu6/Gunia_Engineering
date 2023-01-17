import React from "react";
import {Link} from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";

const Portfolio = () => {
    return (
        <>
            <Header/>
            <section id='portfolio'>
                Portfolio <br/>
                <br/>
                <Link to='/'>Strona główna</Link>
            </section>
            <Footer/>
        </>
    )
}

export default Portfolio;