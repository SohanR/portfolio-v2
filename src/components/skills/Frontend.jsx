import React from 'react';
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Frontend = ({data}) => {
  return (
    <div className='skills_content'>
        <h3 className='skills_title'>{data.title}</h3>

        <div className='skills_box'>
            <div className='skills_group'>

                {/* mapping */}

                {
                    data.skills.map((skill) =>(
                        <div className='skills_data'>
                        <RiVerifiedBadgeFill />
    
                        <div>
                            <h3 className='skills_name'>{skill}</h3>                        
                        </div>
                    </div>
                    ) )
                }


            </div>
        </div>
    </div>
  )
}

export default Frontend