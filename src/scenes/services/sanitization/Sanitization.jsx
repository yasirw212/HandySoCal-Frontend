import React from 'react'
import Hero from '../../../components/templates/hero/Hero'
import sanitizationImg from '../../../assets/sanitization.jpg'
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
import scheduleImg from '../../../assets/schedule.jpg'

const Sanitization = () => {
  return (
    <div className='display1-container'>
        <Hero img={sanitizationImg} title={'Sanitization.'} />
        <div className="display1-body">
            <div >
                <h2>Choose Us for Your Sanitization Needs</h2>
                <br />
                <p>maintaining a clean and sanitized environment is crucial for the health and well-being of everyone who enters your space. Our professional sanitization services are designed to provide thorough and effective cleaning, ensuring that your home or office is a safe and hygienic place to be.</p>
            </div>
            <Form1 />
            <Container1 aos={'fade-up'}>
                <h3>Home Sanitization Services:</h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>General Home Sanitization:</span> Thoroughly clean and sanitize your entire home, targeting high-touch areas.</li>
                    <li className="container1-item"><span>Deep Home Sanitization:</span> Reach and sanitize hard-to-reach areas, such as corners and crevices.</li>
                    <li className="container1-item"><span>Child and Pet-Friendly Sanitization:</span> Use safe sanitization products for households with children and pets.</li>
                    <li className="container1-item"><span>Odor Removal:</span> Eliminate unpleasant odors in your home through sanitization.</li>
                </ul>
                <br />
                <h3>Office Sanitization Services: </h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>General Office Sanitization:</span> Ensure that your workspace is clean and safe for employees and visitors.</li>
                    <li className="container1-item"><span>Commercial Space Sanitization:</span> Sanitize commercial areas, such as waiting rooms and common areas.</li>
                    <li className="container1-item"><span>Janitorial Services:</span> Provide regular janitorial services to maintain a clean and sanitized workspace.</li>
                    <li className="container1-item"><span>High-Touch Surface Sanitization:</span> Focus on sanitizing high-touch surfaces like doorknobs, elevator buttons, and shared equipment.</li>
                </ul>
            </Container1>
        </div>
        <Process1>
            <ProcessCard img={consultationImg} aos={'fade-right'} >
                <h4>Initial Consultation: Understanding Your Needs</h4>
                <p>We begin with a consultation to discuss your sanitization goals and specific requirements.</p>
                <ul>
                    <li>Evaluate the type of sanitization services you require, whether it's general sanitization, deep cleaning, or specific areas of concern.</li>
                    <li>Review any specific sanitization issues or concerns, such as high-traffic areas or recent events.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={scheduleImg} aos={'fade-left'}>
                    <h4>Scheduling and Preparation: Planning the Sanitization</h4>
                    <p>Following the initial consultation, we will schedule the sanitization service at a time that is convenient for you. We'll also ensure that we have the necessary sanitization products and equipment ready to streamline the process.</p>
            </ProcessCard>
            <ProcessCard img={sanitizationImg} aos={'fade-right'}>
                <h4>Sanitization: Thorough and Efficient</h4>
                <p>With your space ready, our skilled technicians will get to work, ensuring that the sanitization is carried out with precision and efficiency. This stage involves:</p>
                <ul>
                    <li>Applying the selected disinfectants and techniques to eliminate germs, bacteria, viruses, and allergens from your property's surfaces.</li>
                    <li>Paying close attention to high-touch areas or materials to ensure thorough disinfection.</li>
                    <li>Ensuring that your property meets the highest cleanliness and safety standards.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={inspectImg} aos={'fade-left'} >
                <h4>Final Inspection and Clean-Up: Ensuring Excellence</h4>
                <p>Before we consider the project complete, our team conducts a comprehensive final inspection. This step includes:</p>
                <ul>
                    <li>Thoroughly reviewing the sanitized space to ensure it meets our high-quality standards.</li>
                    <li>Checking for any potential cleaning issues and making necessary adjustments.</li>
                    <li>Cleaning up the work area, removing any sanitization supplies, and leaving your space clean and ready for use.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={walkThroughImg} aos={'fade-right'} >
                <h4>Client Walkthrough: Your Satisfaction is Our Priority</h4>
                <p>We invite you to join us for a client walkthrough, during which you can inspect the completed sanitization. This is your opportunity to:</p>
                <ul>
                    <li>Ensure the sanitization meets your expectations and resolves any issues.</li>
                    <li>Checking for any potential issues or discrepancies and making necessary adjustments.</li>
                    <li>Confirm your satisfaction with the finished sanitization project.</li>
                </ul>
            </ProcessCard>
        </Process1>
        <div data-aos='fade-up'  style={{position: 'relative', marginBottom: '20vh'}} className="benefits">
            <div className="benefits">
                <h3>Benefits of Professional Sanitization Services</h3>
                <ul className="benefits-items">
                    <li className="benefits-item"><span>Health and Safety:</span> Professional sanitization promotes a healthy and safe environment.</li>
                    <li className="benefits-item"><span>Peace of Mind:</span> Proper sanitization provides peace of mind, knowing that your space is germ-free.</li>
                    <li className="benefits-item"><span>Virus Protection:</span> Sanitization helps protect against the spread of viruses and bacteria.</li>
                    <li className="benefits-item"><span>Clean and Inviting Space:</span> Sanitization enhances the cleanliness and appeal of your space.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sanitization