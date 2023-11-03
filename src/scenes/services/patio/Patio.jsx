import React from 'react'
import './patio.css'
import Hero from '../../../components/templates/hero/Hero'
import Form1 from '../../../components/inquiryForms/form1/Form1'
import Container1 from '../../../components/templates/container1/container1'
import Process1 from '../../../components/process1/Process1'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'
import patioImg from '../../../assets/patio.jpg'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import materialImg from '../../../assets/material.jpg'
import constructionImg from '../../../assets/construction.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import completeImg from '../../../assets/complete.jpg'

const Patio = () => {
  return (
    <div className='display1-container'>
        <Hero img={patioImg} title={'Patio Build/Installation.'} />
        <div className="display1-body">
            <div className="patio-intro">
                <h2>Why Choose Us for Your Patio Project?</h2>
                <p>We are your trusted partner in creating outdoor spaces that elevate your lifestyle. Our patio build and installation services are designed to enhance your property, offering a perfect blend of aesthetics and functionality. Explore the possibilities of a beautiful and inviting outdoor area with our comprehensive services:</p>
            </div>
            <Form1 />
            <Container1 aos={'fade-up'}>
                <h3>Our Patio Services:</h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>Patio Design and Planning:</span> Collaborate with our experts to design a patio that suits your style, layout, and functional requirements.</li>
                    <li className="container1-item"><span>Patio Construction:</span> Build a brand-new patio or extend an existing one to create a space for outdoor living and entertainment.</li>
                    <li className="container1-item"><span>Paver Installation:</span> Choose from a variety of paver styles, including concrete, brick, and natural stone, to create a stunning and durable surface.</li>
                    <li className="container1-item"><span>Pergolas and Shade Structures:</span> Enhance your patio with shade structures, pergolas, and trellises that provide comfort and style.</li>
                    <li className="container1-item"><span>Outdoor Lighting:</span> Illuminate your patio with a variety of lighting options, including string lights, sconces, and spotlights.</li>
                    <li className="container1-item"><span>Fire Features:</span> Add a cozy and inviting atmosphere with fire pits, fireplaces, and fire tables.</li>
                    <li className="container1-item"><span>Seating and Furniture:</span> Select comfortable and stylish outdoor furniture to complete your patio space.</li>
                </ul>
            </Container1>
        </div>
        <Process1>
            <ProcessCard img={consultationImg} aos={'fade-right'}>
                <h4>Consultation and Design: Defining Your Vision</h4>
                <p>We begin with a consultation to understand your vision for your patio project. During this phase, we:</p>
                <ul>
                    <li>Discuss your goals for the outdoor space, such as entertainment, relaxation, or dining.</li>
                    <li>Evaluate the layout of your outdoor area to determine the best patio design and placement.</li>
                    <li>Provide a range of patio design options, material recommendations, and potential features.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={bluePrintImg} aos={'fade-left'}>
                <h4>Customized Plan and Material Selection: Tailoring the Solution</h4>
                <p>Based on our consultation and design phase, we create a customized plan for your patio project. This includes:</p>
                <ul>
                    <li>Selecting the appropriate materials that align with your vision and outdoor needs.</li>
                    <li>Determining the scope of work, whether it involves new builds, repairs, or upgrades.</li>
                    <li>Addressing any special requests or design considerations you may have for your patio.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={constructionImg} aos={'fade-left'}>
                <h4> Patio Construction: Precision and Craftsmanship</h4>
                <p>Our skilled craftsmen work diligently to complete your patio project. This includes:</p>
                <ul>
                    <li>Constructing the patio with precision, ensuring it is level, secure, and visually appealing.</li>
                    <li>Installing any additional features or structures like outdoor kitchens, fire pits, or retaining walls.</li>
                    <li>Ensuring that the patio meets your design and functional objectives.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={inspectImg} aos={'fade-right'}>
                <h4>Final Inspection: Ensuring Excellence</h4>
                <p>Before we consider the project complete, our team conducts a comprehensive final inspection. This step includes:</p>
                <ul>
                    <li>Verifying that the patio has been built to our high standards, including durability and aesthetics.</li>
                    <li>Double-checking that the selected materials meet your specific design and functional requirements.</li>
                    <li>Ensuring that additional features like fire pits and kitchens operate correctly.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={walkThroughImg} aos={'fade-left'}>
                <h4>Client Walkthrough: Your Satisfaction Matters</h4>
                <p>We invite you to join us for a client walkthrough, during which you can inspect the patio. This is your opportunity to:</p>
                <ul>
                    <li>Ensure the patio meets your expectations, vision, and functionality requirements.</li>
                    <li>Ask any questions or request further adjustments if necessary.</li>
                    <li>Confirm your satisfaction with the completed patio project.</li>
                </ul>
            </ProcessCard>
        </Process1>
        <div data-aos='fade-up' style={{position: 'relative', marginBottom: '20vh'}} className="benefits">
            <div className="benefits">
                <h3>Benefits of Professional Patio Services</h3>
                <ul className="benefits-items">
                    <li className="benefits-item"><span>Enhanced Outdoor Living:</span> A well-designed and well-built patio expands your outdoor living space.</li>
                    <li className="benefits-items"><span>Increased Property Value:</span> A quality patio can significantly increase your property's value.</li>
                    <li className="benefits-items"><span>Improved Aesthetics:</span> Custom features and material selection can transform your outdoor space.</li>
                    <li className="benefits-items"><span>Functionality: </span> Patios are versatile and can be customized for various uses.</li>
                    <li className="benefits-items"><span>Entertainment Space:</span> An outdoor patio is the perfect space for entertaining family and friends.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Patio