import React from 'react'
import Hero2 from '../../../components/hero2/Hero2'
import toiletImg from '../../../assets/toilet.jpg'
import logoIcon from '../../../assets/logo-icon.png'
import Process1 from '../../../components/process1/Process1'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import materialImg from '../../../assets/material.jpg'
import constructionImg from '../../../assets/construction.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import completeImg from '../../../assets/complete.jpg'
import Container2 from '../../../components/templates/container2/Container2'
import Form2 from '../../../components/inquiryForms/form2/Form2'

const Toilet = () => {
  return (
    <div className='display2-container' >
        <Hero2 img={toiletImg} title={'Windows'} ></Hero2>    
        <div className="display2-intro">
            <div className="display2-card">
                <h1 className='display2-title'>Toilet Installation & Replacement</h1>
                <p>Whether you're looking to replace an old, inefficient toilet or need a new installation, our professional toilet replacement and installation services are designed to ensure that you have a reliable, water-efficient, and well-functioning toilet. Our skilled plumbers are committed to providing top-quality toilet solutions that enhance your bathroom's performance and aesthetics.</p>
                <Form2>
                    <div>
                        <label htmlFor="walls">Service Needed:</label>
                        <select name="walls" id="">
                            <option value="installation">Installation</option>
                            <option value="replacement">Replacement</option>
                        </select>
                    </div> 
                </Form2>
                <img src={logoIcon} width={30} alt="" />
            </div>
            
        </div>
        <div className="display2-body">
            <div className="display2-services">
                <h2 className='display2-title'>Toilet Installation Services </h2>
                <Container2>
                    <div className="container2-item">
                        <h3>Floor-Mounted Toilets</h3>
                        <div className="feature-bar"></div>
                        <p>Install floor-mounted toilets for a classic and space-efficient solution.</p>
                    </div>
                    <div className="container2-item">
                        <h3>Wall-Mounted Toilets</h3>
                        <div className="feature-bar"></div>
                        <p>Opt for wall-mounted toilets to create a sleek, contemporary bathroom look.</p>
                    </div>
                    <div className="container2-item">
                        <h3>Bidet Toilets</h3>
                        <div className="feature-bar"></div>
                        <p>We install bidet toilets to enhance hygiene and comfort in your bathroom.</p>
                    </div>
                    <div className="container2-item">
                        <h3>Smart Toilets</h3>
                        <div className="feature-bar"></div>
                        <p>Upgrade to smart toilets with advanced features like heated seats and built-in bidets.</p>
                    </div>
                    <div className="container2-item">
                        <h3>Commercial Toilets</h3>
                        <div className="feature-bar"></div>
                        <p>We provide installation services for commercial toilets in business or office settings.</p>
                    </div>
                    <div className="container2-item">
                        <h3>Security Features</h3>
                        <div className="feature-bar"></div>
                        <p>Improve home security with windows that have built-in security features and locking mechanisms.</p>
                    </div>
                </Container2>
            </div>
            <div className="display2-services">
                        <h2 className='display2-title'>Toilet Replacement</h2>
                        <Container2 aos={'fade-up'}>
                            <div className="container2-item">
                                <h3>Standard Toilets:</h3>
                                <div className="feature-bar"></div>
                                <p>Replace your old toilet with a standard, dependable model.</p>
                            </div>
                            <div className="container2-item">
                                <h3>Comfort-Height Toilets</h3>
                                <div className="feature-bar"></div>
                                <p>Opt for comfort-height toilets for added accessibility and comfort.</p>
                            </div>
                            <div className="container2-item">
                                <h3>Designer Toilets</h3>
                                <div className="feature-bar"></div>
                                <p>Choose designer toilets with sleek and modern designs to enhance your bathroom's aesthetics.</p>
                            </div>
                            <div className="container2-item">
                                <h3>Specialty Toilets</h3>
                                <div className="feature-bar"></div>
                                <p>We can replace specialty toilets, such as wall-mounted or corner toilets.</p>
                            </div>
                        </Container2>
                    </div>
        </div>
        <div className="display2-footer">
            <Process1>
                <ProcessCard img={consultationImg} aos={'fade-right'}>
                    <h4> Initial Consultation: Assessing Your Needs</h4>
                    <p>We begin with a consultation to understand your specific toilet service requirements. During this phase, we:</p>
                    <ul>
                       <li>Discuss your goals for the toilet service, such as installation, repair, or maintenance.</li>
                       <li>Evaluate the current state of your toilet and the issues you may be facing.</li>
                       <li>Discuss any potential challenges, such as plumbing requirements or bathroom layout constraints.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={bluePrintImg} aos={'fade-left'}>
                    <h4>Toilet Selection: Planning the Installation</h4>
                    <p>Based on our consultation and assessment, we create a customized plan for your toilet service project. This includes:</p>
                    <ul>
                        <li>Selecting the appropriate materials, fixtures, and components that align with your vision and functional requirements.</li>
                        <li>Determining the scope of work, whether it involves toilet installation, repair, or maintenance.</li>
                        <li>Addressing any special requests or design considerations you may have for your toilet.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={constructionImg} aos={'fade-right'}> 
                    <h4>Installation: Precision and Reliability</h4>
                    <p>Our skilled technicians work diligently to complete your toilet service project. This includes:</p>
                    <ul>
                        <li>Installing new toilets, fixtures, and connections with precision, ensuring they function correctly.</li>
                        <li>Completing the toilet service work, whether it involves repairs, installations, or maintenance.</li>
                        <li>Ensuring that your toilet meets your design and functional objectives.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={inspectImg} aos={'fade-left'}>
                    <h4>Final Inspection: Ensuring Excellence</h4>
                    <p>Before we consider the project complete, our team conducts a final inspection. This step includes:</p>
                    <ul>
                        <li>Reviewing the installed toilet to ensure it functions correctly, including proper flushing and no leaks.</li>
                        <li>Checking for any potential issues or discrepancies and making necessary adjustments.</li>
                        <li>Cleaning up the work area, removing installation debris, and leaving your bathroom tidy and ready for use.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={walkThroughImg} aos={'fade-right'}>
                    <h4>Client Walkthrough: Your Satisfaction Matters</h4>
                    <p>We invite you to join us for a client walkthrough, during which you can inspect the completed toilet service project and ensure it meets your expectations. This is your opportunity to:</p>
                    <ul>
                        <li>Verify that the toilet service aligns with the agreed-upon design and functional requirements.</li>
                        <li>Ask any questions or request adjustments if necessary.</li>
                        <li>Confirm your satisfaction with the finished toilet replacement and installation project.</li>
                    </ul>
                </ProcessCard>
            </Process1>
            <div data-aos='fade-up'  className="benefits">
                <div className="benefits">
                    <h3>Benefits of Toilet Replacement/Installation</h3>
                    <ul className="benefits-items">
                        <li className="benefits-item"><span>Water Savings:</span> Water-efficient toilets can significantly reduce water consumption and lower utility bills.</li>
                        <li className="benefits-item"><span>Reliability:</span> Properly installed toilets are reliable, with efficient flushing and minimal maintenance.</li>
                        <li className="benefits-item"><span>Aesthetics:</span> Modern toilets enhance the visual appeal of your bathroom.</li>
                        <li className="benefits-item"><span>Accessibility:</span> Comfort-height toilets make bathroom visits more accessible for all family members.</li>
                        <li className="benefits-item"><span>Hygiene:</span> Bidet and smart toilets offer advanced hygiene features for added comfort.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Toilet