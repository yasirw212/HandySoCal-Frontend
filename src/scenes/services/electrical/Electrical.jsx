import React from 'react'
import './electrical.css'
import Hero from '../../../components/templates/hero/Hero'
import electricalImg from '../../../assets/electrical.jpg'
import Form1 from '../../../components/inquiryForms/form1/Form1'
import Container1 from '../../../components/templates/container1/container1'
import Process1 from '../../../components/process1/Process1'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import workImg from '../../../assets/electricalWork.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import completeImg from '../../../assets/complete.jpg'

const Electrical = () => {
  return (
    <div className='display1-container'>
        <Hero img={electricalImg} title={'Electrical.'} />
        <div className="display1-body">
            <div className="electrical-intro">
                <h2>Why Choose Us for Your Electrical Needs?</h2>
                <p className='container1-body'>We offer a wide range of electrical services to meet your home and business needs. With our experienced and licensed electricians, we provide solutions that prioritize safety, efficiency, and compliance with industry standards. Explore our comprehensive electrical services:</p>
            </div>
            <Form1 name={'General Services'} category={'Electrical'} />
            <Container1 aos={'fade-up'}>
                <h3>Electrical Services:</h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>Electrical Repairs:</span> Quickly resolve electrical issues in your home or business, including outlets, switches, and wiring problems.</li>
                    <li className="container1-item"><span>Lighting Installation:</span> Illuminate your space with a variety of lighting options, including indoor and outdoor fixtures.</li>
                    <li className="container1-item"><span>Ceiling & Bath Fans:</span> Install or repair ceiling and bath fans to improve ventilation and comfort.</li>
                    <li className="container1-item"><span>Outlet Installation:</span> Add new outlets, relocate existing ones, or replace damaged outlets.</li>
                    <li className="container1-item"><span>Light Fixture Services:</span> Install, replace, or repair light fixtures, including chandeliers, sconces, and recessed lighting.</li>
                    <li className="container1-item"><span>Light Switch Installation:</span> Upgrade or replace light switches, dimmer switches, and smart switches.</li>
                    <li className="container1-item"><span>Electrical Safety Inspections:</span> Ensure your electrical system meets safety standards and identify potential issues.</li>
                </ul>
            </Container1>
        </div>
        <Process1 >
            <ProcessCard img={consultationImg} aos={'fade-right'}>
                <h4>Initial Consultation: Assessing Your Needs</h4>
                <p>We begin with a detailed consultation to discuss your electrical goals, concerns, and budget. During this phase, we will:</p>
                <ul>
                    <li>Evaluate your electrical requirements, including the scope of work and your expectations.</li>
                    <li>Review any existing electrical issues or safety concerns.</li>
                    <li>Discuss budget considerations and any constraints to create a realistic plan.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={bluePrintImg} aos={'fade-left'}>
                <h4>Customized Plan and Design: Tailoring the Solution</h4>
                <p>Following the initial consultation, our experts collaborate with you to create a comprehensive plan, which includes:</p>
                <ul>
                    <li>Material selection, including wiring, fixtures, switches, and outlets.</li>
                    <li>Developing an itemized project proposal that ensures transparency and accuracy in the planning process.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={workImg} aos={'fade-left'}>
                <h4>Precise Installation and Repair: Meticulous and Comprehensive</h4>
                <ul>
                    <li>Installing or repairing electrical components while following industry standards.</li>
                    <li>Conducting thorough testing and quality checks to ensure safety and functionality.</li>
                    <li>Ensuring that the electrical system meets local electrical codes and regulations.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={inspectImg} aos={'fade-right'}>
                <h4>Final Inspection: Quality Assurance</h4>
                <p>Before considering the project complete, we conduct a thorough quality inspection. This includes:</p>
                <ul>
                    <li>Thoroughly reviewing every detail to ensure it meets our high-quality standards.</li>
                    <li>Testing the electrical components to verify they are operating safely and efficiently.</li>
                    <li>Addressing any issues or making adjustments to ensure the electrical system's functionality and safety.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={walkThroughImg} aos={'fade-left'}>
                <h4>Client Walkthrough: Your Satisfaction Matters</h4>
                <p>We invite you to join us for a client walkthrough. During this walkthrough, you can inspect the work and ensure it aligns with your vision. This is also the time to address any questions or concerns you may have. We'll make any necessary adjustments based on your feedback.</p>
            </ProcessCard>
        </Process1>
        <div data-aos='fade-up' style={{position: 'relative', marginBottom: '20vh'}} className="benefits">
            <div className="benefits">
                <h3>Benefits of Professional Electrical Services</h3>
                <ul className="benefits-items">
                    <li className="benefits-item"><span>Safety Assurance:</span> Professional electrical work ensures the safety of your home or business.</li>
                    <li className="benefits-item"><span>Energy Efficiency:</span> Modern electrical installations and upgrades can improve energy efficiency.</li>
                    <li className="benefits-item"><span>Compliance:</span> Our work complies with all local and national electrical codes.</li>
                    <li className="benefits-item"><span>Peace of Mind:</span> Reliable electrical systems offer peace of mind, reducing the risk of electrical issues.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Electrical