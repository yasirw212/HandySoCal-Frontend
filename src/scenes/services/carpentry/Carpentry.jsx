import React from 'react'
import Hero from '../../../components/templates/hero/Hero'
import carpentryImg from '../../../assets/carpentry.jpg'
import Form1 from '../../../components/inquiryForms/form1/Form1'
import Container1 from '../../../components/templates/container1/container1'
import Process1 from '../../../components/process1/Process1'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import materialImg from '../../../assets/woodMaterial.jpg'
import constructionImg from '../../../assets/woodWork.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import completeImg from '../../../assets/complete.jpg'

const Carpentry = () => {
  return (
    <div className="display1-container">
        <Hero img={carpentryImg} title={'Carpentry.'} />
        <div className="display1-body">
            <div className="carpentry-intro">
                <h2>Why Choose Us for Your Carpentry Needs?</h2>
                <br />
                <p>We are the carpentry experts you can rely on for all your woodworking needs. Our experienced carpenters are skilled in crafting custom pieces, repairing furniture, and enhancing the aesthetics and functionality of your space. Explore our comprehensive carpentry services:</p>
            </div>
            <Form1 name={'Carpentry'} category={'Home Improvement'} />
            <Container1>
                <h3>Carpentry Services:</h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>Furniture Repair and Restoration:</span> Restore and repair damaged or worn-out furniture to its former glory.</li>
                    <li className="container1-item"><span>Cabinet Installation and Repairs:</span> Install new cabinets or repair and refinish existing ones for kitchens, bathrooms, and more.</li>
                    <li className="container1-item"><span>Built-Ins and Bookcases:</span> Add custom built-ins, bookcases, and storage solutions to enhance the functionality and aesthetics of your space.</li>
                    <li className="container1-item"><span>Trim and Molding:</span> Install or replace trim, baseboards, crown molding, and other decorative elements to give your space a polished look.</li>
                    <li className="container1-item"><span>Wooden Stairs and Railings:</span> Design and construct wooden stairs and railings that are both functional and visually appealing.</li>
                    <li className="container1-item"><span>Deck and Patio Carpentry:</span> Build, repair, or enhance your deck or patio with custom carpentry work, including railings, pergolas, and seating.</li>
                </ul>
            </Container1>
        </div>
        <Process1>
            <ProcessCard img={consultationImg} aos={'fade-right'}>
                <h4> Initial Consultation: Understanding Your Vision</h4>
                <p>We begin with a comprehensive consultation to understand your vision. During this phase, we will:</p>
                <ul>
                    <li>Explore your vision for the carpentry project, including design, dimensions, and functionality.</li>
                    <li>Review your specific goals and objectives for the project.</li>
                    <li>Discuss budget considerations and any constraints to create a realistic plan.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={bluePrintImg} aos={'fade-left'}>
                <h4>Design and Planning: Crafting Your Unique Piece</h4>
                <p>Based on our consultation, we develop a customized design plan tailored to your project. This includes:</p>
                <ul>
                    <li>Creating detailed design sketches or blueprints to visualize the final piece.</li>
                    <li>Material selection, including wood types, finishes, and hardware.</li>
                    <li>An itemized project proposal for transparency and budget accuracy.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={materialImg} aos={'fade-right'}> 
                <h4>Material Selection: Choosing Quality Wood and Finishes</h4>
                <p> help you select high-quality wood and materials that best suit your design and budget, including:</p>
                <ul>
                    <li>Wood species that match your style and functionality requirements.</li>
                    <li>Finishing details such as stains, paints, and hardware that create the desired look.</li>
                    <li>Any additional materials or accents that enhance the project's aesthetics.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={constructionImg} aos={'fade-left'}>
                <h4>Carpentry Work: Precision and Craftsmanship</h4>
                <p>With your design approved, our skilled craftsmen get to work, executing the plan with precision. This stage involves:</p>
                <ul>
                    <li>Cutting, shaping, and assembling wood components with attention to detail.</li>
                    <li>Ensuring all carpentry work meets industry standards and your expectations.</li>
                    <li>Quality control at every step to guarantee the project's functionality and aesthetics.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={inspectImg} aos={'fade-right'}>
                <h4>Final Inspection: Ensuring Excellence</h4>
                <p>Before we consider the project complete, our team conducts a comprehensive final inspection. This step includes:</p>
                <ul>
                    <li>Ensuring proper alignment, fit, and finish of your custom piece.</li>
                    <li>Checking for any imperfections and addressing them to meet our quality standards.</li>
                    <li>Verifying that the piece meets your specifications and design vision.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={walkThroughImg} aos={'fade-left'}>
                <h4>Client Walkthrough: Your Satisfaction Matters</h4>
                <p>We invite you to join us for a client walkthrough, during which you can inspect the completed carpentry project and ensure it meets your expectations. This is your opportunity to:</p>
                <ul>
                    <li>Verify that the piece aligns with the agreed-upon plan and meets your specific requirements.</li>
                    <li>Ask any questions or request further adjustments if necessary.</li>
                    <li>Confirm your satisfaction with the finished carpentry work.</li>
                </ul>
            </ProcessCard>
        </Process1>
        <div data-aos='fade-up' style={{position: 'relative', marginBottom: '20vh'}} className="benefits">
            <div className="benefits">
                <h3>Benefits of Professional Carpentry Services</h3>
                <ul className="benefits-items">
                    <li className="benefits-item"><span>Enhanced Aesthetics:</span> Custom woodwork and finish carpentry can transform the look and feel of your space.</li>
                    <li className="benefits-item"><span>Added Storage:</span> Custom cabinets, shelves, and wardrobes increase your storage capacity.</li>
                    <li className="benefits-item"><span>Improved Functionality:</span> Structural repairs and exterior improvements enhance your home's functionality and value.</li>
                    <li className="benefits-item"><span>Custom Solutions:</span> Custom furniture and woodwork are tailored to your unique needs and design preferences.</li>
                    <li className="benefits-item"><span>Long-Lasting Results:</span> Quality materials and expert craftsmanship ensure the durability of your carpentry work.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Carpentry