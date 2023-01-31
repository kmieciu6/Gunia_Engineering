import React from 'react'
import Header from "./header/Header";
import Footer from "./Footer";
import opening from '../assets/opening.jpeg'

const Home = () => {
    return (
        <>
            <Header/>
            <section id='home'>
                <img src={opening} alt="opening" className='opening'/>
                <div className='text'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deserunt quasi quo reiciendis
                        similique?
                        Accusamus ad adipisci, at dicta eaque esse expedita, harum illum iste iusto necessitatibus odit,
                        repellat sunt?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio eum libero minima
                        nulla
                        sed.
                        Amet assumenda consequatur dolorum harum, in ipsa nobis numquam placeat quam quo quos ullam
                        vitae.
                    </p>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Home;