import CookieConsent from "react-cookie-consent";
import {Link} from "react-router-dom";

const Cookies = () => {
    return (
        <>
            <CookieConsent
                location="bottom"
                buttonText="I understand and accept"
                cookieName="myAwesomeCookieName2"
                style={{background: "#2B373B", opacity: .9}}
                buttonStyle={{background: "lightblue", color: "black", fontSize: "17px", padding: '0.6rem 1rem'}}
                expires={150}
            >
                The website uses cookies to improve its accessibility, personalization or to collect data,
                regarding website traffic. Everyone can decide for themselves whether they allow cookies by setting
                your browser accordingly.
                <br/>
                More information can be found in{" "}
                <Link to="/privacy_policy"
                      className='terms_cookies'
                      onClick={() => {
                          window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                          });
                      }}>
                    Privacy Policy and Regulations
                </Link>
                .
            </CookieConsent>
        </>
    )
}

export default Cookies;