import React from 'react';
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

const Social = ({profile}) => {
  return (
    <div className='home_social'>
        <a href={profile.github} className='home_social-icon' rel='noreferrer' target='_blank'>
            <FiGithub/>
        </a>

        <a href={profile.linkedin} className='home_social-icon' target='_blank' rel='noreferrer'>
            <SlSocialLinkedin/>
        </a>
    </div>
  )
}

export default Social