import React from 'react'
import Header from "./header/Header";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Header/>
            <section id='home'>
                <h1>Strona główna</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deserunt quasi quo reiciendis
                    similique?
                    Accusamus ad adipisci, at dicta eaque esse expedita, harum illum iste iusto necessitatibus odit,
                    repellat sunt?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio eum libero minima nulla
                    sed.
                    Amet assumenda consequatur dolorum harum, in ipsa nobis numquam placeat quam quo quos ullam vitae.
                </p>
            </section>
            <Footer/>
        </>
    )
}

export default Home;