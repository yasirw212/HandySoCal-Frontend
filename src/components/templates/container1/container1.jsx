import React from 'react'
import './container1.css'

const Container1 = (props) => {
  return (
    <div data-aos={props.aos} className="container1-services">
        {props.children}
    </div>
  )
}

export default Container1