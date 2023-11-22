import React from 'react'
import Hero2 from '../../../components/hero2/Hero2'
import outletImg from '../../../assets/outlet.jpg'
import logoIcon from '../../../assets/logo-icon.png'
import Process1 from '../../../components/process1/Process1'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import Container2 from '../../../components/templates/container2/Container2'
import Form2 from '../../../components/inquiryForms/form2/Form2'

const ElectricalFixtures = () => {
  return (
    <div className='display2-container'>
        <Hero2 img={outletImg} />
        <div className="display2-intro">
            <div className="display2-card">
                <h1 className='display2-title'>Electrical Fixtures</h1>
                <p>Whether you're looking to upgrade your lighting fixtures, outlets, or switches, our professional electrical fixture services are designed to enhance the safety, efficiency, and aesthetics of your space. Our skilled electricians are committed to ensuring your electrical fixtures are not only functional but also safe and compliant with industry standards.</p>
                <Form2 name={'Electrical Fixtures'} category={'Electrical'}>
                    <div>
                        <label htmlFor="service">Service Needed:</label>
                        <select name="service" id="">
                            <option value="Light Switch Installation">Light Switch Installation</option>
                            <option value="Outlet Installation">Outlet Installation</option>
                            <option value="Light Fixture(s) Installation">Lighting Fixture(s)</option>
                        </select>
                    </div> 
                </Form2>
                <img src={logoIcon} width={30} alt="" />
            </div>
        </div>
        <div className="display2-body">
            <div data-aos={'fade-up'} className="display2-services">
                <h2 className='display2-title'>Light Fixture Installation Services </h2>
                <Container2 >
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Chandeliers</h3>
                        <div className="feature-bar"></div>
                        <p>Install elegant chandeliers to create a sophisticated focal point in your living and dining spaces.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Pendant Lights</h3>
                        <div className="feature-bar"></div>
                        <p>Add pendant lights for stylish and functional illumination over dining tables and kitchen islands.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Recessed Lighting</h3>
                        <div className="feature-bar"></div>
                        <p>Install recessed lights to provide even and unobtrusive illumination in any room.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Outdoor Lighting</h3>
                        <div className="feature-bar"></div>
                        <p>Illuminate your outdoor spaces with a range of outdoor fixtures for safety and ambiance.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Energy-Efficient Fixtures</h3>
                        <div className="feature-bar"></div>
                        <p>Upgrade to energy-efficient lighting fixtures for cost savings and environmental benefits.</p>
                    </div>
                </Container2>
            </div>
            <div data-aos='fade-up' className="display2-services">
                <h2 className='display2-title'>Light Switch Installation Services </h2>
                <Container2 >
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Single-Pole Switches</h3>
                        <div className="feature-bar"></div>
                        <p>Install standard single-pole switches for basic on/off control of lights.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Three-Way Switches</h3>
                        <div className="feature-bar"></div>
                        <p>Set up three-way switches to control lights from two different locations.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Dimmer Switches</h3>
                        <div className="feature-bar"></div>
                        <p>Add dimmer switches to adjust lighting intensity and create the desired ambiance.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>GFCI Switches</h3>
                        <div className="feature-bar"></div>
                        <p>Enhance safety with Ground Fault Circuit Interrupter (GFCI) switches in areas prone to moisture.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Toggle and Decorator Switches</h3>
                        <div className="feature-bar"></div>
                        <p>Toggle and Decorator Switches</p>
                    </div>
                </Container2>
            </div>
            <div className="display2-services">
                <h2 data-aos={'fade-up'} className='display2-title'>Outlet Installation Services </h2>
                <Container2>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Standard Outlets</h3>
                        <div className="feature-bar"></div>
                        <p>nstall or replace standard electrical outlets for general use.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>GFCI Outlet</h3>
                        <div className="feature-bar"></div>
                        <p>Enhance safety with Ground Fault Circuit Interrupter (GFCI) outlets in areas prone to moisture.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>USB Outlets</h3>
                        <div className="feature-bar"></div>
                        <p>Upgrade your outlets with built-in USB ports for charging convenience.</p>
                    </div>
                    <div data-aos={'fade-up'} className="container2-item">
                        <h3>Dedicated Circuits</h3>
                        <div className="feature-bar"></div>
                        <p>Install dedicated circuits for appliances and heavy-duty equipment.</p>
                    </div>
                </Container2>
            </div>
        </div>
        <div className="display2-footer">
            <Process1>
                <ProcessCard img={consultationImg} aos={'fade-right'}>
                    <h4> Initial Consultation: Understanding Your Needs</h4>
                    <p>We begin with a comprehensive consultation to discuss your goals andspecific requirements. During this phase, we will:</p>
                    <ul>
                        <li>Evaluate the areas where you want to install or replace light switches and outlets.</li>
                        <li>Review your specific preferences, such as the type of switches and outlets and their locations.</li>
                        <li>Discuss any additional features or smart switch options you may be interested in.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={bluePrintImg} aos={'fade-left'}>
                    <h4>Selection and Preparation: Planning the Installation</h4>
                    <p>Following the initial consultation, we will help you select the right switches, outlets, and configurations for your project. We'll also plan the installation process, including the placement and wiring requirements.</p>
                </ProcessCard>
                <ProcessCard img={outletImg} aos={'fade-right'}> 
                    <h4> Installation: Precision and Safety</h4>
                    <p>With your electrical setup planned, our skilled electricians will get to work, ensuring that the installation is carried out with precision and safety in mind. This stage involves:</p>
                    <ul>
                        <li>Installing switches and outlets and connecting them to your electrical system.</li>
                        <li>Ensuring switches and outlets are level and securely mounted.</li>
                        <li>Testing each switch and outlet to guarantee proper functionality.</li>
                        <li>Conducting safety checks to confirm compliance with electrical codes.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={inspectImg} aos={'fade-left'}>
                    <h4>Final Inspection and Clean-Up: Ensuring Excellence</h4>
                    <p>Before we consider the project complete, our team conducts a comprehensive final inspection. This step includes:</p>
                    <ul>
                        <li>Thoroughly reviewing each installed switch and outlet to ensure they function correctly.</li>
                        <li>Checking for any potential issues, such as loose connections or wiring problems.</li>
                        <li>Cleaning up the work area, removing any installation debris, and leaving your space tidy and ready for use.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={walkThroughImg} aos={'fade-right'}>
                    <h4>Client Walkthrough: Your Satisfaction Matters</h4>
                    <p>We invite you to join us for a client walkthrough, during which you can test each installed switch and outlet and ensure they meet your expectations. This is your opportunity to:</p>
                    <ul>
                        <li>Verify that the switches and outlets work as desired and control lighting and appliances effectively.</li>
                        <li>Confirm your satisfaction with the finished light switch and outlet installation project.</li>
                    </ul>
                </ProcessCard>
            </Process1>
            <div data-aos={'fade-up'} className="benefits">
                <div className="benefits">
                    <h3>Benefits</h3>
                    <ul className="benefits-items">
                        <li className="benefits-item"><span>Improved Illumination:</span> Upgraded lighting fixtures provide better illumination and enhance ambiance.</li>
                        <li className="benefits-item"><span>Efficiency:</span> New switches and outlets enhance the efficiency of your electrical system.</li>
                        <li className="benefits-item"><span>Convenience:</span> Smart switches and USB outlets offer advanced functionality and convenience.</li>
                        <li className="benefits-item"><span>Safety:</span> Proper installation ensures switches and outlets operate safely and reliably.</li>
                        <li className="benefits-item"><span>Versatility:</span> Different switch types and outlet configurations are available to meet your specific needs.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ElectricalFixtures