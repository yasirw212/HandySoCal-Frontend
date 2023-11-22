import React from 'react'
import Hero2 from '../../../components/hero2/Hero2'
import dryWallImg from '../../../assets/drywall.jpg'
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


const DryWall = () => {
  return (
    <div className='display2-container' >
        <Hero2 img={dryWallImg} >
        </Hero2>    
        <div className="display2-intro">
            <div className="display2-card">
                <h1 className='display2-title'>Dry Wall</h1>
                <p>At Handy SoCal, we understand the importance of flawless walls and ceilings in your home or business. Our drywall services are tailored to provide you with beautifully finished surfaces that enhance the aesthetics and functionality of your space. Explore our comprehensive drywall services.</p>
                <Form2 category={'Home Improvement'} name={'Dry Wall'}>
                    <div>
                        <label htmlFor="service">Walls</label>
                        <select name="service" id="">
                            <option value="Walls Needed: 1">1</option>
                            <option value="Walls Needed: 2">2</option>
                            <option value="Walls Needed: 3">3</option>
                            <option value="Walls Needed: 4">4</option>
                            <option value="Walls Needed: 5+">5+</option>
                        </select>
                    </div> 
                </Form2>
                <img src={logoIcon} width={30} alt="" />
            </div>
        </div>
        <div className="display2-body">
            <div  className="display2-services">
                <h2 className='display2-title'>Our Dry Wall Services </h2>
                <Container2 data-aos='fade-up'>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Drywall Installation</h3>
                        <div className="feature-bar"></div>
                        <p>Install new drywall to create walls and ceilings that form the foundation for your interior spaces.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Drywall Repair</h3>
                        <div className="feature-bar"></div>
                        <p>Fix holes, cracks, dents, and other imperfections in existing drywall to restore a seamless look.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Drywall Finishing</h3>
                        <div className="feature-bar"></div>
                        <p>Achieve a smooth, textured, or custom finish that matches your aesthetic preferences.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Drywall Patching</h3>
                        <div className="feature-bar"></div>
                        <p>Patch up and blend in areas where drywall has been damaged or removed.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Drywall Texture Matching</h3>
                        <div className="feature-bar"></div>
                        <p>Match and replicate existing wall or ceiling textures for a seamless look.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Drywall Painting</h3>
                        <div className="feature-bar"></div>
                        <p>Prepare your drywall for painting, ensuring a smooth surface for a flawless finish.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Soundproofing and Insulation</h3>
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
                    <p>We begin with a consultation to understand your drywall requirements. During this phase, we:</p>
                    <ul>
                       <li>Discuss the areas where drywall installation or repair is needed.</li>
                       <li>Assess the level of work required, whether it's new installation, patching, or finishing.</li>
                       <li>Provide a clear timeline for the drywall project and schedule a convenient appointment.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={bluePrintImg} aos={'fade-left'}>
                    <h4>Customized Plan and Design: Tailoring the Solution</h4>
                    <p>Based on our consultation and assessment, we create a customized plan for your drywall project. This includes:</p>
                    <ul>
                        <li>Selecting the appropriate drywall materials and finishes for the specific project.</li>
                        <li>Determining the scope of work, whether it involves installation, repair, or finishing.</li>
                        <li>An itemized project proposal for transparency and budget accuracy.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={dryWallImg} aos={'fade-right'}> 
                    <h4>Precise Installation and Repair: Meticulous and Comprehensive</h4>
                    <p>Our skilled craftsmen work diligently to install or repair your drywall. This includes:</p>
                    <ul>
                        <li>Measuring, cutting, and securing drywall sheets with precision.</li>
                        <li>Applying joint compound, tape, and finishes for a seamless surface.</li>
                        <li>Conducting expert repairs to holes, cracks, or water damage.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={inspectImg} aos={'fade-left'}>
                    <h4>Quality Inspection: Ensuring Excellence</h4>
                    <p>Before considering the project complete, we conduct a thorough quality inspection. This includes:</p>
                    <ul>
                        <li>Ensuring that every area of drywall has been installed or repaired to our high standards.</li>
                        <li>Double-checking that all drywall tasks have been completed according to the customized plan.</li>
                        <li>Verifying that the drywall is smooth, seamless, and ready for painting or finishing.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={walkThroughImg} aos={'fade-right'}>
                    <h4>Client Walkthrough: Your Satisfaction Matters</h4>
                    <p>We invite you to join us for a client walkthrough, during which you can inspect the completed drywall project and ensure it meets your expectations. This is your opportunity to:</p>
                    <ul>
                        <li>Verify that the drywall aligns with the agreed-upon plan and meets your specific requirements.</li>
                        <li>Ask any questions or request touch-ups if necessary.</li>
                        <li>Confirm your satisfaction with the appearance and functionality of the drywall.</li>
                    </ul>
                </ProcessCard>
            </Process1>
            <div data-aos='fade-up' className="benefits">
                <div className="benefits">
                    <h3>Benefits of Professional Dry Wall</h3>
                    <ul className="benefits-items">
                        <li className="benefits-item"><span>Safety:</span> Proper electrical work ensures the safety of your home or business.</li>
                        <li className="benefits-item"><span>Energy Efficiency:</span> Efficient electrical components can lead to lower utility bills.</li>
                        <li className="benefits-item"><span>Functionality:</span> Electrical upgrades enhance the functionality of your space.</li>
                        <li className="benefits-item"><span>Property Value:</span> High-quality electrical work can increase your property's resale value.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DryWall