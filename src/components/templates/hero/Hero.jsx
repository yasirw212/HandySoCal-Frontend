import React from 'react'
import './hero.css'

const Hero = ({img, title}) => {
  return (
    <div style={{backgroundImage: `url(${img})`}} className="hero-template">
        <h1 className='hero-heading'>{title}</h1>
    </div>
  )
}

export default Hero