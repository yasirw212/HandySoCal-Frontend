import React from 'react'
import './hero2.css'

const Hero2 = (props) => {
  return (
    <div className='hero2-container'>
        <div className="hero2-img" style={{backgroundImage: `url(${props.img})`}}></div>
    </div>
  )
}

export default Hero2