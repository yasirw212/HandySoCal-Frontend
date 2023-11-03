import React from 'react'
import './process.css'
import consultationImg from '../../assets/consultation.jpg'
import bluePrintImg from '../../assets/blueprint.jpg'
import materialImg from '../../assets/material.jpg'
import constructionImg from '../../assets/construction.jpg'
import inspectImg from '../../assets/inspect.jpg'
import walkThroughImg from '../../assets/walkthrough.jpg'
import completeImg from '../../assets/complete.jpg'
import ProcessCard from './processCard/ProcessCard'

const Process1 = (props) => {
  return (

    <div className='process'>
        <h2 className='process-heading'>How This Works</h2>
        <div className="steps">
            {props.children}
        </div> 
    </div>
  )
}

export default Process1