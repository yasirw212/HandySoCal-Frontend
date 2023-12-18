import React from 'react'
import Hero from '../../../components/templates/hero/Hero'
import renovationImg from '../../../assets/renovation.jpg'
import Container1 from '../../../components/templates/container1/container1'
import Form1 from '../../../components/inquiryForms/form1/Form1'
import Process1 from '../../../components/process1/Process1'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import materialImg from '../../../assets/material.jpg'
import constructionImg from '../../../assets/construction.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import completeImg from '../../../assets/complete.jpg'

const Renovation = () => {
  return (
    <div className='display1-container'>
        <Hero img={renovationImg} title={'Renovation.'} />
        <div className="display1-body">
            <div>
                <h2>Renovation Services</h2>
                <br />
                <p>At Quintero Construction, we specialize in bringing new life to your space through comprehensive renovation services. Our goal is to transform your home or business, and we take pride in providing tailored solutions that cater to your unique needs. Whether it's a small makeover or a complete overhaul, our experienced team has the expertise to make your renovation dreams a reality.</p>
            </div>
            <Form1 name={'Renovation'} category={'Home Improvement'} />
            <Container1 aos={'fade-up'}>
                <h3>Why Choose us For Your Renovation Project?</h3>
                <ul className='container1-items'>
                    <li className="container1-item"><span>Experience:</span> With 30+ years in the industry, we've honed our skills and acquired extensive experience in various renovation projects.</li>
                    <li className="container1-item"><span>Tailored Solutions:</span> We collaborate closely with you to understand your vision, lifestyle, and budget, ensuring a renovation that aligns perfectly with your needs.</li>
                    <li className="container1-item"><span>Quality Craftsmanship:</span> Our team of skilled craftsmen is dedicated to delivering quality work that stands the test of time.</li>
                    <li className="container1-item"><span>Transparent Process:</span> We maintain open communication, provide detailed quotes, and keep you informed throughout the project.</li>
                    <li className="container1-item"><span>Versatility: </span> From small interior updates to comprehensive home or commercial renovations, we have the expertise to handle a wide range of projects.</li>
                </ul>
            </Container1>
        </div>
        <Process1>
        <ProcessCard img={consultationImg} aos={'fade-right'} >
                    <h4>We begin with a comprehensive consultation where we discuss your goals, preferences, and budget. During this phase, we will:</h4>
                    <ul>
                        <li>Explore your vision for the renovation, including style, aesthetics, and functionality.</li>
                        <li>Review your specific goals and objectives for the project.</li>
                        <li>Discuss budget considerations and any constraints to ensure a realistic plan.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={bluePrintImg} aos={'fade-left'} >
                    <h4>Customized Plan and Material Selection: Tailoring the Solution</h4>
                    <p>Based on our consultation and design phase, we create a customized plan for your renovation project. This includes:</p>
                    <ul>
                        <li>Selecting the appropriate materials, fixtures, and components that align with your vision and functional requirements.</li>
                        <li>Determining the scope of work, whether it involves kitchen and bathroom remodeling, basement finishing, or room additions.</li>
                        <li>Addressing any special requests or design considerations you may have for your renovation.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={constructionImg} aos={'fade-right'} >
                    <h4>Precise Renovation: Meticulous and Comprehensive</h4>
                    <p>Our skilled craftsmen work diligently to complete your renovation project. This includes:</p>
                    <ul>
                        <li>Installing new fixtures, cabinetry, countertops, or other components with precision, ensuring they function correctly.</li>
                        <li>Completing the renovation work, whether it involves structural changes, electrical and plumbing updates, or aesthetic enhancements.</li>
                        <li>Ensuring that the renovation meets your design and functional objectives.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={inspectImg} aos={'fade-left'} >
                    <h4>Final Inspection: Ensuring Quality and Satisfaction</h4>
                    <p>Before considering the project complete, we conduct a thorough quality inspection. This includes:</p>
                    <ul>
                        <li>Verifying that the renovation has been completed to our high standards, including functionality, aesthetics, and safety.</li>
                        <li>Double-checking that the selected materials and fixtures meet your specific design and functional requirements.</li>
                        <li>Ensuring that the renovation is ready for you to enjoy.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={walkThroughImg} aos={'fade-right'} >
                <h4>Client Walkthrough: Your Satisfaction is Our Priority</h4>
                <p>We invite you to join us for a client walkthrough, during which you can inspect the completed renovation project and ensure it meets your expectations. This is your opportunity to:</p>
                <ul>
                    <li>Verify that the renovation aligns with the agreed-upon design and functional requirements.</li>
                    <li>Ask any questions or request adjustments if necessary.</li>
                    <li>Confirm your satisfaction with the aesthetics, durability, and functionality of your renovated space.</li>
                </ul>
            </ProcessCard>
        </Process1>
        <div data-aos='fade-up'  style={{position: 'relative', marginBottom: '20vh'}} className="benefits">
            <div className="benefits">
                <h3>Benefits of Professional Renovation Services</h3>
                <ul className="benefits-items">
                    <li className="benefits-item"><span>Enhanced Aesthetics:</span> Renovations can transform the look and feel of your space, enhancing its aesthetics.</li>
                    <li className="benefits-item"><span>Increased Property Value:</span> A quality renovation can significantly increase your property's value.</li>
                    <li className="benefits-item"><span>Improved Functionality:</span> Renovations can improve the functionality and efficiency of your space.</li>
                    <li className="benefits-item"><span>Customization:</span> We offer custom design solutions to match your unique style and needs.</li>
                    <li className="benefits-item"><span>Energy Efficiency:</span> Modern renovations can enhance energy efficiency, reducing utility costs.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Renovation