import React from 'react'
import Works from './Works'
import './projects.css'
const Projects = () => {
  return (
    <section className='work section'>
        <h2 className='section_title'>Portfolio</h2>
        <span className='section_subtitle'>
            Most Recent Works
        </span>

        <Works/>
    </section>
  )
}

export default Projects