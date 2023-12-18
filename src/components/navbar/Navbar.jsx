import React from 'react'
import { Link } from 'react-router-dom'
import brandLogo from '../../assets/handy-socal-logo.jpg'
import './navbar.css' 
import {AiOutlineRight} from "react-icons/ai"




const Navbar = ({toggleForm}) => {
    const [active, setActive] = React.useState(false)
    const [mobile, setMobile] = React.useState(false)
    const [exit, setExit] = React.useState('')
    const [entrance, setEntrance] = React.useState('')

    React.useEffect(() => {
        if(window.innerWidth < 900){
            setMobile(true)
        }

        if(window.innerWidth < 501){
            setExit('slide-out-top')
            setEntrance('slide-in-top')
        } else {
            setEntrance ('scale-in-ver-center')
            setExit('scale-out-center')
        }
    }, [])

     window.addEventListener('resize', () => {
        if(window.innerWidth > 900){
            document.querySelector(".navbar").classList.remove(exit)
        }

        if(window.innerWidth < 900) {
            setActive(false)
            document.querySelectorAll('.menu-bar').forEach(elem => elem.classList.remove('isactive'))
            document.querySelector(".navbar").classList.add(exit)
            
        }
        setMobile(window.innerWidth < 900 ? true : false)
    })

    const toggle = () => {
        document.querySelectorAll(".menu-bar").forEach(elem => elem.classList.toggle('isactive'))
        if(!active){
            document.getElementById('navbar').classList.remove('hidden')
            document.getElementById("navbar").classList.remove(exit)
            document.getElementById("navbar").classList.add(entrance)
            
            setActive(true)
        }

        if(active && window.innerWidth <= 900){
            document.getElementById("navbar").classList.remove(entrance)
            document.getElementById("navbar").classList.add(exit)
            setActive(false)
        }
    }

  return (
    <div className='navbar-container'>
        <Link to={'/'} className='navbar-brand'>
            <img src={brandLogo} alt="" />
        </Link>
        
        <div id='menu' onClick={toggle} className="navbar-menu">
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
        </div>

        <div id='navbar' className="navbar hidden ">
            <div className="navbar-links">
                <Link onClick={toggle} className='navbar-link'  to={'/services'}>
                    <p>Services</p>
                    
                    {
                        mobile ?<div><AiOutlineRight className='link-icon ' /></div> : ''
                    }
                </Link>
                <Link onClick={toggle} className='navbar-link' to={'/about'}>
                    <p>About</p>
                    {
                        mobile ? <AiOutlineRight className='link-icon ' /> : ''
                    }
                </Link>
                <button id='contact' className='contact-btn' onClick={toggleForm}>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar