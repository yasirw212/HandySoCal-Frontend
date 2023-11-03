import React from 'react'
import './form1.css'
import {FaPhoneAlt} from "react-icons/fa"
import {GrMail} from "react-icons/gr"
import {AiOutlineClose} from "react-icons/ai"
import emailjs from "@emailjs/browser"
import logoIcon from '../../../assets/logo-icon.png'

const Form1 = (props) => {
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

    // {
      submitted ?
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
            </div> :

            <form onSubmit={handleSubmit} data-aos={props.aos} className='form1' id='form1' action="">
    <h3>Take the first step</h3>
    <label htmlFor="name">Your name </label> 
    <input onChange={handleChange} id='name' name='name' type="text" />
    <br />
    <label htmlFor="email">Email </label>
    <input onChange={handleChange} id='email' name='email' type="email" />
    <br />
    <label htmlFor="phone">Phone</label>
    <input onChange={handleChange} id='phone' name='phone' type="text" />
    <br />
    <label htmlFor="zipcode">Zip Code</label>
    <input onChange={handleChange} id='zipcode' name='zipcode' type="text" />
    <br />
    {props.children}
    <br />
    <textarea onChange={handleChange} name="" id="" cols="30" rows="5" placeholder='Details about the job...'></textarea>
    <br />
    <button className='form1-btn' type='submit'>Get In Touch</button>
</form>
          
    // }
    
  )
}

export default Form1