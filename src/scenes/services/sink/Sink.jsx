import React from 'react'
import Hero from '../../../components/templates/hero/Hero'
import sinkImg from '../../../assets/sink.jpg'
import Form1 from '../../../components/inquiryForms/form1/Form1'
import Container1 from '../../../components/templates/container1/container1'
import Process1 from '../../../components/process1/Process1'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import materialImg from '../../../assets/material.jpg'
import constructionImg from '../../../assets/sinkWork.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import completeImg from '../../../assets/complete.jpg'

const Sink = () => {
  return (
    <div className="display1-container">
        <Hero img={sinkImg} title={'Sink Services.'} />
        <div className="display1-body">
            <div>
                <h2>Need Help With Your Sink?</h2>
                <br />
                <p>Sinks are essential for everyday activities, from cooking in the kitchen to washing hands in the bathroom. Our professional sink services are designed to ensure that your sinks are functioning perfectly and that any issues are addressed promptly.</p>
            </div>
            <Form1 >
                <label htmlFor="service">Service Required:</label>
                <select name="service" id="">
                    <option value="installation">Installation</option>
                    <option value="replacement">Replacement</option>
                    <option value="repair">Repair</option>
                </select>
            </Form1>
            <Container1 aos={'fade-up'}>
                <h3>Sink Installation:</h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>Kitchen Sink Installation:</span> Install or replace kitchen sinks to enhance the functionality and appearance of your kitchen.</li>
                    <li className="container1-item"><span>Bathroom Sink Installation:</span> Set up bathroom sinks, whether it's a pedestal sink, undermount sink, or wall-mounted sink.</li>
                    <li className="container1-item"><span>Commercial Sink Installation:</span> Install sinks in commercial spaces such as restaurants, offices, and medical facilities.</li>
                    <li className="container1-item"><span>Bar Sink Installation:</span> Set up bar sinks for home or commercial bars for convenience and cleanliness.</li>
                    <li className="container1-item"><span>Utility Sink Installation:</span> Install utility sinks in laundry rooms, garages, and other utility spaces.</li>
                </ul>
                <h3 style={{marginTop: '2.5rem'}}>Sink Repair:</h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>Leak Repair:</span> Address and fix sink leaks to prevent water damage and water wastage.</li>
                    <li className="container1-item"><span>Clog Removal:</span> Remove clogs in sink drains, ensuring smooth water flow and preventing backups.</li>
                    <li className="container1-item"><span>Faucet Repair:</span> Repair or replace faucets that are dripping, leaking, or not functioning properly.</li>
                    <li className="container1-item"><span>Drain Repair:</span> Fix damaged or corroded sink drains to prevent water leakage.</li>
                    <li className="container1-item"><span>Sink Basin Repair:</span> Repair or replace sink basins that are chipped, cracked, or damaged.</li>
                    <li className="container1-item"><span>Piping and Plumbing Repair:</span> Address piping and plumbing issues that affect sink functionality.</li>
                </ul>
                <h3 style={{marginTop: '2.5rem'}}>Sink Replacement:</h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>Sink Upgrade:</span> Replace your current sink with a newer model to improve aesthetics and functionality.</li>
                    <li className="container1-item"><span>Emergency Sink Replacement:</span> Replace sinks that are damaged beyond repair or pose a safety hazard.</li>
                    <li className="container1-item"><span>Commercial Sink Replacement:</span> Upgrade or replace commercial sinks to meet changing needs.</li>
                </ul>
            </Container1>
        </div>
        <Process1>
            <ProcessCard aos={'fade-right'} img={consultationImg}>
                <h4> Initial Consultation: Assessing Your Needs</h4>
                <p>We begin with a consultation to understand your specific sink service requirements. During this phase, we:</p>
                <ul>
                    <li>Discuss your goals for the sink service, such as installation, repair, or maintenance.</li>
                    <li>Evaluate the current state of your sink and the issues you may be facing.</li>
                    <li>Provide design options and material recommendations to match your vision.</li>
                </ul>
            </ProcessCard>
            <ProcessCard aos={'fade-left'} img={bluePrintImg}>
                <h4>Customized Plan and Material Selection: Tailoring the Solution</h4>
                <p>Based on our consultation and assessment, we create a customized plan for your sink service project. This includes:</p>
                <ul>
                    <li>Selecting the appropriate materials, fixtures, and components that align with your vision and functional requirements.</li>
                    <li>Determining the scope of work, whether it involves sink installation, repair, or maintenance.</li>
                    <li>Addressing any special requests or design considerations you may have for your sink.</li>
                </ul>
            </ProcessCard>
            <ProcessCard aos={'fade-right'} img={constructionImg}>
                <h4>Sink Service: Precision and Efficiency</h4>
                <p>With your space ready, our skilled technicians will get to work, ensuring that the sink service is carried out with precision and efficiency. This stage involves:</p>
                <ul>
                    <li>Installing, repairing, or replacing sinks using the appropriate tools and equipment.</li>
                    <li>Ensuring that all fixtures, drains, and connections are secure and leak-free.</li>
                    <li>Conducting quality checks to ensure that the sink is functioning as expected.</li>
                </ul>
            </ProcessCard>
            <ProcessCard aos={'fade-left'} img={inspectImg}>
                <h4>Final Inspection and Clean-Up: Ensuring Excellence</h4>
                <p>Before we consider the project complete, our team conducts a comprehensive final inspection. This step includes:</p>
                <ul>
                    <li>Thoroughly reviewing the installed or repaired sink to ensure it meets our high-quality standards.</li>
                    <li>Checking for any potential issues or discrepancies and making necessary adjustments.</li>
                    <li>Cleaning up the work area, removing packaging materials, and leaving your space clean and ready for use.</li>
                </ul>
            </ProcessCard>
            <ProcessCard aos={'fade-right'} img={walkThroughImg}>
                <h4>Client Walkthrough: Your Satisfaction Matters</h4>
                <p>We invite you to join us for a client walkthrough, during which you can inspect the completed service. This is your opportunity to:</p>
                <ul>
                    <li>Ensure that the sink meets your expectations, functions properly, and addresses any specific concerns.</li>
                    <li>Ask any questions or request further adjustments if necessary.</li>
                    <li>Confirm your satisfaction with the finished sink service project.</li>
                </ul>
            </ProcessCard>
        </Process1>
        <div data-aos='fade-up'  style={{position: 'relative', marginBottom: '20vh'}} className="benefits">
                <div className="benefits">
                    <h3>Benefits of Professional Sink Services</h3>
                    <ul className="benefits-items">
                        <li className="benefits-item"><span>Proper Installation:</span> Expert installation ensures that your sink is securely in place and functions as intended.</li>
                        <li className="benefits-item"><span>Timely Repairs:</span> Prompt repair services prevent further damage and save you money in the long run.</li>
                        <li className="benefits-item"><span>Functional Upgrades:</span> Sink replacements can enhance the functionality and aesthetics of your space.</li>
                        <li className="benefits-item"><span>Leak Prevention:</span> Properly installed and repaired sinks prevent water leaks and water damage.</li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Sink