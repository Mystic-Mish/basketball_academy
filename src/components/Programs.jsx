import React from 'react'
import "./style.css"
import {programsData} from '../data/programsData'

const Programs = () => {
  return (
    <div className="programs" id="programs">
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className="programs-categories">
            {programsData.map((program)=> (
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span> <span>{program.details}</span>
                    <div><span>Join Now</span></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs