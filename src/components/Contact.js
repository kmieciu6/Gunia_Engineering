import React from 'react';
import {ErrorMessage, Field, Formik} from 'formik';
import {useForm} from '@formspree/react';
import thanks from '../assets/logo.svg'
import {Link} from "react-router-dom";

function Contact() {
    let errEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    const [state, handleSubmit] = useForm("mgebvgzr");
    if (state.succeeded) {
        return (
            <section id='contact'>
                <div className='thanks'>
                    <h1>
                        Thank you for contacting us. <br/>
                        We'll be in touch soon !
                    </h1>
                    <img src={thanks} alt=""/>
                </div>
            </section>
        )
    }
    return (
        <section id='contact_form'>
            <h2>Contact</h2>
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
                        errors.name = 'First and last name should be at least 2 characters long';
                    }
                    if (values.number !== '' && !/^\+?\d+$/.test(values.number)) {
                        errors.number = 'Please enter numbers only or leave it blank';
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
                        <form className='form' onSubmit={handleSubmit}>
                            <label>
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

                            <label>
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

                            <label>
                                <h5>Phone number (optional)</h5>
                                <Field
                                    id="number"
                                    type='text'
                                    name='number'
                                    className='input'
                                    placeholder='+61 123 45 67'
                                />
                                <ErrorMessage name="number" render={msg => <p className="alert">{msg}</p>}/>
                            </label>

                            <label>
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

                            <label className="checkbox-label">
                                <Field
                                    id="agree"
                                    type='checkbox'
                                    name='agree'
                                    className='checkbox_agree'
                                />
                                <span className="checkmark"/>
                                <p>
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
                                </p>
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
    );
}

export default Contact;