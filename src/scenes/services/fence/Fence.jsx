import React from 'react'
import Hero from '../../../components/templates/hero/Hero'
import fenceImg from '../../../assets/fence.jpg'
import Form1 from '../../../components/inquiryForms/form1/Form1'
import Container1 from '../../../components/templates/container1/container1'
import Process1 from '../../../components/process1/Process1'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import materialImg from '../../../assets/material.jpg'
import constructionImg from '../../../assets/construction.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import completeImg from '../../../assets/complete.jpg'

const Fence = () => {
  return (
    <div className="display1-container">
        <Hero img={fenceImg} title={'Fence Installation.'} />
        <div className="display1-body">
            <div className="patio-intro">
                <h2>Why Choose Us for Your Fence Needs?</h2>
                <br />
                <p> We believe that a well-constructed fence not only defines your property but also provides security, privacy, and enhances the aesthetic appeal of your home. Our professional fence installation services are designed to cater to your specific needs, whether you're looking for a classic picket fence, a durable chain-link fence, or a custom-designed fence that complements your landscaping. We are dedicated to ensuring that your fence is not only functional but also built to last.</p>
            </div>
            <Form1 category={"Home Improvement"} name={'Fence Installation'} />
            <Container1 aos={'fade-up'} >
                <h3>Wooden Fences:</h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>Picket Fences:</span> Install traditional picket fences for a timeless and charming look.</li>
                    <li className="container1-item"><span>Privacy Fences:</span> Construct privacy fences to create secluded and tranquil outdoor spaces.</li>
                    <li className="container1-item"><span>Custom Wooden Fences:</span> Work with us to design a custom wooden fence that suits your unique style.</li>
                </ul>
                <br />
                <h3>Metal Fences: </h3>
                <ul className="container1-items">
                   <li className="container1-item"><span>Chain-Link Fences:</span> Install durable chain-link fences for security and containment.</li>
                   <li className="container1-item"><span>Wrought Iron Fences:</span> Install wrought iron fences for a timeless and durable fencing solution.</li>
                </ul>
                <br />
                <h3>Vinyl Fences: </h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>Vinyl Privacy Fences:</span> Construct vinyl privacy fences for low maintenance and modern aesthetics.</li>
                    <li className="container1-item"><span>Picket Vinyl Fences:</span> Install picket vinyl fences for classic charm and easy care.</li>
                    <li className="container1-item"><span>Vinyl Post and Rail Fences: </span> Opt for vinyl post and rail fences for a semi-private and traditional look.</li>
                </ul>
            </Container1>
        </div>
        <Process1>
            <ProcessCard img={consultationImg} aos={'fade-right'}>
                <h4>Initial Consultation: Understanding Your Vision</h4>
                <p>We begin with a consultation to understand your vision for your fencing project. During this phase, we:</p>
                <ul>
                    <li>Discuss your goals for the installation, such as security, privacy, aesthetics, or containment.</li>
                    <li>Evaluate the layout of your property to determine the best fence design and placement.</li>
                    <li>Provide a clear timeline for the project and schedule a convenient appointment.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={bluePrintImg} aos={'fade-left'}>
                <h4>Design and Planning: Creating Your Dream Fence</h4>
                <p>Based on our consultation and design phase, we create a customized plan for your fence installation project. This includes:</p>
                <ul>
                    <li>Selecting the appropriate materials and fence types that align with your vision and objectives.</li>
                    <li>Determining the scope of work, whether it involves new installations, repairs, or upgrades.</li>
                    <li>Addressing any special requests or design considerations you may have for your fence.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={constructionImg} aos={'fade-right'}>
                <h4>Precise Installation: Meticulous and Comprehensive</h4>
                <p>Our skilled craftsmen work diligently to complete your fence installation project. This includes:</p>
                <ul>
                    <li>Installing the fence with precision, ensuring that it is level, secure, and visually appealing.</li>
                    <li>Attaching gates and access control systems if included in the project.</li>
                    <li>Conducting expert repairs to existing fences to restore their aesthetics and functionality.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={inspectImg} aos={'fade-left'}>
                <h4>Final Inspection: Ensuring Excellence</h4>
                <p>Before considering the project complete, we conduct a thorough quality inspection. This includes:</p>
                <ul>
                    <li>Verifying that the fence has been installed to our high standards, including alignment and stability.</li>
                    <li>Double-checking that the fence design and materials meet your specific vision.</li>
                    <li>Ensuring that gates and access control systems operate correctly.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={walkThroughImg} aos={'fade-right'}>
                <h4>Client Walkthrough: Your Satisfaction Matters</h4>
                <p>We invite you to join us for a client walkthrough, during which you can inspect the finsihed fence. This is your opportunity to:</p>
                <ul>
                    <li>Ensure the fence meets your expectations, vision, and functionality requirements.</li>
                    <li>Ask any questions or request further adjustments if necessary.</li>
                    <li>Confirm your satisfaction with the aesthetics, security, and functionality of your new fence.</li>
                </ul>
            </ProcessCard>
        </Process1>
        <div data-aos='fade-up' style={{position: 'relative', marginBottom: '20vh'}} className="benefits">
            <div className="benefits">
                <h3>Benefits of Professional Fence Installation</h3>
                <ul className="benefits-items">
                    <li className="benefits-item"><span>Enhanced Security:</span> Fences provide a barrier that enhances security and deters trespassers.</li>
                    <li className="benefits-item"><span>Privacy:</span> Privacy fences create secluded outdoor spaces for relaxation and enjoyment.</li>
                    <li className="benefits-item"><span>Aesthetic Appeal:</span> Well-designed fences add to the overall aesthetics of your property.</li>
                    <li className="benefits-item"><span>Property Value:</span> Quality fencing can increase the value of your home.</li>
                    <li className="benefits-item"><span>Durability:</span> Properly installed fences are built to withstand the test of time and the elements.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Fence