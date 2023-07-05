import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import photo1 from '../assets/1.jpg';
import photo2 from '../assets/2.jpg';
import photo3 from '../assets/3.jpg';
import photo4 from '../assets/4.jpg';
import photo5 from '../assets/5.jpg';
import photo6 from '../assets/6.jpg';

const Services = () => {
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
                            <p>
                                Our team excels in designing and analyzing mechanical systems to ensure optimal 
                                performance and efficiency. Whether it's product design, machinery development, 
                                or component optimization, we employ advanced simulation and modeling techniques 
                                to deliver reliable and innovative solutions.
                                <br/><br/>
                                Capabilities:
                                <br/><br/>
                                •	3D modelling and drawings preparation <br/>
                                •	BOM preparation <br/>
                                •	Project engineering <br/>
                                •	Test proposals 
                                <br/>
                            </p>
                            <img src={photo1} alt='photos' className="photo"/>
                        </div>
                        <span/>
                    </div>
                    <h3>2.	Finite Element Analysis (FEA)</h3>
                    <div className='container_text'>
                        <div className="text">
                            <p>
                                Our expertise in FEA enables us to accurately assess structural integrity, thermal 
                                behavior, and fluid dynamics of your mechanical systems. We perform detailed simulations 
                                to identify potential weaknesses, predict performance under various conditions, and 
                                recommend design modifications to enhance reliability and safety.
                                <br/><br/>
                                Capabilities:
                                <br/><br/>
                                •	Static structural FEA <br/>
                                •	Nonlinear static structural FEA including nonlinear materials, contacts etc. <br/>
                                •	Buckling <br/>
                                •	Modal <br/>
                                •	Random vibration and harmonic dynamics <br/>
                                •	Shocks and dynamic simulations <br/>
                                •	Fatigue assesment <br/>
                                •	Computational Fluid Dynamics (CFD) 
                                <br/>
                            </p>
                            <img src={photo2} alt='photos' className="photo"/>
                        </div>
                        <span/>
                    </div>
                    <h3>3.	Failure Analysis and Root Cause Investigation</h3>
                    <div className='container_text'>
                        <div className="text">
                            <p>
                                When faced with mechanical failures, our consultancy provides comprehensive failure 
                                analysis and root cause investigation services. We utilize advanced techniques and 
                                investigative methodologies to identify the underlying causes, enabling you to 
                                implement effective corrective measures and prevent future failures. 
                                <br/>
                            </p>
                            <img src={photo3} alt='photos' className="photo"/>
                        </div>
                        <span/>
                    </div>
                    <h3>4.	Product Development and Prototyping</h3>
                    <div className='container_text'>
                        <div className="text">
                            <p>
                                Our consultancy offers end-to-end support in product development, from conceptualization 
                                to prototyping. We leverage our engineering expertise and industry knowledge to guide 
                                you through the entire process, ensuring that your product meets functional requirements, 
                                quality standards, and time-to-market goals.
                                <br/><br/>
                                Capabilities:
                                <br/><br/>
                                •	Selecting cost effective method accrding to your production volume and design <br/>
                                •	Networking you with potential suppliers in Australia and overseas
                                <br/>
                            </p>
                            <img src={photo4} alt='photos' className="photo"/>
                        </div>
                        <span/>
                    </div>
                    <h3>5.	Materials Selection and Testing</h3>
                    <div className='container_text'>
                        <div className="text">
                            <p>
                                We assist clients in selecting appropriate materials for their mechanical systems based 
                                on performance requirements, environmental conditions, and cost considerations. Our team 
                                conducts rigorous material testing, including mechanical properties evaluation, corrosion 
                                resistance analysis, and durability assessments to ensure optimal material selection.
                                <br/><br/>
                                Capabilities:
                                <br/><br/>
                                •	3D printing <br/>
                                •	Material selection and manufacturing processes selection to obtain best value in design and cost <br/>
                                •	Preparing tests proposal <br/>
                                •	Design verification documents preparation for Worksafe or other organisation <br/>
                            </p>
                            <img src={photo5} alt='photos' className="photo"/>
                        </div>
                        <span/>
                    </div>
                    <h3>6.	Slew bearing calculation with our inhouse methodology</h3>
                    <div className='container_text'>
                        <div className="text">
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
                                <br/>
                            </p>
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