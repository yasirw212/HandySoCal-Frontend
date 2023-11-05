import React from 'react'
import Hero2 from '../../../components/hero2/Hero2'
import logoIcon from '../../../assets/logo-icon.png'
import Process1 from '../../../components/process1/Process1'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import interiorPaintImg from '../../../assets/interiorpaint.jpg'
import Container2 from '../../../components/templates/container2/Container2'
import Form2 from '../../../components/inquiryForms/form2/Form2'

const InteriorPainting = () => {
  return (
    <div className='display2-container'>
        <Hero2 img={interiorPaintImg} />
        <div className="display2-intro">
            <div className="display2-card">
                <h1 className='display2-title'>Interior Home Painting Services</h1>
                <p>A fresh coat of paint can completely transform the look and feel of your home's interior. Whether you want to update the entire house or just a few rooms, our professional interior house painting services are designed to help you create a space that reflects your style and personality. Our skilled painters are dedicated to bringing your vision to life.</p>
                <Form2 name={'Interior Painting'} category={'Painting'}>
                    <div>
                        <label htmlFor="service">Service Needed:</label>
                        <select name="service" id="">
                            <option value="Complete Interior">Whole House</option>
                            <option value="Room Painting">Room Painting</option>
                            <option value="Cabinet Painting">Cabinet Painting</option>
                            <option value="Bathroom Painting">Bathroom Painting</option>
                            <option value="accent">Accent Wall Painting</option>
                            <option value="Ceiling Painting">Ceiling Painting</option>
                            <option value="Baseboard & Trim Painting">Baseboard & Trim Painting</option>
                            <option value="Wallpaper Removal & Painting">Wallpaper Removal & Painting</option>
                        </select>
                    </div> 
                </Form2>
                <img src={logoIcon} width={30} alt="" />
            </div>
        </div>
        <div className="display2-body">
            <div data-aos='fade-up' className="display2-services">
                <h2 className='display2-title'>Our Home Exterior Painting Services </h2>
                <Container2>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Whole House Painting</h3>
                        <div className="feature-bar"></div>
                        <p>Transform your entire home with a fresh coat of paint in your chosen color palette.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Room Painting</h3>
                        <div className="feature-bar"></div>
                        <p>Update individual rooms to reflect your style and preferences.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Kitchen Cabinet Painting</h3>
                        <div className="feature-bar"></div>
                        <p>Give your kitchen a modern facelift by repainting your cabinets.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Bathroom Painting</h3>
                        <div className="feature-bar"></div>
                        <p>Refresh the look and feel of your bathroom with new paint.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Accent Wall Painting</h3>
                        <div className="feature-bar"></div>
                        <p>Create focal points in your rooms with stylish accent walls.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Ceiling Painting</h3>
                        <div className="feature-bar"></div>
                        <p>Paint or refresh ceiling surfaces for a clean and polished appearance.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Baseboard and Trim Painting</h3>
                        <div className="feature-bar"></div>
                        <p>Revitalize baseboards and trim for a finished look.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Wallpaper Removal and Painting</h3>
                        <div className="feature-bar"></div>
                        <p>Remove outdated wallpaper and replace it with a fresh coat of paint.</p>
                    </div>
                </Container2>
            </div>
        </div>
        <div className="display2-footer">
            <Process1>
                <ProcessCard img={consultationImg} aos={'fade-right'}>
                    <h4> Initial Consultation: Understanding Your Vision</h4>
                    <p>We start with an initial consultation to understand your vision. During this phase, we will:</p>
                    <ul>
                        <li>Discuss your color preferences, style goals, and any specific design ideas.</li>
                        <li>Provide recommendations on color palettes and finishes to achieve the desired look.</li>
                        <li>Discuss budget considerations and any constraints to create a realistic plan.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={bluePrintImg} aos={'fade-left'}>
                    <h4>Surface Preparation: Setting the Foundation</h4>
                    <p>Before painting, we prepare the surfaces, which includes:</p>
                    <ul>
                        <li>Cleaning to remove dust, dirt, and contaminants.</li>
                        <li>Repairing any imperfections, holes, or cracks in the walls.</li>
                        <li>Applying primers as needed to ensure paint adherence and a smooth finish.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={interiorPaintImg} aos={'fade-right'}> 
                    <h4>Painting: Precision and Detail</h4>
                    <p>Our skilled painting team will execute the project with precision. This includes:</p>
                    <ul>
                        <li>Applying the chosen paint colors and finishes with a focus on consistency and attention to detail.</li>
                        <li>Ensuring crisp lines and smooth, even coats for a flawless finish.</li>
                        <li>Utilizing brushes, rollers, and other professional equipment to achieve the desired results.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={inspectImg} aos={'fade-left'}>
                    <h4>Final Inspection and Clean-Up: Ensuring Excellence</h4>
                    <p>Before considering the project complete, we conduct a thorough quality inspection. This includes:</p>
                    <ul>
                        <li>Checking for proper paint coverage and color consistency.</li>
                        <li>Ensuring clean lines and edges throughout the painted areas.</li>
                        <li>Verifying that all surfaces have been properly coated.</li>
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
                    <h3>Benefits of Interior Home Painting</h3>
                    <ul className="benefits-items">
                        <li className="benefits-item"><span>Aesthetic Transformation:</span> A fresh coat of paint can completely transform the look and feel of your space.</li>
                        <li className="benefits-item"><span>Enhanced Ambiance:</span> Paint color choices can create the desired ambiance and mood in your home.</li>
                        <li className="benefits-item"><span>Property Value:</span> Well-executed interior painting can increase the value of your property.</li>
                        <li className="benefits-item"><span>Aesthetic Transformation:</span> Experienced painters ensure a professional and flawless finish.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InteriorPainting