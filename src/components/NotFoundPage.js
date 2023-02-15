import React from "react";
import {Link} from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";

const NotFoundPage = () => {
    return (
        <>
            <Header/>
            <section id='not_found_page'>
                <h1>Error 404!</h1>
                <h2>Oops! That page can't be found</h2>
                <Link to='/'><button className='btn'>Main page</button></Link>
            </section>
            <Footer/>
        </>
    )
}

export default NotFoundPage;