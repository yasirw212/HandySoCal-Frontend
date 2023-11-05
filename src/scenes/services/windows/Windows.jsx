import React from 'react'
import windowsImg from '../../../assets/windows.jpg'
import Hero2 from '../../../components/hero2/Hero2'
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

const Windows = () => {
  return (
    <div className='display2-container' >
        <Hero2 img={windowsImg} title={'Windows'} />
        <div className="display2-intro">
            <div className="display2-card">
                <h1 className='display2-title'>Windows</h1>
                <p>We understand the vital role windows play in your home's appearance, energy efficiency, and comfort. Our window installation services are designed to enhance your property with high-quality windows that are both functional and visually appealing.</p>
                <Form2 name={'Window Installation'}>
                    <div>
                        <label htmlFor="service">Windows</label>
                        <select name="service" id="">
                            <option value="Windows needed: 1">1</option>
                            <option value="Windows needed: 2">2</option>
                            <option value="Windows needed: 3">3</option>
                            <option value="Windows needed: 4">4</option>
                            <option value="Windows Needed: 5+">5+</option>
                        </select>
                    </div> 
                </Form2 >
                <img src={logoIcon} width={30} alt="" />
            </div>
            
        </div>
        <div className="display2-body">
            <div data-aos={'fade-up'} className="display2-services">
                <h2 className='display2-title'>Our Window Installation Services </h2>
                <Container2 >
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>New Window Installation</h3>
                        <div className="feature-bar"></div>
                        <p>Install brand-new windows to improve the energy efficiency, security, and aesthetic appeal of your property.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Window Replacement</h3>
                        <div className="feature-bar"></div>
                        <p>Replace old, damaged, or inefficient windows with new ones to enhance comfort and reduce energy costs.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Custom Window Installation</h3>
                        <div className="feature-bar"></div>
                        <p>Choose from various window styles, including double-hung, casement, sliding, bay, bow, or custom designs.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Window Frames and Trims</h3>
                        <div className="feature-bar"></div>
                        <p>Enhance the look of your windows with stylish frames and trims that match your home's design.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Window Glass and Glazing</h3>
                        <div className="feature-bar"></div>
                        <p>Select the appropriate type of glass and glazing to optimize energy efficiency, noise reduction, and UV protection.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Security Features</h3>
                        <div className="feature-bar"></div>
                        <p>Improve home security with windows that have built-in security features and locking mechanisms.</p>
                    </div>
                </Container2>
            </div>
        </div>
        <div className="display2-footer">
            <Process1>
                <ProcessCard img={consultationImg} aos={'fade-right'}>
                    <h4>Consultation and Assessment: Defining Your Needs</h4>
                    <p>We begin with a consultation to understand your specific window service requirements. During this phase, we:</p>
                    <ul>
                        <li>Discuss your goals for the window service, whether it's replacement or new installation.</li>
                        <li>Evaluate your current windows and identify any issues or areas for improvement.</li>
                        <li>Provide design options and material recommendations to match your vision.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={bluePrintImg} aos={'fade-left'}>
                    <h4>Customized Plan and Material Selection: Tailoring the Solution</h4>
                    <p>Based on our consultation and assessment, we create a customized plan for your window service project. This includes:</p>
                    <ul>
                        <li>Selecting the appropriate window styles, materials, and glass options that align with your vision and functional requirements.</li>
                        <li>Determining the scope of work, whether it involves window replacement or new installations.</li>
                        <li>Addressing any special requests or design considerations you may have for your windows.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={constructionImg} aos={'fade-right'}> 
                    <h4> Professional Installation: Precision and Expertise</h4>
                    <p>Our skilled technicians work diligently to complete your window service project. This includes:</p>
                    <ul>
                        <li>Removing existing windows with care to avoid damage to surrounding areas.</li>
                        <li>Installing new windows, frames, and seals with precision, ensuring they are level, plumb, and energy-efficient.</li>
                        <li>Ensuring that your windows meet your design and functional objectives.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={inspectImg} aos={'fade-left'}>
                    <h4>Quality Inspection: Ensuring Excellence</h4>
                    <p>Before considering the project complete, we conduct a thorough quality inspection. This includes:</p>
                    <ul>
                        <li>Checking for proper window operation, ensuring they open, close, and lock securely.</li>
                        <li>Checking for any potential issues or discrepancies and making necessary adjustments.</li>
                        <li>Confirming that the window installation is both functional and aesthetically pleasing.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={walkThroughImg} aos={'fade-right'}>
                    <h4>Client Walkthrough: Your Satisfaction Matters</h4>
                    <p>We invite you to join us for a client walkthrough, during which you can inspect the comleted window installation. This is your opportunity to:</p>
                    <ul>
                        <li>Verify that the window service aligns with the agreed-upon design and functional requirements.</li>
                        <li>Ask any questions or request further adjustments if necessary.</li>
                        <li>Confirm your satisfaction with the finished window installation project.</li>
                    </ul>
                </ProcessCard>
            </Process1>
            <div data-aos='fade-up'  className="benefits">
                <div className="benefits">
                    <h3>Benefits of Professional Window Installation</h3>
                    <ul className="benefits-items">
                        <li className="benefits-item"><span>Energy Efficiency:</span> Energy-efficient windows can significantly reduce utility bills and improve home comfort.</li>
                        <li className="benefits-item"><span>Aesthetics:</span> Well-chosen windows enhance the overall appearance and style of your property.</li>
                        <li className="benefits-item"><span>Durability:</span> Expert installation ensures the longevity and performance of your windows.</li>
                        <li className="benefits-item"><span>Property Value:</span> High-quality window installation can increase your property's resale value.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Windows