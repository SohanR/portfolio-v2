import React from 'react';
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

const Social = () => {
  return (
    <div className='home_social'>
        <a href="https://github.com/SohanR" className='home_social-icon' rel='noreferrer' target='_blank'>
            <FiGithub/>
        </a>

        <a href="https://www.linkedin.com/in/mizanurrahman/" className='home_social-icon' target='_blank' rel='noreferrer'>
            <SlSocialLinkedin/>
        </a>
    </div>
  )
}

export default Social