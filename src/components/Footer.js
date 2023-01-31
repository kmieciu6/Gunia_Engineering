import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <section id='footer'>
            <div className='phone_mail'>
                <div>
                    <a href="mailto:engineering.finite@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <p>engineering.finite@gmail.com</p>
                    </a>
                    <a href="tel:+61">
                        <FontAwesomeIcon icon={faPhone}/>
                        <p>+61 ??????</p>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Footer;