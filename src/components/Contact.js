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
                <section id='contact'>
                    <div className='thanks'>
                        <h1>Thank you for contacting us</h1>
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
                                Home
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
            <section id='contact'>
                <h1>Contact</h1>
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
                            errors.email = 'Invalid email';
                        }
                        if (values.name.length < 2) {
                            errors.name = 'First and last name should be at least 2 characters longi';
                        }
                        if (values.message.length < 50) {
                            errors.message = 'The message should be at least 50 characters long';
                        }
                        if (values.agree === false) {
                            errors.agree = 'Approval required';
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
                                        placeholder='your@email.com'
                                    />
                                    <ErrorMessage name="email" render={msg => <p className="alert">{msg}</p>}/>
                                </label>

                                <label className='label'>
                                    <h5>Full name</h5>
                                    <Field
                                        id="name"
                                        type="text"
                                        name="name"
                                        className='input'
                                        placeholder='Name and surname'
                                    />
                                    <ErrorMessage name="name" render={msg => <p className="alert">{msg}</p>}/>
                                </label>

                                <label className='label'>
                                    <h5>Phone number (optional)</h5>
                                    <Field
                                        id="number"
                                        type='number'
                                        name='number'
                                        className='input'
                                        placeholder='+61 123 45 67'
                                    />
                                </label>

                                <label className='label'>
                                    <h5>Message</h5>
                                    <Field
                                        as='textarea'
                                        id="message"
                                        type='text'
                                        name='message'
                                        className='input'
                                        placeholder='Message content'
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
                                        I consent to the processing of personal data and accept the {' '}
                                        <Link
                                            to='/privacy_policy'
                                            className='link'
                                            onClick={() => {
                                                window.scroll({
                                                    top: 0,
                                                    left: 0,
                                                    behavior: "smooth",
                                                });
                                            }}>regulations and privacy policy
                                        </Link>
                                        .
                                    </h5>
                                    <span className="checkmark"/>
                                    <ErrorMessage name="agree"
                                                  render={msg => <p className="alert alert_agree">{msg}</p>}/>
                                </label>

                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className='button'>
                                    Submit
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