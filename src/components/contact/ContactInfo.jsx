import React from 'react';
import { FiGithub } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";

const ContactInfo = ({contactData}) => {
  return (
    <div className='contact_content'>
                <h3 className='contact_title'>{contactData.subheading}</h3>

                <div className='contact_info'>

                    <div className='contact_card'>
                        <MdOutlineEmail className='contact_card-icon' />

                        <h3 className='contact_card-title'>{contactData.email.title}</h3>
                        <span className='contact_card-data'>{contactData.email.link}</span>

                        <a href={'mailto:'+contactData.email.link} className='contact_button'>
                            {contactData.email.subtitle} <IoIosArrowRoundForward className='contact_button-icon' />
                        </a>

                    </div>

                    <div className='contact_card'>
                        <SlSocialLinkedin className='contact_card-icon' />

                        <h3 className='contact_card-title'>{contactData.linkedin.title}</h3>
                        <span className='contact_card-data'>{contactData.linkedin.link}</span>

                        <a href={'https://'+contactData.linkedin.link} className='contact_button' rel='noreferrer' target='_blank'>
                            {contactData.linkedin.subtitle} <IoIosArrowRoundForward className='contact_button-icon' />
                        </a>

                    </div>

                    <div className='contact_card'>
                        < FiGithub className='contact_card-icon'/>

                        <h3 className='contact_card-title'>{contactData.github.title}</h3>
                        <span className='contact_card-data'>{contactData.github.link}</span>

                        <a href={'https://'+contactData.github.link} className='contact_button' rel='noreferrer' target='_blank'>
                            {contactData.github.subtitle} <IoIosArrowRoundForward  className='contact_button-icon'/>
                        </a>

                    </div>

                </div>
            </div>
  )
}

export default ContactInfo