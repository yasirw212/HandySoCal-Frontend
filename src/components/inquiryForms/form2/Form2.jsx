import React from 'react'
import './form2.css'
import {FaPhoneAlt} from "react-icons/fa"
import {GrMail} from "react-icons/gr"
import {AiOutlineClose} from "react-icons/ai"
import emailjs from "@emailjs/browser"
import logoIcon from '../../../assets/logo-icon.png'

const Form2 = ({children, category,  name}) => {
    const [submitted, setSubmitted] = React.useState(false)
    const [clientData, setClientData] = React.useState({client_name: '', client_email: '', client_phone: '', message: ''})
    const form = React.useRef()
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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qimqb68', 'template_9f4rl6c', form.current, 'QUk80EdPABNDbOcof')
        .then((result) => {
            console.log(result.text)
            const formData = new FormData(document.getElementById('form2'))
            setSubmitted(true)
        }, (error) => {
            console.log(error.text);
        });

    }

  return (
    submitted  ?
    <div  className="contact-container contact-container2">
        <button id='close' onClick={clear} className='close-btn'><AiOutlineClose  /></button>
        <h3 className='thankyou-heading' >Thank You for Reaching Out!</h3>
        <div className="thankyou-body thankyou-body2">
            <p>Dear {clientData.client_name},</p>
            <p>Thank you for choosing Handy SoCal for your home/office improvement needs. We appreciate your interest in our services and the trust you've placed in us.</p>
            <p>We have received your message and our team is already hard at work, reviewing your request and preparing to assist you promptly.</p>
            <p>We understand that every project is unique, and we're committed to providing you with personalized solutions that meet your specific needs. One of our team members will reach out to you shortly to discuss the details and schedule a convenient time to move forward.</p>
            <p>Once again, thank you for choosing Handy SoCal. We look forward to working with you and turning your vision into reality.</p>
            <p>Warm regards,</p>
            <p>The Handy SoCal team</p>
            <img src={logoIcon} width={30} alt="" />
        </div>
    </div>
    :
    <form ref={form}  onSubmit={sendEmail} id={'form2'} className='form2' action="">
        <input name='service_name' type="text" hidden value={name}  />
        <input name='service_category' type="text" hidden value={category}  />
        <div>
            <label htmlFor="client_name">Name</label>
            <input required onChange={handleChange} name={'client_name'} type="text" />
        </div>
        <div>
            <label htmlFor="client_email">Email</label>
            <input required onChange={handleChange} name={'client_email'} type="email" />
        </div>
        <div>
            <label htmlFor="client_phone">Phone</label>
            <input required onChange={handleChange} name={'client_phone'} type="phone" />
        </div>
        <div>
            <label htmlFor="client_zipcode">Zip Code</label>
            <input required onChange={handleChange} name={'client_zipcode'} type="text" />
        </div>
        {children}
            <textarea style={{gridColumn: '1 / 4'}} name="message" id="" cols="30" rows="3" placeholder='Details about the job.'></textarea>
        <button type='submit'>Get In Touch</button>
    </form>
  )
}

export default Form2