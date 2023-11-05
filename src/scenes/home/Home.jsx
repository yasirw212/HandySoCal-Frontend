import React from 'react'
import './home.css'
import dewalt from '../../assets/dewalt.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { getPopularServices } from '../../features/services/servicesSlice'
import { selectPopularServices } from '../../features/services/servicesSlice'
import ServiceCard from '../../components/serviceCard/ServiceCard'
import {GrStar} from "react-icons/gr"
import check from '../../assets/check-icon.png'
import phone from '../../assets/phone.png'

const Home = () => {
    const dispatch = useDispatch()
    const popularServices = useSelector(selectPopularServices)

    React.useEffect(() => {
        dispatch(getPopularServices())
        setTimeout(() => {
            console.log(popularServices)
        }, 1000)
    },[])

    const popularServicesHtml = popularServices.map(service =>{
        return (
            <ServiceCard id={service.services.id} category={service.categories.name.replace(/\s+/g, '')} name={service.services.name} img={service.services.photos} />
        )
    })


  return (
    <div className='home-container'>
        <div data-aos='fade-in' className="introduction" >
            <h3 className='heading'>Turning Houses into Homes with Care and Craftsmanship.</h3>
            <img src={dewalt} alt="" />
            <p className='introduction-body' >Our team of skilled and licensed handymen is here to handle any project, big or small, with precision and care. From plumbing and electrical repairs to carpentry, painting, and everything in between, we've got the expertise to get the job done right.</p>
        </div>
        <div  className='popular-services-container'>
            <h4 className='popular-heading'>Popular Services</h4>
            <div className="popular-services">
                {
                    popularServicesHtml
                }
                 
            </div>
        </div>
        <div className="guarantees-container">
                <div data-aos='fade-right' className="stars">
                    <GrStar className='star' />
                    <GrStar className='star' />
                    <GrStar className='star' />
                    <GrStar className='star' />
                    <GrStar className='star' />
                </div>
                <div data-aos='fade-right' className="guarantees-heading">
                    <h2>Your Satisfaction Guaranteed.</h2>
                </div>
                <div data-aos='fade-right' className="guarantees-body">
                    <ol className="guarantees">
                        <li className="guarantee">
                            <span className="guarantee-title">Quality Workmanship</span>: We promise to deliver skilled and professional workmanship on every project. Our team of experienced handymen is dedicated to ensuring that all repairs, installations, and improvements are completed to your satisfaction.
                        </li>
                        <li className="guarantee">
                            <span className="guarantee-title">Reliability</span>: We understand the importance of your time, and we pledge to be punctual and respectful of your schedule. We will arrive on time and complete the work efficiently, minimizing any disruption to your daily routine.
                        </li>
                        <li className="guarantee">
                            <span className="guarantee-title">Transparent Pricing</span>: We provide clear and transparent pricing before starting any project. You'll know the cost upfront, so there are no surprises or hidden fees.
                        </li>
                        <li className="guarantee">
                        <span className="guarantee-title">Licensed and Insured</span>: We are fully licensed and insured, providing you with peace of mind and protection in the unlikely event of any accidents or damages during the service.
                        </li>
                    </ol>
                    <img className='check-icon' src={check} alt="" />
                </div>
        </div>
        <div data-aos='fade-up' className="contact-section">
            <div className='contact-text'>
                <h2>Ready to embark on your next project? </h2>
                <p>Call: 555-555-5555</p>
            </div>
            <img className='phone-img' src={phone} alt="" />
        </div>
    </div>
  )
}

export default Home