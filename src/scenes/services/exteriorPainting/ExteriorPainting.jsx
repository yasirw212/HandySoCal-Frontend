import React from 'react'
import Hero2 from '../../../components/hero2/Hero2'
import exteriorPaintImg from '../../../assets/exteriorpaint.jpg'
import logoIcon from '../../../assets/logo-icon.png'
import Process1 from '../../../components/process1/Process1'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import Container2 from '../../../components/templates/container2/Container2'
import Form2 from '../../../components/inquiryForms/form2/Form2'

const ExteriorPainting = () => {
  return (
    <div className='display2-container'>
        <Hero2 img={exteriorPaintImg} />
        <div className="display2-intro">
            <div className="display2-card">
                <h1 className='display2-title'>Exterior Home Painting Services</h1>
                <p>Our professional exterior house painting services are designed to not only enhance the curb appeal of your property but also provide long-lasting protection against the elements. Whether you want to refresh your home's look or safeguard it from the weather, our skilled painters are here to transform your vision into reality. </p>
                <Form2>
                    <div>
                        <label htmlFor="service">Service Needed:</label>
                        <select name="service" id="">
                            <option value="entireExterior">Entire Exterior</option>
                            <option value="trim">Trim and Siding Painting</option>
                            <option value="frontDoor">Front Door Painting</option>
                            <option value="frontDoor">Deck & Fence Painting</option>
                            <option value="garageDoor">Garage Door Painting</option>
                            <option value="window">Window Frame Painting</option>
                            <option value="wood">Wood Prepare & Prep</option>
                        </select>
                    </div> 
                    <textarea style={{gridColumn: '1 / 4'}} name="" id="" cols="30" rows="6" placeholder='Details about the job.'></textarea>
                </Form2>
                <img src={logoIcon} width={30} alt="" />
            </div>
        </div>
        <div className="display2-body">
            <div data-aos='fade-up' className="display2-services">
                <h2 className='display2-title'>Our Home Exterior Painting Services </h2>
                <Container2>
                    <div className="container2-item">
                        <h3>Entire Exterior Painting</h3>
                        <div className="feature-bar"></div>
                        <p>Transform your entire home with a fresh coat of paint in your chosen color palette.</p>
                    </div>
                    <div className="container2-item">
                        <h3>Trim and Siding Painting</h3>
                        <div className="feature-bar"></div>
                        <p>Freshen up trim, siding, and exterior surfaces with crisp lines and vibrant colors.</p>
                    </div>
                    <div className="container2-item">
                        <h3>Front Door Painting</h3>
                        <div className="feature-bar"></div>
                        <p>Make a statement by painting your front door in an inviting and eye-catching color.</p>
                    </div>
                    <div className="container2-item">
                        <h3>Deck and Fence Painting</h3>
                        <div className="feature-bar"></div>
                        <p> Extend the life of your outdoor structures with professional deck and fence painting.</p>
                    </div>
                    <div className="container2-item">
                        <h3>Garage Door Painting</h3>
                        <div className="feature-bar"></div>
                        <p>Match your garage door to the overall aesthetic of your home.</p>
                    </div>
                    <div className="container2-item">
                        <h3>Window Frame Painting</h3>
                        <div className="feature-bar"></div>
                        <p>Address any wood damage, rot, or peeling paint before painting.</p>
                    </div>
                    <div className="container2-item">
                        <h3>Wood Repair and Prep</h3>
                        <div className="feature-bar"></div>
                        <p>Enhance the acoustics and insulation of your space with specialized drywall solutions.</p>
                    </div>
                </Container2>
            </div>
        </div>
        <div className="display2-footer">
            <Process1>
                <ProcessCard img={consultationImg} aos={'fade-right'}>
                    <h4> Initial Consultation: Understanding Your Vision</h4>
                    <p>We begin with a comprehensive consultation to discuss your goals, specific requirements, and budget. During this phase, we will:</p>
                    <ul>
                        <li>Evaluate the areas you want to paint and determine the scope of work.</li>
                        <li>Review any specific painting ideas, color preferences, or design concepts.</li>
                        <li>Discuss budget considerations and any constraints to create a realistic plan.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={bluePrintImg} aos={'fade-left'}>
                    <h4>Surface Preparation: Setting the Foundation</h4>
                    <p>Proper surface preparation is crucial for a successful paint job. Our process includes:</p>
                    <ul>
                        <li>Pressure washing to remove dirt, grime, and loose paint from the surfaces.</li>
                        <li>Surface repairs to address any imperfections and ensure a smooth canvas for painting.</li>
                        <li>Caulking and sealing gaps and joints to enhance the integrity and energy efficiency of your home.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={exteriorPaintImg} aos={'fade-right'}> 
                    <h4>Painting: Precision and Detail</h4>
                    <p>With your property prepared, our painters will get to work, ensuring that the painting is carried out with precision and attention to detail. This stage involves:</p>
                    <ul>
                        <li>Applying the chosen paint colors and finishes using professional techniques that withstand the elements.</li>
                        <li>Ensuring sharp and clean lines at edges and corners for a polished look.</li>
                        <li>Monitoring drying times and applying additional coats as needed for durability.</li>
                        <li>Conducting quality checks to ensure that the exterior paint job is impeccable.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={inspectImg} aos={'fade-left'}>
                    <h4>Final Inspection and Clean-Up: Ensuring Excellence</h4>
                    <p>Before we consider the project complete, our team conducts a comprehensive final inspection. This step includes:</p>
                    <ul>
                        <li>Thoroughly reviewing each painted area to ensure it meets our high-quality standards.</li>
                        <li>Checking for any potential issues, drips, or touch-ups needed for a pristine finish.</li>
                        <li>Cleaning up the work area, removing paint supplies, and leaving your property clean and ready for enjoyment.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={walkThroughImg} aos={'fade-right'}>
                    <h4>Client Walkthrough: Your Satisfaction Matters</h4>
                    <p>We invite you to join us for a client walkthrough, during which you can inspect the completed painting. This is your opportunity to:</p>
                    <ul>
                        <li>Ensure that the paint job meets your expectations, is flawless, and has addressed any specific concerns.</li>
                        <li>Ask any questions or request further touch-ups or adjustments if necessary.</li>
                        <li>Confirm your satisfaction with the finished project.</li>
                    </ul>
                </ProcessCard>
            </Process1>
            <div data-aos='fade-up' className="benefits">
                <div className="benefits">
                    <h3>Benefits of House Painting</h3>
                    <ul className="benefits-items">
                        <li className="benefits-item"><span>Enhanced Curb Appeal:</span> A fresh coat of exterior paint can enhance your home's overall curb appeal.</li>
                        <li className="benefits-item"><span>Long-Lasting Protection:</span> Quality exterior paint protects your home's surfaces from weather and wear.</li>
                        <li className="benefits-item"><span>Property Value:</span> A professionally executed exterior paint job can increase the value of your property.</li>
                        <li className="benefits-item"><span>Aesthetic Transformation:</span> Exterior painting can transform your home's look and style.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExteriorPainting