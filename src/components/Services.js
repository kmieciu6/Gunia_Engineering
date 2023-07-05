import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";

const Services = () => {
    return (
        <>
            <Header/>
            <section id='services'>
                <h2>Services</h2>
                <div>
                    <p>
                        1.	Mechanical Design and Analysis
                        <br/>
                        Our team excels in designing and analyzing mechanical systems to ensure optimal performance and efficiency. Whether it's product design, machinery development, or component optimization, we employ advanced simulation and modeling techniques to deliver reliable and innovative solutions.
                        Capabilities:
                        •	3D modelling and drawings preparation
                        •	BOM preparation
                        •	Project engineering 
                        •	Test proposals 
                        <br/><br/>
                        2.	Finite Element Analysis (FEA)
                        Our expertise in FEA enables us to accurately assess structural integrity, thermal behavior, and fluid dynamics of your mechanical systems. We perform detailed simulations to identify potential weaknesses, predict performance under various conditions, and recommend design modifications to enhance reliability and safety.
                        Capabilities:
                        •	Static structural FEA
                        •	Nonlinear static structural FEA including nonlinear materials, contacts etc.
                        •	Buckling
                        •	Modal
                        •	Random vibration and harmonic dynamics
                        •	Shocks and dynamic simulations
                        •	Fatigue assesment
                        •	Computational Fluid Dynamics (CFD)
                        <br/><br/>
                        3.	Failure Analysis and Root Cause Investigation
                        When faced with mechanical failures, our consultancy provides comprehensive failure analysis and root cause investigation services. We utilize advanced techniques and investigative methodologies to identify the underlying causes, enabling you to implement effective corrective measures and prevent future failures.
                        <br/><br/>
                        4.	Product Development and Prototyping
                        Our consultancy offers end-to-end support in product development, from conceptualization to prototyping. We leverage our engineering expertise and industry knowledge to guide you through the entire process, ensuring that your product meets functional requirements, quality standards, and time-to-market goals.
                        Capabilities:
                        •	Selecting cost effective method accrding to your production volume and design
                        •	Networking you with potential suppliers in Australia and overseas
                        <br/><br/>
                        5.	Materials Selection and Testing
                        We assist clients in selecting appropriate materials for their mechanical systems based on performance requirements, environmental conditions, and cost considerations. Our team conducts rigorous material testing, including mechanical properties evaluation, corrosion resistance analysis, and durability assessments to ensure optimal material selection.
                        Capabilities:
                        •	3D printing
                        •	Material selection and manufacturing processes selection to obtain best value in design and cost
                        •	Preparing tests proposal
                        •	Design verification documents preparation for Worksafe or other organisation
                        <br/><br/>
                        6.	Slew bearing calculation with our inhouse methodology
                        Our approach takes into account the specific operational loads, such as radial, axial, and moment loads. We analyze load distribution and stress concentrations to ensure optimal load carrying capacity and longevity of the slew bearing. We can prepare the FEA model of slew bearing and include it in the simulations of entire structure, to find potential soft spots which can affect bearing life. Our unique method is based on recent literature and the recent PhD of our leading engineer and it was confirmed by tests.
                        We can help you to reduce machine downtime and expensive bearing replacement by simple changes in the design structure.
                    </p>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Services;