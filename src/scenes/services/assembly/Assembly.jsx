import React from 'react'
import Hero from '../../../components/templates/hero/Hero'
import Container1 from '../../../components/templates/container1/container1'
import Form1 from '../../../components/inquiryForms/form1/Form1'
import assemblyImg from '../../../assets/assembly.jpg'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import Process1 from '../../../components/process1/Process1'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'

const Assembly = () => {
  
    return (
    <div className='display1-container'>
        <Hero img={assemblyImg} title={'Furniture Assembly.'} />
        <div className="display1-body">
            <div className="carpentry-intro">
                <h2>Why Choose Us for Your Assembly Needs?</h2>
                <p>Whether you have just moved into a new home, relocated your office, or purchased new furniture, our professional furniture assembly services are here to make your life easier. We take the hassle out of assembly, ensuring that your furniture is perfectly assembled, sturdy, and ready to use.</p>
            </div>
            <Form1 name={'Furniture Assembly'} category={'Assembly'} ></Form1>
            <Container1 aos={'fade-up'}>
                <h3>Home Assembly Services:</h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>Bed Frame Assembly:</span> Assemble your bed frame for a sturdy and comfortable night's sleep.</li>
                    <li className="container1-item"><span>Table and Chair Assembly:</span> Put together dining tables, chairs, and other pieces for your dining room or kitchen.</li>
                    <li className="container1-item"><span>Bookshelf and Shelving Unit Assembly:</span> Assemble bookshelves and shelving units for organized storage.</li>
                    <li className="container1-item"><span>Cabinet Assembly:</span> Assemble kitchen cabinets, bathroom vanities, and other storage solutions.</li>
                    <li className="container1-item"><span>Wardrobe and Closet Assembly:</span> Put together wardrobes and closets to keep your clothes organized.</li>
                    <li className="container1-item"><span>Dresser and Drawer Assembly:</span> Assemble dressers and drawer units for your bedroom or living space.</li>
                    <li className="container1-item"><span>Sofa and Couch Assembly:</span> Set up sofas and couches to create a comfortable seating area.</li>
                    <li className="container1-item"><span>Outdoor Furniture Assembly:</span> Assemble outdoor furniture to create a relaxing and functional outdoor space.</li>
                    <li className="container1-item"><span>Exercise Equipment Assembly:</span> Assemble exercise machines, home gym equipment, and fitness accessories.</li>
                </ul>
                <h3 style={{marginTop: '2.5rem'}}>Office Assembly Services:</h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>Desk and Workstation Assembly:</span> Assemble office desks, workstations, and computer desks for a productive workspace.</li>
                    <li className="container1-item"><span>Office Chair Assembly:</span> Put together ergonomic office chairs for comfort during long work hours.</li>
                    <li className="container1-item"><span>File Cabinet Assembly:</span> Assemble file cabinets for organized document storage.</li>
                    <li className="container1-item"><span>Conference Table Assembly:</span> Set up conference and meeting room tables for professional spaces.</li>
                    <li className="container1-item"><span>Cubicle Assembly:</span> Assemble office cubicles for efficient workspace organization.</li>
                    <li className="container1-item"><span>Reception Area Furniture Assembly:</span> Set up reception desks and seating for welcoming office spaces.</li>
                    <li className="container1-item"><span>Shelving and Storage Unit Assembly:</span> Assemble office shelves and storage units for a well-organized office.</li>
                    <li className="container1-item"><span>Light Fixture and Decor Assembly:</span> Install and assemble lighting fixtures, artwork, and office decor.</li>
                </ul>
            </Container1>
        </div>
        <Process1>
            <ProcessCard img={consultationImg} aos={'fade-right'}>
                <h4>Consultation and Scheduling: Understanding Your Needs</h4>
                <p>We start with a consultation to understand your assembly requirements. During this phase, we will:</p>
                <ul>
                    <li>Discuss the items you need to be assembled and gather relevant information.</li>
                    <li>Provide a clear timeline for the assembly project and schedule a convenient appointment.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={bluePrintImg} aos={'fade-left'}>
                <h4>Efficient Assembly: Expert Installation</h4>
                <p>Our skilled assembly team will arrive at the scheduled time and work diligently to assemble your items efficiently and accurately. This includes:</p>
                <ul>
                    <li>Reading and understanding the assembly instructions for each item.</li>
                    <li>Properly assembling the item while following manufacturer guidelines and best practices.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={inspectImg} aos={'fade-right'}>
                <h4>Quality Inspection: Ensuring Excellence</h4>
                <p>Before considering the assembly project complete, we conduct a thorough quality inspection. This includes:</p>
                <ul>
                    <li>Thoroughly reviewing each assembled piece to ensure it meets our high-quality standards.</li>
                    <li>Ensuring all connections and fastenings are secure.</li>
                    <li>Verifying that the item has been assembled correctly and is ready for use.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={walkThroughImg} aos={'fade-left'}>
                <h4>Client Walkthrough: Your Satisfaction Matters</h4>
                <p>We invite you to join us for a client walkthrough, during which you can inspect the assembled items and ensure they meet your expectations. This is your opportunity to:</p>
                <ul>
                    <li>Verify that the assembly aligns with the agreed-upon plan and meets your specific requirements.</li>
                    <li>Ask any questions or request further adjustments if necessary.</li>
                    <li>Confirm your satisfaction with the finished furniture assembly project.</li>
                </ul>
            </ProcessCard>
        </Process1>
        <div style={{position: 'relative', marginBottom: '20vh'}} className="benefits">
            <div className="benefits">
                <h3>Benefits of Professional Assembly Services</h3>
                <ul className="benefits-items" data-aos='fade-up'>
                    <li className="benefits-item"><span>Time and Effort Saved:</span> We take care of the assembly work, saving you time and effort.</li>
                    <li className="benefits-item"><span>Correct Assembly:</span> We ensure that products are assembled correctly, reducing the risk of issues.</li>
                    <li className="benefits-item"><span>Safety Assurance:</span> Expert assembly reduces the risk of accidents and structural failures.</li>
                    <li className="benefits-item"><span>Product Warranty Compliance:</span> Our assembly services help maintain product warranties.</li>
                    <li className="benefits-item"><span>Ready for Use:</span> Assembled products are ready for immediate use, with no hassle.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Assembly