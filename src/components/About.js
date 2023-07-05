import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import photo1 from '../assets/7.jpg';
import photo2 from '../assets/8.jpg';

const About = () => {
    return (
        <>
            <Header/>
            <section id='about'>
                <div className="title">
                    <h2>About</h2>
                </div>
                <div className="text">
                    <p>
                        Welcome to Finite Engineering, a leading mechanical consultancy company dedicated to providing 
                        innovative solutions and exceptional expertise in the field of mechanical engineering including 
                        aerospace, automotive, medical and heavy industry. With a team of highly skilled professionals 
                        (NER and PhD engineers) and a client-centric approach, we offer comprehensive services to meet 
                        your specific needs and deliver superior results.
                    </p>
                    <img src={photo1} alt='photos' className="photo"/>
                    <p>
                        At Finite Engineering, we specialize in optimizing mechanical systems, enhancing performance, 
                        and driving innovation across a wide range of industries. With years of experience and a deep 
                        understanding of mechanical engineering principles, we are well-equipped to tackle complex 
                        challenges and provide effective solutions.
                    </p>
                    <img src={photo2} alt='photos' className="photo"/>
                    <p>
                        One of our key strengths is our expertise in mechanical design and analysis. Whether it's 
                        conceptualizing new products, optimizing existing systems, or performing detailed simulations, 
                        we employ advanced techniques such as finite element analysis (FEA) and computational fluid 
                        dynamics (CFD) to ensure robust and efficient designs. Our approach enables us to identify 
                        potential issues, predict performance outcomes, and recommend design modifications to achieve 
                        optimal results. Our unique approach allows to create a slew bearing FEA model and include 
                        it in simulation of the entire machine or structure. In a short time, we can improve design 
                        based on results from FEA, and therefore reduce
                    </p>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default About;