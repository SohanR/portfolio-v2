import React from 'react';
import { SlCalender } from "react-icons/sl";
import { experience } from './../../data';
import './experience.css';

const Experience = () => {

    const isEven = (n) =>{
        if(n % 2 === 0){
            return true;
        } 
        else return false
        
    }

  return (
    <section className='qualification section' id='portfolio'>
        <h2 className='section_title'>{experience.title}</h2>
        <span className='section_subtitle'>{experience.subtitle}</span>

        <div className='qualification_container container'>
           

            <div className='qualification_sections'>
                <div className='qualification_content'>

                    {/* map will here */}

                    {
                        experience.data.map((d, i) =>(

                            <div key={i} className='qualification_data'>
                                {!isEven(i) ? (                                                           
                                    <>
                                        <div></div>

                                        <div>
                                            <span className='qualification_rounder'></span>
                                            <span className='qualification_line'></span>
                                        </div>                                                           
                                    </>
                                                          
                                ) :" "}
                            <div>
                                <h3 className='qualification_title'>{d.name}</h3>
                                <span className='qualification_subtitle'>{d.role}</span>  
    
                                <div className='qualification_calendar'>
                                    <SlCalender /> {d.date}
                                </div>
                            </div>

                            { isEven(i) ? (

                                <div>
                                    <span className='qualification_rounder'></span>
                                    <span className='qualification_line'></span>
                                </div>

                            ) : ""}
    

                        </div>
                        ))
                    }








                </div>
            </div>




        </div>

        
    </section>
  )
}

export default Experience