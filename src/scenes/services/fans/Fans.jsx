import React from 'react'
import Hero from '../../../components/templates/hero/Hero'
import fansImg from '../../../assets/fans.jpg'
import Form1 from '../../../components/inquiryForms/form1/Form1'
import Process1 from '../../../components/process1/Process1'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'
import Container1 from '../../../components/templates/container1/container1'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import materialImg from '../../../assets/material.jpg'
import constructionImg from '../../../assets/construction.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import completeImg from '../../../assets/complete.jpg'

const Fans = () => {
  return (
    <div className="display1-container">
        <Hero img={fansImg} title={'Ceiling & Bath Fans.'} />
        <div className="display1-body">
            <div>
                <h2>Ceiling & Bath Fan Installation Service</h2>
                <br />
                <p>we understand the importance of proper ventilation in your home. Whether you need to install or replace ceiling and bath fans, our professional installation services are designed to enhance the air quality, comfort, and safety of your living spaces. Our skilled technicians are committed to ensuring your fans are not only functional but also efficiently circulate air and meet industry standards.</p>
            </div>
            <Form1 name={"Fan(s) Installation"} category={"Electrical"} />
            <Container1 aos={'fade-up'}>
                <h3>Ceiling Fan Installation:</h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>Standard Ceiling Fans:</span> Install traditional ceiling fans for improved air circulation and cooling.</li>
                    <li className="container1-item"><span>Ceiling Fans with Lights:</span> Add fans with integrated lighting for dual functionality.</li>
                    <li className="container1-item"><span>Energy-Efficient Fans:</span> Upgrade to energy-efficient ceiling fans that help lower electricity costs.</li>
                    <li className="container1-item"><span>Remote Control Fans:</span> Enjoy the convenience of remote control fans for effortless operation.</li>
                    <li className="container1-item"><span>Smart Ceiling Fans:</span> Integrate smart ceiling fans into your home automation system for remote control and energy management.</li>
                </ul>
                <br />
                <h3>Bath Fan Installation: </h3>
                <ul className="container1-items">
                   <li className="container1-item"><span>Standard Bath Fans:</span> Install or replace bath fans to improve ventilation in your bathroom, reducing humidity and preventing mold and mildew.</li>
                   <li className="container1-item"><span>Energy-Efficient Bath Fans:</span> Upgrade to energy-efficient bath fans that provide effective ventilation while conserving energy.</li>
                   <li className="container1-item"><span>Quiet Bath Fans:</span> Choose quiet bath fans for a peaceful and relaxing bathroom environment.</li>
                   <li className="container1-item"><span>Timer and Humidity-Sensing Fans:</span> Opt for bath fans with timer and humidity-sensing features for automated operation.</li>
                   <li className="container1-item"><span>Upgraded Ventilation Systems:</span> We can assess and install or upgrade your entire home's ventilation system for improved air quality.</li>
                </ul>
            </Container1>
        </div>
        <Process1>
            <ProcessCard img={consultationImg} aos={'fade-right'} >
                    <h4>Initial Consultation: Understanding Your Needs</h4>
                    <p>We begin with a consultation to discuss your goals and specific requirements.</p>
                    <ul>
                        <li>Discuss the areas where fan installation is needed and assess your project goals.</li>
                        <li>eview your existing electrical systems and identify any necessary upgrades.</li>
                        <li>Provide a clear timeline for the fan installation project and schedule a convenient appointment.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={bluePrintImg} aos={'fade-left'}>
                    <h4>Customized Plan and Design: Tailoring the Solution</h4>
                    <p>Based on our consultation and assessment, we create a customized plan for your fan installation project. This includes:</p>
                    <ul>
                        <li>Selecting the appropriate fans that meet your cooling and ventilation needs.</li>
                        <li>Determining the scope of work, whether it involves installation, wiring, or any electrical upgrades.</li>
                        <li>Addressing any special requests or design considerations you may have for the fan installation.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={fansImg} aos={'fade-right'}>
                    <h4>Precise Installation: Meticulous and Comprehensive</h4>
                    <p>Our skilled technicians work diligently to complete your fan installation project. This includes:</p>
                    <ul>
                        <li>Installing fans and connecting them to your electrical system.</li>
                        <li>Ensuring fans are securely mounted, level, and meet safety standards.</li>
                        <li>Testing each fan to guarantee proper functionality.</li>
                        <li>Conducting safety checks to confirm compliance with industry standards.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={inspectImg} aos={'fade-left'} >
                    <h4>Final Inspection and Clean-Up: Ensuring Excellence</h4>
                    <p>Before we consider the project complete, our team conducts a comprehensive final inspection. This step includes:</p>
                    <ul>
                        <li>Thoroughly reviewing each installed fan to ensure it functions correctly.</li>
                        <li>Checking for any potential issues, such as loose connections or wiring problems.</li>
                        <li>Cleaning up the work area, removing any installation debris, and leaving your space tidy and ready for use.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={walkThroughImg} aos={'fade-right'} >
                <h4>Client Walkthrough: Your Satisfaction is Our Priority</h4>
                <p>We invite you to join us for a client walkthrough, during which you can test each installed fan and ensure they meet your expectations. This is your opportunity to:</p>
                <ul>
                    <li>Verify that the fans work as desired and provide efficient air circulation and ventilation.</li>
                    <li>Ask any questions or request further adjustments if necessary.</li>
                    <li>Confirm your satisfaction with the finished project.</li>
                </ul>
            </ProcessCard>
        </Process1>
        <div data-aos='fade-up' style={{position: 'relative', marginBottom: '20vh'}} className="benefits">
            <div className="benefits">
                <h3>Benefits of New Fan Installation</h3>
                <ul className="benefits-items">
                    <li className="benefits-item"><span>Improved Air Quality:</span> Proper ventilation reduces humidity, prevents mold and mildew, and enhances air quality.</li>
                    <li className="benefits-item"><span>Energy Efficiency:</span> Energy-efficient fans can lower electricity costs while providing effective air circulation.</li>
                    <li className="benefits-item"><span>Enhanced Comfort:</span> Ceiling and bath fans improve cooling and ventilation, creating a more comfortable living environment.</li>
                    <li className="benefits-item"><span>Convenience:</span> Remote control and smart fan options offer effortless operation and energy management.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Fans