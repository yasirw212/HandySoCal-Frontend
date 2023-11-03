import React from 'react'
import Hero from '../../../components/templates/hero/Hero'
import cleaningImg from '../../../assets/cleaning.jpg'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'
import Process1 from '../../../components/process1/Process1'
import Container1 from '../../../components/templates/container1/container1'
import Form1 from '../../../components/inquiryForms/form1/Form1'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import materialImg from '../../../assets/material.jpg'
import constructionImg from '../../../assets/cleaningWork.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import scheduleImg from '../../../assets/schedule.jpg'

const Cleaning = () => {
  return (
    <div className='display1-container'>
        <Hero img={cleaningImg} title={'Cleaning Services.'} />
        <div className="display1-body">
            <div className='powerWash-intro' >
                <h3>Why Choose Us for Your Cleaning Needs?</h3>
                <p className="introduction-body">A clean and tidy space is essential for a healthy and comfortable environment. Our professional cleaning services are designed to take the burden of cleaning off your shoulders, whether it's in your home or office. We offer a range of cleaning solutions to cater to your specific needs.</p>
            </div>
            <Form1 />
            <Container1 aos={'fade-up'}>
                <h3>Home Cleaning Services:</h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>General House Cleaning:</span> Clean and tidy your entire home, including living areas, bedrooms, kitchens, and bathrooms.</li>
                    <li className="container1-item"><span>Deep Cleaning:</span> Thoroughly clean and sanitize your home, reaching hidden and hard-to-reach areas.</li>
                    <li className="container1-item"><span>Move-In and Move-Out Cleaning:</span> Prepare a space for new occupants or ensure a clean exit for your old home.</li>
                    <li className="container1-item"><span>Dusting and Vacuuming:</span> Remove dust and dirt from all surfaces and floors.</li>
                    <li className="container1-item"><span>Organizing and Decluttering:</span> Tidy up and organize your living spaces for a neat and inviting home.</li>
                    <li className="container1-item"><span>Specialized Cleaning:</span> Clean specific areas such as carpets, upholstery, windows, and more.</li>
                </ul>
                <h3 style={{marginTop: '2.5rem'}}>Office Cleaning Services:</h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>General Office Cleaning:</span> Keep your workspace clean, organized, and conducive to productivity.</li>
                    <li className="container1-item"><span>Commercial Space Cleaning:</span> Clean commercial areas such as lobbies, waiting rooms, and common areas.</li>
                    <li className="container1-item"><span>Floor Cleaning:</span> Maintain clean and presentable floors, including carpet, tile, and hardwood.</li>
                    <li className="container1-item"><span>Window Cleaning:</span> Clean and maintain windows for a clear and inviting view.</li>
                    <li className="container1-item"><span>Janitorial Services:</span> Provide regular janitorial services for your office or commercial space.</li>
                </ul>
            </Container1 >
        </div>
        <Process1>
            <ProcessCard img={consultationImg} aos={'fade-right'} >
                    <h4>Initial Consultation: Understanding Your Needs</h4>
                    <p>We begin with a consultation to discuss your cleaning goals and specific requirements.</p>
                    <ul>
                        <li>Evaluate your space and determine the scope of cleaning work required.</li>
                        <li>Review any specific cleaning concerns or areas that need special attention.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={scheduleImg} aos={'fade-left'} >
                    <h4>Scheduling and Preparation: Planning the Cleaning</h4>
                    <p>Following the initial consultation, we will schedule the cleaning at a time that is convenient for you. We'll also ensure that we have the necessary cleaning products and equipment ready to provide you with a hassle-free cleaning experience.</p>
            </ProcessCard>
            <ProcessCard img={constructionImg} aos={'fade-right'}>
                    <h4>Cleaning: Thorough and Efficient</h4>
                    <p>With your space ready, our cleaners will get to work, ensuring that each area is cleaned thoroughly and efficiently. This stage involves:</p>
                    <ul>
                        <li>Cleaning all surfaces, whether it's dusting, wiping, or scrubbing.</li>
                        <li>Using eco-friendly cleaning products and methods to protect the environment.</li>
                        <li>Paying special attention to high-touch areas and places that require deep cleaning.</li>
                        <li>Conducting quality checks to ensure that the space is spotless and sanitized.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={inspectImg} aos={'fade-left'} >
                    <h4>Final Inspection and Clean-Up: Ensuring Excellence</h4>
                    <p>Before we consider the project complete, our team conducts a comprehensive final inspection. This step includes:</p>
                    <ul>
                        <li>Thoroughly reviewing each cleaned area to ensure it meets our high-quality standards.</li>
                        <li>Checking for any potential cleaning issues and making necessary adjustments.</li>
                        <li>Cleaning up any cleaning supplies and leaving your space clean and ready for use.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={walkThroughImg} aos={'fade-right'} >
                <h4>Client Walkthrough: Your Satisfaction is Our Priority</h4>
                <p>We invite you to join us for a client walkthrough, during which you can inspect the completed cleaning. This is your opportunity to:</p>
                <ul>
                    <li>Ensure the cleaning meets your expectations and resolves any issues.</li>
                    <li>Ask any questions or request further adjustments if necessary.</li>
                    <li>Confirm your satisfaction with the cleanliness and hygiene of your space.</li>
                </ul>
            </ProcessCard>
        </Process1>
        <div data-aos='fade-up' style={{position: 'relative', marginBottom: '20vh'}} className="benefits">
            <div className="benefits">
                <h3>Benefits of Professional Cleaning Services</h3>
                <ul className="benefits-items">
                    <li className="benefits-item"><span>Time Savings:</span> Professional cleaning frees up your time to focus on what matters most.</li>
                    <li className="benefits-item"><span>Health and Hygiene:</span> Clean spaces reduce allergens and create a healthier living and working environment.</li>
                    <li className="benefits-item"><span>Appearance and Atmosphere:</span> Clean spaces are inviting and create a positive atmosphere.</li>
                    <li className="benefits-item"><span>Longevity:</span> Regular cleaning can extend the life of furnishings and surfaces.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cleaning