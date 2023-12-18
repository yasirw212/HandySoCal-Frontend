import React from 'react'
import Hero2 from '../../../components/hero2/Hero2'
import concreteImg from '../../../assets/concrete.jpg'
import logoIcon from '../../../assets/logo-icon.png'
import Process1 from '../../../components/process1/Process1'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import Container2 from '../../../components/templates/container2/Container2'
import Form2 from '../../../components/inquiryForms/form2/Form2'

const Concrete = () => {
  return (
    <div className='display2-container'>
        <Hero2 img={concreteImg} />
        <div className="display2-intro">
            <div className="display2-card">
                <h1 className='display2-title'>Concrete</h1>
                <p>We take pride in delivering high-quality concrete solutions for residential and commercial projects. Our skilled team of craftsmen is dedicated to ensuring durability, precision, and excellence in every concrete service we provide. Explore the range of concrete services offered by Quintero Construction to enhance the structural integrity and aesthetic appeal of your property.</p>
                <Form2 name={'Electrical Fixtures'} category={'Electrical'}>
                </Form2>
                <img src={logoIcon} width={30} alt="" />
            </div>
        </div>
        <div className="display2-body">
            <div data-aos={'fade-up'} className="display2-services">
                <h2 className='display2-title'>Concrete Installation Services </h2>
                <Container2 >
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Driveways</h3>
                        <div className="feature-bar"></div>
                        <p>Enhance your property's curb appeal with a professionally installed concrete driveway. Our services include: new driveway installation and driveway extension.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Walkways and Paths</h3>
                        <div className="feature-bar"></div>
                        <p>Create inviting walkways and paths that seamlessly connect different areas of your property. Our services include: sidewalk installation and garden paths.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Cracks and Surface Repair</h3>
                        <div className="feature-bar"></div>
                        <p>Address cracks and surface damage to prevent further deterioration. Our repair services cover: surface cracks, structural cracks, spalling and flaking.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Foundation Repair</h3>
                        <div className="feature-bar"></div>
                        <p>Ensure the stability and safety of your structure with our expert foundation repair services.</p>
                    </div>
                </Container2>
            </div>
        </div>
        <div className="display2-footer">
            <Process1>
                <ProcessCard img={consultationImg} aos={'fade-right'}>
                    <h4>Consultation and Assessment: Understanding Your Needs</h4>
                    <p>Our process begins with a comprehensive consultation to understand your project goals, preferences, and specific requirements. </p>
                </ProcessCard>
                <ProcessCard img={bluePrintImg} aos={'fade-left'}>
                    <h4>Customized Plan: Planning the Installation</h4>
                    <p>Based on the assessment, we create a customized plan that addresses your specific needs and preferences. This phase includes:</p>
                    <ul>
                        <li>Detailed project timeline, outlining key milestones and expected completion dates.</li>
                        <li>Material selection, ensuring the use of top-grade concrete and other construction materials.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={concreteImg} aos={'fade-right'}> 
                    <h4> Installation: Precision and Safety</h4>
                    <p>With the plan in place, our experienced craftsmen take charge of executing the project with precision and attention to detail. During this phase:</p>
                    <ul>
                        <li>Skilled professionals carry out the concrete installation or repair work.</li>
                        <li>We use top-grade materials to ensure durability and longevity.</li>
                        <li>Regular communication keeps you informed about the progress.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={inspectImg} aos={'fade-left'}>
                    <h4>Final Inspection and Clean-Up: Ensuring Excellence</h4>
                    <p>Before we consider the project complete, our team conducts a comprehensive final inspection. This step includes:</p>
                    <ul>
                        <li>Detailed inspection of the finished concrete surfaces.</li>
                        <li>Identifying and addressing any potential issues.</li>
                        <li>Cleaning up the work area, removing any installation debris, and leaving your space tidy and ready for use.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={walkThroughImg} aos={'fade-right'}>
                    <h4>Client Walkthrough: Your Satisfaction Matters</h4>
                    <p>We invite you to join us for a client walkthrough, during which you can test each installed switch and outlet and ensure they meet your expectations. This is your opportunity to:</p>
                    <ul>
                        <li>Inspect the completed work and ensure it aligns with your expectations.Inspect the completed work and ensure it aligns with your expectations.</li>
                        <li>Discuss maintenance tips and care instructions for newly installed or repaired concrete surfaces.</li>
                    </ul>
                </ProcessCard>
            </Process1>
            <div data-aos={'fade-up'} className="benefits">
                <div className="benefits">
                    <h3>Benefits</h3>
                    <ul className="benefits-items">
                        <li className="benefits-item"><span>Structural Integrity:</span> Ensure the longevity and stability of your structures.</li>
                        <li className="benefits-item"><span>Aesthetic Enhancement:</span> Enhance the visual appeal of your property with decorative concrete.</li>
                        <li className="benefits-item"><span>Property Value:</span> Increase the value of your property with well-maintained and visually appealing concrete surfaces.</li>
                        <li className="benefits-item"><span>Safety:</span> Addressing cracks and damage contributes to a safer environment.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Concrete