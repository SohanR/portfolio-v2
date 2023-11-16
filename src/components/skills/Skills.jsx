import React from 'react'
import { skills } from './../../data'
import Backend from './Backend'
import Frontend from './Frontend'
import './skills.css'

const Skills = () => {

    const frontendData = skills.frontend;
    const backendData = skills.backend;

  return (
    <section className='skills section' id='skills'>
        <h2 className='section_title'>{skills.title}</h2>
        <span className='section_subtitle'>{skills.subtitle}</span>

        <div className='skills_container container grid'>
            <Frontend data={frontendData} />
            <Backend data={backendData} />
        </div>
    </section>
  )
}

export default Skills