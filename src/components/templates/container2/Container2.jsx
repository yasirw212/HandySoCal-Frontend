import React from 'react'
import './container2.css'

const Container2 = (props) => {
  return (
    <div data-aos={props.aos} className='container2 features'>
        {props.children}
    </div>
  )
}

export default Container2