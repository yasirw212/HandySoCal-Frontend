import React from 'react'
import './about.css'
import california from '../../assets/cali.png'
import {GiBlackBook} from "react-icons/gi"
import { RiTeamLine, RiCommunityLine} from "react-icons/ri"
import {MdOutlineMiscellaneousServices} from "react-icons/md"

const About = () => {
  return (
    <div className='about-container'>
        <h2 className='about-header'>Quintero Construction - Your Trusted Construction/Repair Services in Southern California</h2>
        <div className="about-introduction">
                <h4>Welcome to Quintero Construction, Southern California's premier destination for top-notch handyman services. With a strong commitment to excellence and a dedication to our local community, we have been serving the residents of Southern California for over 30 years. As a locally owned and operated business, we take pride in our contribution to maintaining the beauty and functionality of homes and businesses across the diverse landscapes of Southern California.</h4>
            <img width={125}  src={california} alt="" />
        </div>
        <div className="about-body">
            <div className="values">
                <div className="">
                    <h2>Our Values</h2>
                    <h3 data-aos={'fade-up'} >At Quintero Construction, we are guided by a set of core values that define our work and interactions:</h3>
                    <ul data-aos={'fade-up'}  className="values-items">
                        <li className="values-item"><span>Excellence</span>: We strive for excellence in everything we do, from the quality of our work to the professionalism of our services.</li>
                        <li className="values-item"><span>Integrity:</span> Honesty and transparency are at the heart of our business. We believe in providing accurate information and fair pricing for all our services.</li>
                        <li className="values-item"><span>Customer Satisfaction:</span> Your satisfaction is our priority. We are dedicated to delivering results that not only meet but exceed your expectations.</li>
                        <li className="values-item"><span>Community Commitment:</span> As a part of the Southern California community, we are committed to contributing positively to the growth and development of the region.</li>
                    </ul>
                </div>
            </div>
            <div data-aos={'fade-up'} className="features">
                <div className="feature">
                    <h3 className="feature-heading" >Our Story <GiBlackBook /> </h3>
                    <div className="feature-bar"></div>
                    <p className="feature-body">Established in the early 1990s, Quintero Construction has been a cornerstone of Southern California's home improvement scene for over 30 years. Our journey began with a vision – a vision to provide comprehensive handyman services that elevate the quality of life for our fellow residents. We've since evolved and grown, but our core values of quality, integrity, and customer satisfaction remain at the heart of everything we do.</p>
                </div>
                <div className="feature">
                    <h3 className="feature-heading">Our Team <RiTeamLine /> </h3>
                    <div className="feature-bar"></div>
                    <p className="feature-body">Our team is a collection of skilled and experienced professionals who share a common goal: delivering excellence. With a combined experience of over 30 years, our handymen are at the forefront of our operation. Each member is a specialist in their field, from plumbing and electrical work to carpentry, painting, and more. We bring a wealth of knowledge, precision, and care to every project.</p>
                </div>
                <div className="feature">
                    <h3 className="feature-heading">Our Services <MdOutlineMiscellaneousServices /> </h3>
                    <div className="feature-bar"></div>
                    <p className="feature-body">What sets us apart is our comprehensive range of handyman services. We offer a wide spectrum of solutions to meet the diverse needs of Southern California residents and businesses. Whether it's a minor repair, a major renovation, or ongoing maintenance, our versatility and skill ensure that every project is handled with the utmost care and commitment to quality workmanship.</p>
                </div>
                <div className="feature">
                    <h3 className="feature-heading">Our Community<RiCommunityLine /> </h3>
                    <div className="feature-bar"></div>
                    <p className="feature-body">We are deeply connected to Southern California, and we consider ourselves an integral part of the local community. We believe in the strength of vibrant communities built on trust, integrity, and mutual support.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About