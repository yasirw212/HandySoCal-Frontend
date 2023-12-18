import React from 'react'
import './contact.css'
import {FaPhoneAlt} from "react-icons/fa"
import {GrMail} from "react-icons/gr"
import {AiOutlineClose} from "react-icons/ai"
import emailjs from "@emailjs/browser"
import logoIcon from '../../assets/logo-icon.png'



const Contact = ({toggleForm}) => {
    const [clientData, setClientData] = React.useState({client_name: '', client_email: '', client_phone: '', message: ''})
    const [formSubmitted, setFormSubmitted] = React.useState(false)
    const [animation, setAnimation] = React.useState('')
    const form = React.useRef()


    const clear = () => {
        setClientData({client_name: '', client_email: '', client_phone: '', message: ''})
        setFormSubmitted(false)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qimqb68', 'template_r1xewxo', form.current, 'QUk80EdPABNDbOcof')
        .then((result) => {
            console.log(result.text)
            const formData = new FormData(document.getElementById('contact-form'))
            setFormSubmitted(true)
        }, (error) => {
            console.log(error.text);
        });

    }

    const handleChange = (e) => {
        setClientData({...clientData, [e.target.name]: e.target.value})
    }


  return (
        <div id='contact-container' >
            {   
            formSubmitted ?
            <div  className="contact-container">
                <button id='close' onClick={() => toggleForm(clear)} className='close-btn'><AiOutlineClose  /></button>
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
            
            <div className="contact-container">
                <button onClick={toggleForm} className='close-btn'><AiOutlineClose  /></button>
                <form ref={form} onSubmit={sendEmail} action="" id='contact-form' className="contact-form">
                    <h4>Get In Contact</h4>
                    <label htmlFor="client_name">Your name</label>
                    <input onChange={handleChange} id='client_name' name='client_name' type="text" required />
                    <label htmlFor="client_email">Email</label>
                    <input onChange={handleChange} type="text" name='client_email' id="client_email" required />
                    <label htmlFor="client_phone">Phone</label>
                    <input onChange={handleChange} type="text" id="client_phone" name='client_phone' required />
                    <label htmlFor="message">Enter a message</label>
                    <textarea onChange={handleChange} name="message" id="message" cols="30" rows="5" required></textarea>
                    <button className='form-btn' type="submit" >Submit</button>
                </form>
                <div className="divider">
                    <span></span>
                    <p>or</p>
                    <span></span>
                </div>
                <div className="contact-information">
                    <p><FaPhoneAlt style={{marginRight: '.25rem'}} />: (619)-306-5059</p>
                    <p><GrMail style={{marginRight: '.25rem'}} />: quinteroconstruction@gmail.com</p>
                    <img src={logoIcon} width={30} alt="" />
                </div>
            </div>
            }
        </div>    
  )
}

export default Contact