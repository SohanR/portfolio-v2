import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const WorkItem = ({item}) => {
  const techList = () =>{
    
     const excludedTags = ['Full Stack', 'Frontend','Misc'];

     const shouldExclude = excludedTags.some(tag => item.tag.includes(tag));

     const list = shouldExclude ? item.tag.filter(tag => !excludedTags.includes(tag)) : item.tag;

     return list.join(', ')
  }
  return (
    <div className='work_card'>
        
        <img src={item.image} alt="demo" className='work_img'/>
        <h3 className='work_title'>{item.title}</h3>
        <p className='work_details'>{item.details}</p>
        <p className='work_tags'>Tech: {techList()}</p>
        
        <div className='work_buttons'>
        
            <a href={item.live} className='work_button' rel='noreferrer' target='_blank'>
                Demo <FaArrowRightLong  className='work_button-icon'/>
            </a>
            <a href={item.code} className='work_button' rel='noreferrer' target='_blank'>
                Code <FaArrowRightLong  className='work_button-icon'/>
            </a>            
        </div>
        
    </div>
  )
}

export default WorkItem
