import React from 'react'
import './deck.css'
import Hero from '../../../components/templates/hero/Hero'
import deckImg from '../../../assets/deck.jpg'
import Form1 from '../../../components/inquiryForms/form1/Form1'
import Container1 from '../../../components/templates/container1/container1'
import Process1 from '../../../components/process1/Process1'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import materialImg from '../../../assets/woodMaterial.jpg'
import constructionImg from '../../../assets/construction.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import completeImg from '../../../assets/complete.jpg'

const Deck = () => {
  return (
    <div className='display1-container'>
        <Hero img={deckImg} title={'Deck Repair/Installation'} />
        <div className="display1-body">
            <div className="deck-intro">
                <h2>Why Choose Us for Your Deck Needs?</h2>
                <p className='introduction-body'>We are your go-to experts for all things related to decks. Whether your deck needs repair, renovation, or a fresh build, we have the skills and experience to deliver beautiful, functional outdoor spaces that enhance your home. Explore our comprehensive deck services:</p>
            </div>
            <Form1 aos='fade-up' >
                <label htmlFor="service">installation or repair?</label>
                <select name="service" id="service">
                    <option value="installation">Installation</option>
                    <option value="repair">Repair</option>
                </select>
            </Form1>
            <Container1 aos={'fade-up'}>
                <h3>Our Deck Services</h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>Deck Repairs:</span> Restore the safety and aesthetics of your existing deck through thorough repairs.</li>
                    <li className="container1-item"><span>Deck Renovations:</span> Give your old deck a fresh look with renovations that include new railings, surfaces, and features.</li>
                    <li className="container1-item"><span>Deck Extensions:</span> Expand your outdoor living space with additional deck areas to accommodate your needs.</li>
                    <li className="container1-item"><span>New Deck Builds:</span> Create a brand-new deck that's custom-designed to your specifications and complements your property.</li>
                </ul>
            </Container1>
        </div>
        <Process1>
            <ProcessCard img={consultationImg} aos={'fade-right'}>
                <h4> Initial Consultation: Understanding Your Vision</h4>
                <p>We begin with a comprehensive consultation to discuss your goals, design preferences, and budget. During this phase, we will:</p>
                <ul>
                    <li>Explore your vision for the deck, including style, size, and functionality.</li>
                    <li>Review your specific goals and objectives for the project.</li>
                    <li>Discuss budget considerations and any constraints to create a realistic plan.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={bluePrintImg} aos={'fade-left'}>
                <h4>Design and Planning: Crafting the Blueprint</h4>
                <p>Following the initial consultation, our design experts collaborate with you to create a comprehensive plan, which includes:</p>
                <ul>
                    <li>Detailed design drawings and layouts to visualize your deck.</li>
                    <li>Material selection, including decking, railings, and finishing touches.</li>
                    <li>An itemized project proposal for transparency and budget accuracy.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={materialImg} aos={'fade-right'}> 
                <h4>Material Selection: Quality and Aesthetics</h4>
                <p>The choice of materials is pivotal to the success of your project. We assist you in selecting</p>
                <ul>
                    <li>Decking materials that match your style and functional requirements.</li>
                    <li>Railings, balusters, and post styles that enhance safety and aesthetics.</li>
                    <li>Finishing touches such as lighting, steps, and benches to create the desired look.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={constructionImg} aos={'fade-left'}>
                <h4>Construction: Precision and Skill</h4>
                <p>With your design approved, our skilled craftsmen get to work, executing the plan with precision. This stage involves:</p>
                <ul>
                    <li>Preparing the site and laying the foundation, if needed.</li>
                    <li>Building or extending the deck with attention to every detail, ensuring it meets industry standards.</li>
                    <li>Quality control at every step to ensure the project aligns with the design and your vision.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={inspectImg} aos={'fade-right'}>
                <h4>Final Inspection: Ensuring Excellence</h4>
                <p>Before we consider the project complete, our team conducts a comprehensive final inspection. This step includes:</p>
                <ul>
                    <li>Thoroughly reviewing every detail to ensure it meets our high-quality standards.</li>
                    <li>Testing the deck for safety, stability, and structural soundness.</li>
                    <li>Addressing any issues or making adjustments to guarantee the project's functionality and aesthetics.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={walkThroughImg} aos={'fade-left'}>
                <h4>Client Walkthrough: Your Satisfaction Matters</h4>
                <p>We invite you to join us for a client walkthrough, during which you can inspect the deck. This is your opportunity to:</p>
                <ul>
                    <li>Ensure the deck meets your expectations and vision.</li>
                    <li>Ask any questions or request further adjustments if necessary.</li>
                    <li>Confirm your satisfaction with the completed deck work.</li>
                </ul>
            </ProcessCard>
        </Process1>
        <div data-aos='fade-up' style={{position: 'relative', marginBottom: '20vh'}} className="benefits">
            <div className="benefits">
                <h3>Benefits of Professional Deck Repair/Installation</h3>
                <ul className="benefits-items">
                    <li className="benefits-item"><span>Enhanced Outdoor Living:</span> A beautifully designed and well-maintained deck provides additional space for outdoor living and entertainment.</li>
                    <li className="benefits-item"><span>Increased Home Value:</span> A quality deck can significantly enhance your property's value.</li>
                    <li className="benefits-item"><span>Improved Aesthetics:</span> Custom features, sealants, and stains can transform the look of your outdoor space.</li>
                    <li className="benefits-item"><span>Safety:</span> Structural repairs and maintenance keep your deck safe for family and friends.</li>
                    <li className="benefits-item"><span>Customization:</span> We offer custom design and features to match your unique style and needs.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Deck