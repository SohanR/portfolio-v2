import React, { useState } from 'react';
import { projectData, projectNav } from './../../data';
import WorkItem from './WorkItem';
const Works = () => {

    const [active, setActive] = useState(0);
    const [filteredProjects, setFilteredProjects] = useState(projectData);

    const filterProjectsByTags = (tag) => {
        const filteredArray = projectData.filter((project) => project.tag.includes(tag));


        setFilteredProjects(tag === 'all' ? projectData : filteredArray)

        

    }


    const handleClick = (index, item) => {
         setActive(index === active ? active : index )
         
         filterProjectsByTags(item.name)

        //  console.log(item.name);
    }
  return (
    <div>
        <div className='work_filters'>
            {
                projectNav.map((item, i) => (
                    <span 
                        onClick={() => handleClick(i,item)}                       
                        className={i === active ? 'work_item work_item_active ' : 'work_item'} 
                        key={i}
                    >
                        {
                            item.name.toUpperCase()
                        }
                    </span>
                ))
            }
        </div>

        {/* {console.log(filteredProjects)} */}

        <div className='work_container container grid'>
            {
                filteredProjects.length === 0 ? (
                    <h1>Working on it, Coming Soon</h1>
                ) :(
                filteredProjects.map((item, i) => (
                    <WorkItem key={i} item={item}/>
                )))
            }
        </div>
 
    </div>

  )
}

export default Works