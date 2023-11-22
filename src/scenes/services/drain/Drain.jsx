import React from 'react'
import Hero from '../../../components/templates/hero/Hero'
import drainImg from '../../../assets/drain.jpg'
import Form1 from '../../../components/inquiryForms/form1/Form1'
import Container1 from '../../../components/templates/container1/container1'
import Process1 from '../../../components/process1/Process1'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import materialImg from '../../../assets/material.jpg'
import constructionImg from '../../../assets/construction.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import completeImg from '../../../assets/complete.jpg'

const Drain = () => {
  return (
    <div className='display1-container'>
        <Hero img={drainImg} title={'Drain Repair.'} />
        <div className="display1-body">
            <div>
                <h2 className=''>Choose Us for Your Drain Repair Needs</h2>
                <br />
                <p className='container1-body'>Whether it's a clogged kitchen sink, a slow-draining shower, or a backed-up sewer line, our professional drain repair services are here to ensure your plumbing system operates smoothly.</p>
            </div>
            <Form1 name={'Drain Repair'} category={'Plumbing'} aos={'fade-up'} />
            <Container1 aos={'fade-up'}>
                <h3>Drain Repair Services:</h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>Clogged Drain Repair:</span> Address and clear clogs in kitchen sinks, bathroom sinks, showers, tubs, and more.</li>
                    <li className="container1-item"><span>Slow-Draining Drain Repair:</span> Investigate and resolve issues causing slow drainage in sinks and tubs.</li>
                    <li className="container1-item"><span>Toilet Drain Repair:</span> Repair clogs and blockages in toilet drains to prevent overflows.</li>
                    <li className="container1-item"><span>Sewer Line Repair:</span> Address and repair issues in main sewer lines to prevent sewage backup.</li>
                    <li className="container1-item"><span>Drain Leak Repair:</span> Fix leaks in drain pipes to prevent water damage and mold growth.</li>
                    <li className="container1-item"><span>Pipe Repair and Replacement:</span> Repair damaged or corroded drain pipes or replace sections as necessary.</li>
                </ul>
            </Container1>
        </div>
        <Process1>
            <ProcessCard img={consultationImg} aos={'fade-right'}>
                <h4>Drain Inspection: Identifying the Issue</h4>
                <p>We begin with a comprehensive drain inspection to identify the cause of the issue. During this phase, we:</p>
                <ul>
                    <li>Evaluate the type of drain issues you're experiencing, whether it's clogs, leaks, or slow drainage.</li>
                    <li>Provide a clear explanation of the issue and our proposed solution.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={bluePrintImg} aos={'fade-left'}>
                <h4>Customized Repair Plan: Tailoring the Solution</h4>
                <p>Based on our inspection, we create a customized repair plan that suits your specific needs. This includes:</p>
                <ul>
                    <li>Selecting the appropriate tools and techniques to address the drain issue.</li>
                    <li>Determining the scope of repair and providing a detailed timeline for completion.</li>
                    <li>Discussing any special considerations or concerns you may have about the repair.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={drainImg} aos={'fade-right'}>
                <h4>Drain Repair and Maintenance: Swift and Effective</h4>
                <p>With your space ready, our skilled technicians will get to work, ensuring that the drain repair is carried out with precision and efficiency. This stage involves:</p>
                <ul>
                    <li>Using advanced diagnostic tools to pinpoint the exact location and cause of the drain problem.</li>
                    <li>Implementing the appropriate repair technique, whether it's clearing clogs, sealing leaks, or replacing pipes.</li>
                    <li>Conducting quality checks to ensure that the drain is functioning as expected.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={inspectImg} aos={'fade-left'}>
                <h4>Final Inspection and Clean-Up: Ensuring Excellence</h4>
                <p>Before we consider the project complete, our team conducts a comprehensive final inspection. This step includes:</p>
                <ul>
                    <li>Thoroughly reviewing the repaired drain to ensure it meets our high-quality standards.</li>
                    <li>Checking for any potential issues or discrepancies and making necessary adjustments.</li>
                    <li>Cleaning up the work area, removing any debris, and leaving your space clean and ready for use.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={walkThroughImg} aos={'fade-right'}>
                <h4>Client Walkthrough: Your Satisfaction Matters</h4>
                <p>We invite you to join us for a client walkthrough, during which you can inspect the completed service. This is your opportunity to:</p>
                <ul>
                    <li>Ensure that the drain issue has been fully addressed, and the drainage is functioning properly.</li>
                    <li>Ask any questions or request further adjustments if necessary.</li>
                    <li>Confirm your satisfaction with the finished drain.</li>
                </ul>
            </ProcessCard>
        </Process1>
        <div data-aos='fade-up' style={{position: 'relative', marginBottom: '20vh'}} className="benefits">
            <div className="benefits">
                <h3>Benefits of Professional Drain Repair Services</h3>
                <ul className="benefits-items">
                    <li className="benefits-item"><span>Preventive Measures:</span> Professional repair can prevent future issues and costly repairs.</li>
                    <li className="benefits-item"><span>Prevent Property Damage:</span> Timely repairs prevent water damage to your property.</li>
                    <li className="benefits-item"><span>Improved Drainage:</span> Properly functioning drains improve daily convenience and hygiene.</li>
                    <li className="benefits-item"><span>Health and Safety:</span> Drain issues can be unhygienic; our repairs restore a healthy environment.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Drain