import React from 'react'
import './servicecard.css'
import { Link } from 'react-router-dom'

const ServiceCard = ({service, category, id, name, img}) => {
  return (
    <Link to={`/services/${category}/${id}`}>
        <div data-aos='fade-up' className="service-card">
            <div className="img-container">
              <img  src={img} alt="" />
            </div>
            <div className="text">
                <p className='title'>{name}</p>
            </div>
        </div>
    </Link>
    
  )
}

export default ServiceCard