import React from 'react'
import Hero from '../../../components/templates/hero/Hero'
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
import flooringImg from '../../../assets/flooring.jpg'

const Flooring = () => {
  return (
    <div className='display1-container'>
        <Hero img={flooringImg} title={'Flooring.'} />
        <div className="display1-body">
            <div className="deck-intro">
                <h2>Choose Us for Your Flooring  Needs</h2>
                <br />
                <p className='introduction-body'>we take pride in transforming your space with beautiful and durable flooring. Whether you need new flooring installed or existing floors repaired, we're your trusted partner. Our flooring services cover a wide range of materials and styles, allowing you to achieve the look and functionality you desire.</p>
            </div>
            <Form1 name={'Flooring'} category={'Home Improvement'} >
                <label htmlFor="service">installation or repair?</label>
                <select name="service" id="service">
                    <option value="Installation">Installation</option>
                    <option value="Repair">Repair</option>
                </select>
            </Form1>
            <Container1 aos={'fade-up'}>
                <h3>Flooring Installation and Repair Services</h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>Hardwood Flooring Installation:</span> Install beautiful and durable hardwood floors that add warmth and sophistication to your space.</li>
                    <li className="container1-item"><span>Laminate Flooring Installation:</span> Choose cost-effective and stylish laminate flooring that mimics the look of wood, tile, or stone.</li>
                    <li className="container1-item"><span>Tile Flooring Installation:</span> Install ceramic, porcelain, or natural stone tiles to achieve a sleek and modern look.</li>
                    <li className="container1-item"><span>Vinyl and Linoleum Flooring Installation:</span> Opt for resilient and versatile vinyl or linoleum flooring that's easy to maintain.</li>
                    <li className="container1-item"><span>Carpet Installation:</span> Add warmth and comfort to your space with plush and cozy carpeting.</li>
                    <li className="container1-item"><span>Flooring Removal and Replacement:</span> Remove and replace outdated or damaged flooring to give your space a fresh look.</li>
                </ul>
            </Container1>
        </div>
        <Process1>
            <ProcessCard img={consultationImg} aos={'fade-right'}>
                <h4> Initial Consultation: Understanding Your Vision</h4>
                <p>We begin with a comprehensive consultation to discuss your goals, design preferences, and budget. During this phase, we will:</p>
                <ul>
                    <li>Evaluate your flooring requirements, including the scope of work and your expectations.</li>
                    <li></li>
                    <li>Discuss budget considerations and any constraints to create a realistic plan.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={bluePrintImg} aos={'fade-left'}>
                <h4>Design and Planning: Crafting the Blueprint</h4>
                <p>Following the initial consultation, our design experts collaborate with you to create a plan, which includes:</p>
                <ul>
                    <li>Detailed flooring drawings and layouts that visualize your project.</li>
                    <li>Material selection, including flooring types, colors, and finishing materials.</li>
                    <li>An itemized project proposal for transparency and budget accuracy.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={materialImg} aos={'fade-right'}> 
                <h4>Material Selection: Quality and Aesthetics</h4>
                <p>The choice of materials is pivotal to the success of your project. We assist you in selecting</p>
                <ul>
                    <li>Flooring materials that match your style and functional requirements.</li>
                    <li>Finishing materials that achieve the desired look, from matte to glossy.</li>
                    <li>Transition and molding materials that create a seamless and polished appearance.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={constructionImg} aos={'fade-left'}>
                <h4>Flooring Work: Precision and Craftsmanship</h4>
                <p>With your design approved, our skilled craftsmen get to work, executing the plan with precision. This stage involves:</p>
                <ul>
                    <li>Preparing the site, including the removal of existing flooring if necessary.</li>
                    <li>Installing new flooring materials while adhering to industry standards.</li>
                    <li>Applying finishing materials or sealants for a polished and protected look.</li>
                    <li>Conducting quality checks to guarantee the project aligns with the design and your vision.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={inspectImg} aos={'fade-right'}>
                <h4>Final Inspection: Ensuring Excellence</h4>
                <p>Before we consider the project complete, our team conducts a comprehensive final inspection. This step includes:</p>
                <ul>
                    <li>Thoroughly reviewing every detail to ensure it meets our high-quality standards.</li>
                    <li>Checking for any potential issues or discrepancies and making necessary adjustments.</li>
                    <li>Confirming that the flooring project is both functional and aesthetically pleasing.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={walkThroughImg} aos={'fade-left'}>
                <h4>Client Walkthrough: Your Satisfaction Matters</h4>
                <p>We invite you to join us for a client walkthrough, during which you can inspect the completed flooring work. This is your opportunity to:</p>
                <ul>
                    <li>Ensure the deck meets your expectations and vision.</li>
                    <li>Ask any questions or request further adjustments if necessary.</li>
                    <li>Confirm your satisfaction with the finished flooring project.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={completeImg} aos={'fade-right'}>
                <h4>Project Completion: Beautiful and Durable Flooring</h4>
                <p>Once you're satisfied with the results, we consider the project complete. You can now enjoy beautiful and durable flooring that enhances your space.</p>
            </ProcessCard>
        </Process1>
        <div data-aos='fade-up' style={{position: 'relative', marginBottom: '20vh'}} className="benefits">
            <div className="benefits">
                <h3>Benefits of Professional Flooring Services</h3>
                <ul className="benefits-items">
                    <li className="benefits-item"><span>Enhanced Aesthetics:</span> Quality flooring can transform the look and feel of your space, enhancing its aesthetics.</li>
                    <li className="benefits-item"><span>Increased Property Value:</span> Updated and well-maintained flooring can significantly increase your property's value.</li>
                    <li className="benefits-item"><span>Improved Comfort:</span> Flooring upgrades can improve the comfort and livability of your space.</li>
                    <li className="benefits-item"><span>Durability:</span> Expert installation and repairs ensure the longevity and durability of your floors.</li>
                    <li className="benefits-item"><span>Customization:</span> We offer custom design solutions to match your unique style and needs.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Flooring