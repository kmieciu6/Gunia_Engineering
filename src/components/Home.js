import React from 'react'
import Header from "./header/Header";
import Footer from "./Footer";
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.jpg'
import photo5 from '../assets/photo5.jpg'
import photo6 from '../assets/photo6.jpg'
import photo7 from '../assets/photo7.jpg'
import { Carousel } from 'react-responsive-carousel';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbtack, faPenFancy, faPencil, faCalculator, faMarker, faScissors} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <>
            <Header/>
            <Carousel showThumbs={false} autoPlay={true} interval={5000} infiniteLoop={true}>
                <div>
                    <img src={photo1} alt="carousel 1" />
                    <h1 className="legend">Empowering Innovation through Engineering Expertise</h1>
                </div>
                <div>
                    <img src={photo2} alt="carousel 2" />
                    <h1 className="legend">Mechanical Design and Analysis</h1>
                </div>
                <div>
                    <img src={photo3} alt="carousel" />
                    <h1 className="legend">Finite Element Analysis (FEA)</h1>
                </div>
                <div>
                    <img src={photo4} alt="carousel 4" />
                    <h1 className="legend">Failure Analysis and Root Cause Investigation</h1>
                </div>
                <div>
                    <img src={photo5} alt="carousel 5" />
                    <h1 className="legend">Product Development and Prototyping</h1>
                </div>
                <div>
                    <img src={photo6} alt="carousel 6" />
                    <h1 className="legend">Materials Selection and Testing</h1>
                </div>
                <div>
                    <img src={photo7} alt="carousel 7" />
                    <h1 className="legend">Slew bearing calculation with our inhouse methodology.</h1>
                </div>
            </Carousel>
            <section id='home'>
                <div className='text-welcome'>
                    <div>
                        <h3>
                            Welcome to Finite Engineering, your trusted partner in mechanical consultancy. 
                            We optimize mechanical systems, enhance performance, and drive innovation. 
                            With experienced engineers and cutting-edge tools, we provide tailored solutions to 
                            meet your needs.
                        </h3>
                    </div>
                </div>
                <div className='text'>
                    <div className='text-line'>
                        <div className='text-container'>
                            <FontAwesomeIcon icon={faThumbtack} className='icons'/>
                            <h2>
                                Mechanical Design and Analysis
                            </h2>
                            <p>
                                We excel in designing and analyzing mechanical systems for optimal performance. 
                                Our advanced simulation techniques deliver reliable and innovative solutions for 
                                product design, machinery development, and component optimization. We also offer 
                                third-party verification and design registration assistance.
                            </p>
                        </div>
                        <div className='text-container'>
                            <FontAwesomeIcon icon={faPenFancy} className='icons'/>
                            <h2>
                                Finite Element Analysis (FEA)
                            </h2>
                            <p>
                                Our FEA expertise accurately assesses structural integrity, thermal behavior, 
                                and fluid dynamics. Through detailed simulations, we identify weaknesses, 
                                predict performance, and recommend design modifications for enhanced reliability and safety.
                            </p>
                        </div>
                        <div className='text-container'>
                            <FontAwesomeIcon icon={faPencil} className='icons'/>
                            <h2>
                                Failure Analysis and Root Cause Investigation
                            </h2>
                            <p>
                                Our consultancy offers comprehensive failure analysis and root cause investigation services. 
                                Using advanced techniques, we identify underlying causes to implement effective corrective 
                                measures and prevent future failures.
                            </p>
                        </div>
                    </div>
                    <div className='text-line'> 
                        <div className='text-container'>
                            <FontAwesomeIcon icon={faCalculator} className='icons'/>
                            <h2>
                                Product Development and Prototyping: 
                            </h2>
                            <p>
                                We offer comprehensive product development support, from concept to prototyping. With our engineering 
                                expertise and industry knowledge, we ensure your product meets functional requirements, quality standards, 
                                and time-to-market goals.
                            </p>
                        </div>
                        <div className='text-container'>
                            <FontAwesomeIcon icon={faMarker} className='icons'/>
                            <h2>
                                Materials Selection and Testing
                            </h2>
                            <p>
                                We assist clients in selecting suitable materials for mechanical systems based on performance, 
                                environment, and cost.
                            </p>
                        </div>
                        <div className='text-container'>
                            <FontAwesomeIcon icon={faScissors} className='icons'/>
                            <h2>
                                Slew bearing calculation with our inhouse methodology. 
                            </h2>
                            <p>
                                We utilize advanced FEA analysis to optimize the load capacity and durability of slew bearings. 
                                By integrating the bearing model into structure simulations, we identify areas for improved performance. 
                                Our approach is supported by recent literature and the expertise of our leading engineer.
                            </p>
                        </div>
                    </div>
                    <p className='last-text'>
                        At Finite Engineering, we are committed to delivering exceptional mechanical consultancy services tailored to 
                        your unique requirements. Contact us today to discuss how we can optimize your mechanical systems and 
                        propel your business forward.
                    </p>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Home;