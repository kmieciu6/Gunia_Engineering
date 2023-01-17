import React from 'react';
import {ErrorMessage, Field, Formik} from 'formik';
import {useForm} from '@formspree/react';
import Header from "./header/Header";
import Footer from "./Footer";
import thanks from '../assets/logo.svg'
import {Link} from "react-router-dom";

function Contact() {
    let errEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    const [state, handleSubmit] = useForm("xgebvawj");
    if (state.succeeded) {
        return (
            <>
                <Header/>
                <section id='contact' className='pages'>
                    <div className='thanks'>
                        <h1>Dziękujemy za kontakt</h1>
                        <img src={thanks} alt=""/>
                        <Link to='/'>
                            <button className='button'
                                    onClick={() => {
                                        window.scroll({
                                            top: 0,
                                            left: 0,
                                            behavior: "smooth",
                                        });
                                    }}>
                                Wróć
                            </button>
                        </Link>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
    return (
        <>
            <Header/>
            <section id='contact' className='pages'>
                <h1>Kontakt</h1>
                <Formik
                    initialValues={{
                        email: '',
                        name: '',
                        message: '',
                        number: '',
                        agree: false
                    }}

                    validate={values => {
                        const errors = {};
                        if (!values.email || errEmail.test(values.email) === false) {
                            errors.email = 'Email nieprawidłowy';
                        }
                        if (values.name.length < 2) {
                            errors.name = 'Imię i nazwisko powinno mieć co najmniej 2 znaki';
                        }
                        if (values.message.length < 50) {
                            errors.message = 'Wiadomość powinna mieć co najmniej 50 znaków';
                        }
                        if (values.agree === false) {
                            errors.agree = 'Wymagana akceptacja';
                        }
                        return errors;
                    }}
                    onSubmit={handleSubmit}
                >
                    {
                        ({
                             handleSubmit,
                         }) => (
                            <form onSubmit={handleSubmit}>
                                <label className='label'>
                                    <h5>Email</h5>
                                    <Field
                                        id="mail"
                                        type="text"
                                        name="email"
                                        className='input'
                                        placeholder='twój@email.com'
                                    />
                                    <ErrorMessage name="email" render={msg => <p className="alert">{msg}</p>}/>
                                </label>

                                <label className='label'>
                                    <h5>Imię i nazwisko</h5>
                                    <Field
                                        id="name"
                                        type="text"
                                        name="name"
                                        className='input'
                                        placeholder='Imię i nazwisko'
                                    />
                                    <ErrorMessage name="name" render={msg => <p className="alert">{msg}</p>}/>
                                </label>

                                <label className='label'>
                                    <h5>Numer telefonu (opcjonalne)</h5>
                                    <Field
                                        id="number"
                                        type='number'
                                        name='number'
                                        className='input'
                                        placeholder='+48 123456789'
                                    />
                                </label>

                                <label className='label'>
                                    <h5>Wiadomość</h5>
                                    <Field
                                        as='textarea'
                                        id="message"
                                        type='text'
                                        name='message'
                                        className='input'
                                        placeholder='Treść wiadomości'
                                        rows={5}
                                    />
                                    <ErrorMessage name="message" render={msg => <p className="alert">{msg}</p>}/>
                                </label>

                                <label className='label'>
                                    <Field
                                        id="agree"
                                        type='checkbox'
                                        name='agree'
                                        className='checkbox_agree'
                                    />
                                    <h5>
                                        Wyrażam zgodę
                                    </h5>
                                    <span className="checkmark"/>
                                    <ErrorMessage name="agree"
                                                  render={msg => <p className="alert alert_agree">{msg}</p>}/>
                                </label>

                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className='button'>
                                    Wyślij
                                </button>
                            </form>
                        )
                    }
                </Formik>
            </section>
            <Footer/>
        </>
    );
}

export default Contact;