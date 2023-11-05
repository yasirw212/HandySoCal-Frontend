import React from 'react'
import './powerwash.css'
import Hero from '../../../components/templates/hero/Hero'
import powerWashImg from '../../../assets/powerwash.jpg'
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

const PowerWash = () => {
  return (
    <div className='display1-container'>
        <Hero img={powerWashImg} title={'Power Washing.'} />
        <div className="display1-body">
            <div >
                <h3>Why Choose Us for Your Power Washing Needs?</h3>
                <br />
                <p className="introduction-body">We offer professional power washing services to rejuvenate the appearance of your property. With our skilled team and top-of-the-line equipment, we can remove dirt, grime, mold, and other contaminants, leaving surfaces looking fresh and revitalized. Explore the benefits and details of our power washing services:</p>
            </div>
            <Form1 name={'Power Washing'} category={'Cleaning'} />
            <Container1 aos={'fade-up'}>
                <h4>Our Power Washing Services:</h4>
                <ul className="container1-items">
                    <li className="container1-item"><span>House and Siding Power Washing:</span> Restore the beauty and cleanliness of your home's exterior, removing dirt, mildew, and stains.</li>
                    <li className="container1-item"><span>Deck and Patio Power Washing:</span> Renew the appearance of your deck or patio, removing grime and preparing surfaces for staining or sealing.</li>
                    <li className="container1-item"><span>Driveway and Walkway Power Washing: </span> Eliminate oil stains, mold, and built-up dirt, leaving your driveway and walkways looking new.</li>
                    <li className="container1-item"><span>Fence and Gate Power Washing:</span> Bring new life to your wooden or vinyl fence, making it a standout feature of your property.</li>
                    <li className="container1-item"><span>Roof Cleaning: </span> Safely remove moss, algae, and stains from your roof to improve its longevity and appearance.</li>
                </ul>
            </Container1>
        </div>
        <Process1>
            <ProcessCard img={consultationImg} aos={'fade-right'}  >
                    <h4>Initial Assessment: Evaluation and Planning</h4>
                    <p>We begin with a consultation to understand your cleaning needs. During this phase, we:</p>
                    <ul>
                        <li>Discuss your goals for exterior cleaning, including specific areas that require attention.</li>
                        <li>Assess the current state of your property's exterior surfaces to identify issues and propose solutions.</li>
                        <li>Provide options for cleaning agents and techniques that align with your requirements.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={bluePrintImg} aos={'fade-left'} >
                    <h4>Customized Plan and Material Selection: Tailoring the Solution</h4>
                    <p>Based on our consultation and assessment, we create a customized plan for your power washing project. This includes:</p>
                    <ul>
                        <li>Selecting the appropriate cleaning agents, equipment, and techniques that meet your specific cleaning requirements.</li>
                        <li>Determining the scope of work, whether it involves cleaning your entire property or specific areas.</li>
                        <li>Addressing any special requests or design considerations you may have for your cleaning project.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={powerWashImg} aos={'fade-right'} >
                    <h4>Power Washing: Effective Cleaning</h4>
                    <p>Our skilled technicians use state-of-the-art power washing equipment to clean the surfaces thoroughly. This stage involves:</p>
                    <ul>
                        <li>Applying the selected cleaning agents and techniques to remove dirt, stains, and contaminants from your exterior surfaces.</li>
                        <li>Paying close attention to delicate areas or materials to ensure no damage occurs during the cleaning process.</li>
                        <li>Ensuring that your property's exterior surfaces meet your cleanliness and appearance objectives.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={inspectImg} aos={'fade-left'} >
                    <h4> Post-Cleaning Inspection: Quality Assurance</h4>
                    <p>After power washing, our team conducts a post-cleaning inspection. This step includes:</p>
                    <ul>
                        <li>Verifying that the exterior surfaces have been cleaned to our high standards, including cleanliness and safety.</li>
                        <li>Double-checking that no damage has occurred during the cleaning process.</li>
                        <li>Ensuring that your property's exterior appearance is significantly improved.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={walkThroughImg} aos={'fade-right'} >
                <h4>Client Walkthrough: Your Satisfaction is Our Priority</h4>
                <p>We invite you to join us for a client walkthrough, during which you can inspect the cleaned areas. This is your opportunity to:</p>
                <ul>
                    <li>Verify that the exterior surfaces align with the agreed-upon cleanliness and appearance standards.</li>
                    <li>Ask any questions or request touch-ups if necessary.</li>
                    <li>Confirm your satisfaction with the revitalized appearance of your property.</li>
                </ul>
            </ProcessCard>
        </Process1>
        <div data-aos='fade-up'  style={{position: 'relative', marginBottom: '20vh'}} className="benefits">
            <div className="benefits">
                <h3>Benefits of Professional Power Washing Services</h3>
                <ul className="benefits-items">
                    <li className="benefits-item"><span>Enhanced Curb Appeal: </span> Clean surfaces boost the overall appearance of your property.</li>
                    <li className="benefits-item"><span>Preventative Maintenance:</span> Regular power washing can extend the life of exterior surfaces.</li>
                    <li className="benefits-item"><span>Safety:</span> Clean walkways, driveways, and parking areas reduce slip and fall hazards.</li>
                    <li className="benefits-item"><span>Environmental Responsibility:</span> Our eco-friendly practices protect the environment.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PowerWash