import React from 'react'
import './plumbing.css'
import Hero from '../../../components/templates/hero/Hero'
import Form1 from '../../../components/inquiryForms/form1/Form1'
import Container1 from '../../../components/templates/container1/container1'
import Process1 from '../../../components/process1/Process1'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'
import plumbingImg from '../../../assets/plumbing.jpg'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import materialImg from '../../../assets/material.jpg'
import constructionImg from '../../../assets/plumbingWork.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import completeImg from '../../../assets/complete.jpg'

const Plumbing = () => {
  return (
    <div className='display1-container'>
        <Hero img={plumbingImg} title={'Plumbing.'} />
        <div className="display1-body">
            <div className="plumbing-intro">
                <h2>Why Choose Us for Your Plumbing Needs?</h2>
                <br />
                <p>We provide a full spectrum of plumbing services to ensure the functionality and safety of your home or business. With our experienced plumbers and commitment to quality, we offer solutions that address plumbing issues, upgrades, and installations. Explore our comprehensive plumbing services.</p>
            </div>
            <Form1 name={'General Services'} category={'Plumbing'} />
            <Container1 aos={'fade-up'}>
                <h3>Plumbing Services:</h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>General Plumbing Repairs:</span> Quickly resolve plumbing issues such as leaks, clogs, and pipe repairs.</li>
                    <li className="container1-item"><span>Fixture Installation and Repairs:</span> Install and repair faucets, sinks, toilets, showerheads, and other fixtures.</li>
                    <li className="container1-item"><span>Drain Cleaning:</span> Remove blockages from drains and maintain free-flowing plumbing.</li>
                    <li className="container1-item"><span>Faucet Installation and Repairs:</span> Install new faucets or repair and upgrade existing ones for improved functionality and aesthetics.</li>
                    <li className="container1-item"><span>Sink Replacement:</span> Replace sinks and vanities for a fresh look and enhanced utility.</li>
                    <li className="container1-item"><span>Toilet Replacement:</span> Install new toilets for improved water efficiency and performance.</li>
                    <li className="container1-item"><span>Shower and Tub Installation and Repairs:</span> Install or repair showers, tubs, and related plumbing fixtures.</li>
                    <li className="container1-item"><span>Pipe Installation and Repairs: </span> Install, repair, or replace pipes to maintain the integrity of your plumbing system.</li>
                </ul>
            </Container1>
        </div>
        <Process1>
            <ProcessCard img={consultationImg} aos={'fade-right'} >
                    <h4>Consultation and Assessment: Defining Your Plumbing Needs</h4>
                    <p>We begin with a consultation to understand your plumbing needs. During this phase, we:</p>
                    <ul>
                        <li>Discuss your plumbing concerns, whether it's a repair, installation, or maintenance.</li>
                        <li>Assess your property's plumbing systems to identify issues and propose solutions.</li>
                        <li>Provide options for fixtures, materials, and any necessary upgrades.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={bluePrintImg} aos={'fade-left'} >
                    <h4>Customized Plan and Material Selection: Tailoring the Solution</h4>
                    <p>Based on our consultation and assessment, we create a customized plan for your plumbing project. This includes:</p>
                    <ul>
                        <li>Selecting the appropriate materials, fixtures, and components that meet your specific requirements.</li>
                        <li>Determining the scope of work, whether it involves repairs, installations, or upgrades.</li>
                        <li>Addressing any special requests or design considerations you may have for your plumbing project.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={constructionImg} aos={'fade-right'}>
                    <h4>Precise Installation, Repair, or Maintenance: Meticulous and Comprehensive</h4>
                    <p>Our skilled plumbers work diligently to complete your plumbing project. This includes:</p>
                    <ul>
                        <li>Installing new fixtures or components with precision and ensuring they function correctly.</li>
                        <li>Conducting repairs or maintenance with expert techniques to restore or enhance plumbing systems.</li>
                        <li>Ensuring that plumbing systems meet your design and functional objectives.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={inspectImg} aos={'fade-left'}>
                    <h4> Final Inspection: Ensuring Excellence</h4>
                    <p>Before considering the project complete, we conduct a thorough quality inspection. This includes:</p>
                    <ul>
                        <li>Verifying that the plumbing has been installed, repaired, or maintained to our high standards, including functionality and safety.</li>
                        <li>Double-checking that the selected materials and fixtures meet your specific design and functional requirements.</li>
                        <li>Ensuring that all plumbing components operate correctly.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={walkThroughImg} aos={'fade-right'} >
                <h4>Client Walkthrough: Your Satisfaction is Our Priority</h4>
                <p>We invite you to join us for a client walkthrough, during which you can inspect the completed plumbing project and ensure it meets your expectations. This is your opportunity to:</p>
                <ul>
                    <li>Verify that the plumbing aligns with the agreed-upon design and meets your specific design and functionality requirements.</li>
                    <li>Ask any questions or request adjustments if necessary.</li>
                    <li>Confirm your satisfaction with the functionality, durability, and aesthetics of your plumbing systems.</li>
                </ul>
            </ProcessCard>
        </Process1>
        <div  data-aos='fade-up'  style={{position: 'relative', marginBottom: '20vh'}} className="benefits">
            <div className="benefits">
                <h3>Benefits of Professional Plumbing Services</h3>
                <ul className="benefits-items">
                    <li className="benefits-item"><span>Preventive Measures:</span> Professional repair can prevent future issues and costly repairs.</li>
                    <li className="benefits-item"><span>Prevent Property Damage:</span> Timely repairs prevent water damage to your property.</li>
                    <li className="benefits-item"><span>Improved Drainage:</span> Properly functioning plumbing reduces water wastage.</li>
                    <li className="benefits-item"><span>Health and Safety:</span> Plumbing issues can be unhygienic; our repairs restore a healthy environment.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Plumbing