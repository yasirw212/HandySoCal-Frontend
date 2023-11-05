import React from 'react'
import './form1.css'
import {FaPhoneAlt} from "react-icons/fa"
import {GrMail} from "react-icons/gr"
import {AiOutlineClose} from "react-icons/ai"
import emailjs from "@emailjs/browser"
import logoIcon from '../../../assets/logo-icon.png'

const Form1 = ({children, aos, name, category}) => {
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
      const formData = new FormData(document.getElementById('form1'))
      setSubmitted(true)
  }, (error) => {
      console.log(error.text);
  });

}

  return (
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

            <form ref={form}  onSubmit={sendEmail} data-aos={aos} className='form1' id='form1' action="">
                <h3>Take the first step</h3>
                <input name='service_name' hidden value={name} type="text" />
                <input required name='service_category' hidden value={category} type="text" />
                <label htmlFor="client_name">Your name </label> 
                <input required onChange={handleChange} id='name' name='client_name' type="text" />
                <br />
                <label htmlFor="client_email">Email </label>
                <input required onChange={handleChange} id='email' name='client_email' type="email" />
                <br />
                <label htmlFor="client_phone">Phone</label>
                <input required onChange={handleChange} id='phone' name='client_phone' type="text" />
                <br />
                <label htmlFor="zipcode">Zip Code</label>
                <input required onChange={handleChange} id='zipcode' name='client_zipcode' type="text" />
                <br />
                {children}
                <br />
                <textarea required onChange={handleChange} name="message" id="" cols="30" rows="5" placeholder='Details about the job...'></textarea>
                <br />
                <button className='form1-btn' type='submit'>Get In Touch</button>
            </form>
  )
}

export default Form1