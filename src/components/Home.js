import React from 'react'
import Header from "./header/Header";
import Footer from "./Footer";
import photo1 from '../assets/photo1.jpg';
import phone1 from '../assets/phone1.jpg';
import photo2 from '../assets/photo2.jpg';
import phone2 from '../assets/phone2.jpg';
import photo3 from '../assets/photo3.jpg';
import phone3 from '../assets/phone3.jpg';
import photo4 from '../assets/photo4.jpg';
import phone4 from '../assets/phone4.jpg';
import photo5 from '../assets/photo5.jpg';
import phone5 from '../assets/phone5.jpg';
import photo6 from '../assets/photo6.jpg';
import phone6 from '../assets/phone6.jpg';
import photo7 from '../assets/photo7.jpg';
import phone7 from '../assets/phone7.jpg';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';
import icon5 from '../assets/icon5.svg';
import icon6 from '../assets/icon6.svg';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Home = () => {
    const isSmallScreen = window.innerWidth <= 768; // Ustaw odpowiednią szerokość ekranu, aby określić, kiedy przełączać zdjęcia

    const img1 = isSmallScreen ? phone1 : photo1;
    const img2 = isSmallScreen ? phone2 : photo2;
    const img3 = isSmallScreen ? phone3 : photo3;
    const img4 = isSmallScreen ? phone4 : photo4;
    const img5 = isSmallScreen ? phone5 : photo5;
    const img6 = isSmallScreen ? phone6 : photo6;
    const img7 = isSmallScreen ? phone7 : photo7;

    const elementsRef = useRef([]);

    useEffect(() => {
      const handleScroll = () => {
        const windowHeight = window.innerHeight;
  
        elementsRef.current.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top;
  
          if (elementTop < windowHeight) {
            element.classList.add('visible');
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  


    return (
        <>
            <Header/>
            <Carousel showThumbs={false} autoPlay={true} interval={5000} infiniteLoop={true}>
                <div>
                    <img src={img1} alt="carousel 1" />
                    <h1 className="legend">Empowering Innovation through Engineering Expertise</h1>
                </div>
                <div>
                    <img src={img2} alt="carousel 2" />
                    <h1 className="legend">Mechanical Design and Analysis</h1>
                </div>
                <div>
                    <img src={img3} alt="carousel" />
                    <h1 className="legend">Finite Element Analysis (FEA)</h1>
                </div>
                <div>
                    <img src={img4} alt="carousel 4" />
                    <h1 className="legend">Failure Analysis and Root Cause Investigation</h1>
                </div>
                <div>
                    <img src={img5} alt="carousel 5" />
                    <h1 className="legend">Product Development and Prototyping</h1>
                </div>
                <div>
                    <img src={img6} alt="carousel 6" />
                    <h1 className="legend">Materials Selection and Testing</h1>
                </div>
                <div>
                    <img src={img7} alt="carousel 7" />
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
                    <div className='text-line box fade-in' ref={(el) => elementsRef.current.push(el)}>
                        <div className='text-container'>
                            <img className='icons' src={icon1} alt='icon'/>
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
                            <img className='icons' src={icon2} alt='icon'/>
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
                            <img className='icons' src={icon3} alt='icon'/>
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
                    <div className='text-line box fade-in' ref={(el) => elementsRef.current.push(el)}> 
                        <div className='text-container'>
                            <img className='icons' src={icon4} alt='icon'/>
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
                            <img className='icons' src={icon5} alt='icon'/>
                            <h2>
                                Materials Selection and Testing
                            </h2>
                            <p>
                                We assist clients in selecting suitable materials for mechanical systems based on performance, 
                                environment, and cost.
                            </p>
                        </div>
                        <div className='text-container'>
                            <img className='icons' src={icon6} alt='icon'/>
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
                    <h3 className='last-text box fade-in' ref={(el) => elementsRef.current.push(el)}>
                        At Finite Engineering, we are committed to delivering exceptional mechanical consultancy services tailored to 
                        your unique requirements. Contact us today to discuss how we can optimize your mechanical systems and 
                        propel your business forward.
                    </h3>
                    <Link to='/services' className='box fade-in'ref={(el) => elementsRef.current.push(el)}
                    onClick={() => {
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        });
                    }}>
                        <button className='find_out'>Find out more</button>
                    </Link>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Home;