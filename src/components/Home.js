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
                    <p className="legend">Empowering Innovation through Engineering Expertise</p>
                </div>
                <div>
                    <img src={photo2} alt="carousel 2" />
                    <p className="legend">Mechanical Design and Analysis</p>
                </div>
                <div>
                    <img src={photo3} alt="carousel" />
                    <p className="legend">Finite Element Analysis (FEA)</p>
                </div>
                <div>
                    <img src={photo4} alt="carousel 4" />
                    <p className="legend">Failure Analysis and Root Cause Investigation</p>
                </div>
                <div>
                    <img src={photo5} alt="carousel 5" />
                    <p className="legend">Product Development and Prototyping</p>
                </div>
                <div>
                    <img src={photo6} alt="carousel 6" />
                    <p className="legend">Materials Selection and Testing</p>
                </div>
                <div>
                    <img src={photo7} alt="carousel 7" />
                    <p className="legend">Slew bearing calculation with our inhouse methodology.</p>
                </div>
            </Carousel>
            <section id='home'>
                <div className='text-welcome'>
                    <div>
                        <p>
                        Welcome to Finite Engineering, your trusted partner in mechanical consultancy. 
                        We offer a comprehensive range of services aimed at optimizing your mechanical systems, 
                        enhancing performance, and driving innovation. With our team of experienced engineers and 
                        cutting-edge tools, we provide tailored solutions to meet your specific needs. 
                        Here are some of the services we offer:
                        </p>
                    </div>
                </div>
                {/* <div className='text-section'> */}
                    <div className='text'>
                        <div className='text-line'>
                            <div>
                                <FontAwesomeIcon icon={faThumbtack} className='icons'/>
                                <h2>
                                Mechanical Design and Analysis
                                </h2>
                                <p>
                                Our team excels in designing and analyzing mechanical systems to ensure optimal 
                                performance and efficiency. Whether it's product design, machinery development, 
                                or component optimization, we employ advanced simulation and modeling techniques 
                                to deliver reliable and innovative solutions. Additionally we can perform 3rd part 
                                verification required by law and help you to register your design.
                                </p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPenFancy} className='icons'/>
                                <h2>
                                    Finite Element Analysis (FEA)
                                </h2>
                                <p>
                                    Our expertise in FEA enables us to accurately assess structural integrity, 
                                    thermal behavior, and fluid dynamics of your mechanical systems. We perform 
                                    detailed simulations to identify potential weaknesses, predict performance 
                                    under various conditions, and recommend design modifications to enhance reliability 
                                    and safety.
                                </p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPencil} className='icons'/>
                                <h2>
                                    Failure Analysis and Root Cause Investigation
                                </h2>
                                <p>
                                    When faced with mechanical failures, our consultancy provides comprehensive 
                                    failure analysis and root cause investigation services. We utilize advanced 
                                    techniques and investigative methodologies to identify the underlying causes, 
                                    enabling you to implement effective corrective measures and prevent future failures.
                                </p>
                            </div>
                        </div>
                        <div className='text-line'> 
                            <div>
                                <FontAwesomeIcon icon={faCalculator} className='icons'/>
                                <h2>
                                    Product Development and Prototyping: 
                                </h2>
                                <p>
                                    Our consultancy offers end-to-end support in product development, from conceptualization 
                                    to prototyping. We leverage our engineering expertise and industry knowledge to guide you 
                                    through the entire process, ensuring that your product meets functional requirements, 
                                    quality standards, and time-to-market goals.
                                </p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faMarker} className='icons'/>
                                <h2>
                                    Materials Selection and Testing
                                </h2>
                                <p>
                                    We assist clients in selecting appropriate materials for their mechanical systems based on 
                                    performance requirements, environmental conditions, and cost considerations. Our team 
                                    conducts rigorous material testing, including mechanical properties evaluation, corrosion 
                                    resistance analysis, and durability assessments to ensure optimal material selection.
                                </p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faScissors} className='icons'/>
                                <h2>
                                    Slew bearing calculation with our inhouse methodology. 
                                </h2>
                                <p>
                                    Our approach takes into account the specific operational loads, such as radial, axial, 
                                    and moment loads. We analyze load distribution and stress concentrations to ensure optimal 
                                    load carrying capacity and longevity of the slew bearing. We car prepare FEA model of slew 
                                    bearing and include it in the simulations of entire structure, to find potential soft spots 
                                    which can affect bearing life. Our unique method is based on recent literature and the recent 
                                    PhD of our leading engineer and it was confirmed by tests.
                                </p>
                            </div>
                        </div>
                        <p>
                            At Finite Engineering, we are committed to delivering exceptional mechanical consultancy services 
                            tailored to your unique requirements. Contact us today to discuss how we can optimize your mechanical 
                            systems and propel your business forward.
                        </p>
                    </div>
                {/* </div> */}
            </section>
            <Footer/>
        </>
    )
}

export default Home;