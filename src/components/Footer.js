import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Contact from "./Contact";
import { useEffect, useRef } from 'react';

const Footer = () => {

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
        <section id='footer' className="box fade-in" ref={(el) => elementsRef.current.push(el)}>
            <Contact/>
            <div>
                <div className='phone_mail'>
                    <a href="mailto:engineering.finite@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                        <p>engineering.finite@gmail.com</p>
                    </a>
                    {/* <a href="tel:+61">
                        <FontAwesomeIcon icon={faPhone} className='icon'/>
                        <p>+61 xxx xx xx</p>
                    </a> */}
                </div>
                <div className='copyright'>
                    <p>
                        Copyright © 2023
                        <a href="https://finiteengineering.com.au"> finiteengineering.com.au</a>
                    </p>
                    <p>
                        Made by
                        <a href="https://github.com/kmieciu6?tab=repositories">
                            <b> Jakub Kmiecik</b>
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer;