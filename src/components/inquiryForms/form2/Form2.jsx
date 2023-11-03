import React from 'react'
import './form2.css'
import {FaPhoneAlt} from "react-icons/fa"
import {GrMail} from "react-icons/gr"
import {AiOutlineClose} from "react-icons/ai"
import emailjs from "@emailjs/browser"
import logoIcon from '../../../assets/logo-icon.png'

const Form2 = (props) => {
    const [submitted, setSubmitted] = React.useState(false)
    const [clientData, setClientData] = React.useState({client_name: '', client_email: '', client_phone: '', message: ''})
  
    const handleSubmit = (e) => {
        e.preventDefault()

        setSubmitted(true)
    }

    const clear = () => {
    setClientData({client_name: '', client_email: '', client_phone: '', message: ''})
    setSubmitted(false)
    }


    const handleChange = (e) => {
    setClientData({...clientData, [e.target.name]: e.target.value})
    }

  return (
    submitted  ?
    <div  className="contact-container">
    <button id='close' onClick={clear} className='close-btn'><AiOutlineClose  /></button>
    <h3 className='thankyou-heading' >Thank You for Reaching Out!</h3>
    <br />
    <div className="thankyou-body">
        <p>Dear {clientData.client_name},</p>
        <br />
        <p>Thank you for choosing Handy SoCal for your home/office improvement needs. We appreciate your interest in our services and the trust you've placed in us.</p>
        <br />
        <p>We have received your message and our team is already hard at work, reviewing your request and preparing to assist you promptly.</p>
        <br />
        <p>We understand that every project is unique, and we're committed to providing you with personalized solutions that meet your specific needs. One of our team members will reach out to you shortly to discuss the details and schedule a convenient time to move forward.</p>
        <br />
        <p>Once again, thank you for choosing Handy SoCal. We look forward to working with you and turning your vision into reality.</p>
        <br />
        <p>Warm regards,</p>
        <br />
        <p>The Handy SoCal team</p>
        <br />
        <img src={logoIcon} width={30} alt="" />
    </div>
</div>
    :
    <form onSubmit={handleSubmit} className='form2' action="">
        <div>
            <label htmlFor="name">Name</label>
            <input onChange={handleChange} type="text" />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} type="email" />
        </div>
        <div>
            <label htmlFor="email">Phone</label>
            <input onChange={handleChange} type="phone" />
        </div>
        <div>
            <label htmlFor="zipcode">Zip Code</label>
            <input onChange={handleChange} type="text" />
        </div>
        {props.children}
        <button >Get In Touch</button>
    </form>
  )
}

export default Form2