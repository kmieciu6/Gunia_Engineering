import React from 'react'
import Header from "./header/Header";
import Footer from "./Footer";
import opening from '../assets/opening.jpeg'
import photo from '../assets/photo.jpeg'

const Home = () => {
    return (
        <>
            <Header/>
            <section id='home'>
                <img src={opening} alt="opening" className='opening'/>
                <div className='text'>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deserunt quasi quo reiciendis
                            similique?
                            Accusamus ad adipisci, at dicta eaque esse expedita, harum illum iste iusto necessitatibus
                            odit,
                            repellat sunt?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio eum libero
                            minima
                            nulla
                            sed.
                            Amet assumenda consequatur dolorum harum, in ipsa nobis numquam placeat quam quo quos ullam
                            vitae.
                        </p>
                    </div>
                </div>
                <div className='text'>
                    <div>
                        <img src={photo} alt=""/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos exercitationem maxime nulla
                            qui
                            sapiente? Adipisci blanditiis cupiditate deserunt ea eligendi eos ex illo illum in itaque
                            maiores molestiae necessitatibus nisi optio, pariatur porro quis recusandae repellat
                            reprehenderit repudiandae tempora voluptates?
                        </p>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Home;