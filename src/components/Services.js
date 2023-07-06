import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import photo1 from '../assets/1.jpg';
import photo2 from '../assets/2.jpg';
import photo3 from '../assets/3.jpg';
import photo4 from '../assets/4.jpg';
import photo5 from '../assets/5.jpg';
import photo6 from '../assets/6.jpg';
import { useEffect, useRef } from 'react';

const Services = () => {

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
            <section id='services'>
                <div className="title">
                    <h2>Services</h2>
                </div>
                <div className="container">
                    <h3>1.	Mechanical Design and Analysis</h3>
                    <div className='container_text'>
                        <div className="text">
                            <div>
                                <p>
                                    Our team excels in designing and analyzing mechanical systems to ensure optimal 
                                    performance and efficiency. Whether it's product design, machinery development, 
                                    or component optimization, we employ advanced simulation and modeling techniques 
                                    to deliver reliable and innovative solutions.
                                    <br/><br/>
                                    Capabilities:
                                </p>
                                <ul>
                                    <li>3D modelling and drawings preparation</li>
                                    <li>BOM preparation</li>
                                    <li>Project engineering</li>
                                    <li>Test proposals </li>
                                </ul>
                            </div>
                            <img src={photo1} alt='photos' className="photo"/>
                        </div>
                        <span/>
                    </div>
                    <h3>2.	Finite Element Analysis (FEA)</h3>
                    <div className='container_text box fade-in' ref={(el) => elementsRef.current.push(el)}>
                        <div className="text">
                            <div>
                                <p>
                                    Our expertise in FEA enables us to accurately assess structural integrity, thermal 
                                    behavior, and fluid dynamics of your mechanical systems. We perform detailed simulations 
                                    to identify potential weaknesses, predict performance under various conditions, and 
                                    recommend design modifications to enhance reliability and safety.
                                    <br/><br/>
                                    Capabilities:
                                </p>
                                <ul>
                                    <li>Static structural FEA</li>
                                    <li>Nonlinear static structural FEA including nonlinear materials, contacts etc.</li>
                                    <li>Buckling</li>
                                    <li>Modal</li>
                                    <li>Random vibration and harmonic dynamics</li>
                                    <li>Shocks and dynamic simulations</li>
                                    <li>Fatigue assesment</li>
                                    <li>Computational Fluid Dynamics (CFD)</li>
                                </ul>
                            </div>
                            <img src={photo2} alt='photos' className="photo"/>
                        </div>
                        <span/>
                    </div>
                    <h3>3.	Failure Analysis and Root Cause Investigation</h3>
                    <div className='container_text box fade-in' ref={(el) => elementsRef.current.push(el)}>
                        <div className="text">
                            <div>
                                <p>
                                    When faced with mechanical failures, our consultancy provides comprehensive failure 
                                    analysis and root cause investigation services. We utilize advanced techniques and 
                                    investigative methodologies to identify the underlying causes, enabling you to 
                                    implement effective corrective measures and prevent future failures. 
                                </p>
                            </div>
                            <img src={photo3} alt='photos' className="photo"/>
                        </div>
                        <span/>
                    </div>
                    <h3>4.	Product Development and Prototyping</h3>
                    <div className='container_text box fade-in' ref={(el) => elementsRef.current.push(el)}>
                        <div className="text">
                            <div>
                                <p>
                                    Our consultancy offers end-to-end support in product development, from conceptualization 
                                    to prototyping. We leverage our engineering expertise and industry knowledge to guide 
                                    you through the entire process, ensuring that your product meets functional requirements, 
                                    quality standards, and time-to-market goals.
                                    <br/><br/>
                                    Capabilities:
                                </p>
                                <ul>
                                    <li>Selecting cost effective method accrding to your production volume and design</li>
                                    <li>Networking you with potential suppliers in Australia and overseas</li>
                                </ul>
                            </div>
                            <img src={photo4} alt='photos' className="photo"/>
                        </div>
                        <span/>
                    </div>
                    <h3>5.	Materials Selection and Testing</h3>
                    <div className='container_text box fade-in' ref={(el) => elementsRef.current.push(el)}>
                        <div className="text">
                            <div>
                                <p>
                                    We assist clients in selecting appropriate materials for their mechanical systems based 
                                    on performance requirements, environmental conditions, and cost considerations. Our team 
                                    conducts rigorous material testing, including mechanical properties evaluation, corrosion 
                                    resistance analysis, and durability assessments to ensure optimal material selection.
                                    <br/><br/>
                                    Capabilities:
                                </p>
                                <ul>
                                    <li>3D printing</li>
                                    <li>Material selection and manufacturing processes selection to obtain best value in design and cost</li>
                                    <li>Preparing tests proposal</li>
                                    <li>Design verification documents preparation for Worksafe or other organisation</li>
                                </ul>
                            </div>
                            <img src={photo5} alt='photos' className="photo"/>
                        </div>
                        <span/>
                    </div>
                    <h3>6.	Slew bearing calculation with our inhouse methodology</h3>
                    <div className='container_text box fade-in' ref={(el) => elementsRef.current.push(el)}>
                        <div className="text">
                            <div>
                                <p>
                                    Our approach takes into account the specific operational loads, such as radial, axial, 
                                    and moment loads. We analyze load distribution and stress concentrations to ensure 
                                    optimal load carrying capacity and longevity of the slew bearing. We can prepare 
                                    the FEA model of slew bearing and include it in the simulations of entire structure, 
                                    to find potential soft spots which can affect bearing life. Our unique method is based on 
                                    recent literature and the recent PhD of our leading engineer and it was confirmed by tests.
                                    <br/><br/>
                                    We can help you to reduce machine downtime and expensive bearing replacement by simple 
                                    changes in the design structure.
                                </p>
                            </div>
                            <img src={photo6} alt='photos' className="photo"/>
                        </div>
                        <span/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Services;