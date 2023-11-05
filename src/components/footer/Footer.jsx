import React from 'react'
import './footer.css'
import {GrMail} from "react-icons/gr"
import logo from '../../assets/footer-logo.png'

const Footer = ({toggle}) => {
  return (
    <div className="footer-container">
        <div className="trademark">
            <p>© 2023 Handy SoCal. All rights reserved.</p>
        </div>
        <div onClick={toggle} className="footer-icons">
            <GrMail />
        </div>
        <div className="footer-logo">
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Footer