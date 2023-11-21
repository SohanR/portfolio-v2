import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { contactData } from './../../data';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './contact.css';

import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
            'service_floapca', 
            'template_619ha4c', 
            form.current, 
            '1lddeiOY-rFCWLv94'
        )
        .then((result) => {
            toast.success('Email sent, Thank you!');
        }, (error) => {
            toast.error('Something went wrong,try again!');
        });

        e.target.reset();
    };
  
  return (
    <section className='contact section' id='contact'>
        <h2 className='section_title'>{contactData.title}</h2>
        <span className='section_subtitle'>{contactData.subtitle}</span>

        <div className='contact_container container grid'>
            <ContactInfo contactData={contactData}/>
            <ContactForm contactData={contactData} sendEmail={sendEmail} form={form}/> 
        </div>

        <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="dark"
        />
    </section>
  )
}

export default Contact