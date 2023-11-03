import React from 'react'
import './template1.css'

const Template1 = (props, {name, description}) => {
  return (
    <div className='template-container'>
        <div className="template1-hero">
            <div className='hero-text'>
                <h2 className='template1-title'>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
        {props.children}
    </div>
  )
}

export default Template1