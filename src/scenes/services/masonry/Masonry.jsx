import React from 'react'
import Hero from '../../../components/templates/hero/Hero'
import masonryImg from '../../../assets/masonry.jpg'
import Form1 from '../../../components/inquiryForms/form1/Form1'
import Container1 from '../../../components/templates/container1/container1'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import materialImg from '../../../assets/masonryMaterial.jpg'
import constructionImg from '../../../assets/construction.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import completeImg from '../../../assets/complete.jpg'
import Process1 from '../../../components/process1/Process1'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'

const Masonry = () => {
  return (
    <div className='display1-container'>
        <Hero img={masonryImg} title={'Masonry.'} />
        <div className="masonry-body display1-body">
            <div className="masonry-intro">
                <h2>Masonry Services</h2>
                <br />
                <p className="introduction-body">With our years of experience and skilled craftsmen, we bring your vision to life through a wide range of masonry projects. Whether you need brickwork, stone masonry, or concrete services, we have the expertise to deliver top-quality results. Explore the world of masonry with us.</p>
            </div>
            <Form1 name={'Masonry'} category={'Home Improvement'} />
            <Container1 aos={'fade-up'} >
                <h3>Why Choose Us for Your Masonry Projects? </h3>
                <ul className="container1-items">
                    <li className="container1-item"><span>Experience:</span> With over 30+ years in the industry, we bring a wealth of experience and knowledge to every project.</li>
                    <li className="container1-item"><span>Tailored Solutions: </span> We work closely with you to understand your vision, budget, and unique needs, ensuring a masonry project that aligns perfectly with your goals.</li>
                    <li className="container1-item"><span>Quality Craftsmanship:</span> Our team of skilled masons takes pride in every detail, ensuring the highest standards of workmanship.</li>
                    <li className="container1-item"><span>Transparent Process:</span> We maintain open communication, provide detailed quotes, and keep you informed at every stage of your project.</li>
                    <li className="container1-item"><span>Versatility:</span> From small repairs to large-scale masonry construction, we handle a wide range of projects.</li>
                </ul>
                <br />
                <h3>Services Provided: </h3>
                <ul className="container1-items">
                   <li className="container1-item"><span>Stucco Installation/Repairs:</span> From flawless installations to seamless repairs, we provide a fresh, durable finish that enhances both aesthetics and protection.</li>
                   <li className="container1-item"><span>Concrete Block Walls & Structures:</span> Our expert craftsmanship ensures robust construction, providing not just stability but a lasting foundation for your architectural vision.</li>
                   <li className="container1-item"><span>Stone Work:</span>  Experience the enduring charm and rugged elegance of expertly crafted stonework for your home or outdoor spaces.</li>
                   <li className="container1-item"><span>Brick Siding:</span> Enhance your home's exterior with the classic charm and enduring appeal of brick siding. Brick siding not only adds timeless character but also provides durable protection.</li>
                </ul>
            </Container1>
        </div>
        <Process1 >
            <ProcessCard img={consultationImg} aos={'fade-right'}  >
                    <h4>Initial Consultation: Your Vision Takes Center Stage</h4>
                    <p>We begin with an in-depth consultation to discuss your goals, design preferences, and budget. During this phase, we will:</p>
                    <ul>
                        <li>Explore your vision for the masonry project, including style, materials and aesthetics.</li>
                        <li>Determining the scope of work, whether it involves new installations, repairs, or restoration.</li>
                        <li>Discuss budget considerations and any constraints to create a realistic plan.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={materialImg} aos={'fade-left'} >
                    <h4>Material Selection: Quality and Style</h4>
                    <p>Based on our consultation and design phase, we create a customized plan for your masonry project. This includes:</p>
                    <ul>
                        <li>Selecting the appropriate materials that align with your vision and structural requirements.</li>
                        <li>Determining the scope of work, whether it involves new installations, repairs, or restoration.</li>
                        <li>Addressing any special requests or design considerations you may have for your masonry.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={masonryImg} aos={'fade-right'} >
                    <h4>Precise Installation, Repair, or Restoration: Meticulous and Comprehensive</h4>
                    <p>Our skilled team works diligently to complete your masonry project. This includes:</p>
                    <ul>
                        <li>Installing new masonry with precision, ensuring it is level, secure, and visually appealing.</li>
                        <li>Conducting repairs or restoration with expert techniques to maintain or enhance the masonry.</li>
                        <li>Ensuring that historical and architectural accuracy is maintained in restoration projects.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={inspectImg} aos={'fade-left'} >
                    <h4>Quality Inspection: Ensuring Excellence</h4>
                    <p>Before considering the project complete, we conduct a thorough quality inspection. This includes:</p>
                    <ul>
                        <li>Verifying that the masonry has been installed, repaired, or restored to our high standards, including structural integrity and aesthetics.</li>
                        <li>Double-checking that the selected materials meet your specific design and structural requirements.</li>
                        <li>Ensuring that historical and architectural accuracy is maintained in restoration projects.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={walkThroughImg} aos={'fade-right'} >
                <h4>Client Walkthrough: Your Satisfaction is Our Priority</h4>
                <p>We invite you to join us for a client walkthrough, during which you can inspect the project. This is your opportunity to inspect the work and ensure it aligns with your vision. We'll address any questions or concerns you have and make any necessary adjustments.</p>
            </ProcessCard>
        </Process1>
        <div data-aos='fade-up' style={{position: 'relative', marginBottom: '20vh'}} className="benefits">
            <div className="benefits">
                <h3>Benefits of Professional Masonry Services</h3>
                <ul className="benefits-items">
                    <li className="benefits-item"><span>Enhanced Aesthetics:</span> Renovations can transform the look and feel of your space, enhancing its aesthetics.</li>
                    <li className="benefits-item"><span>Increased Property Value:</span> A quality renovation can significantly increase your property's value.</li>
                    <li className="benefits-item"><span>Improved Functionality:</span> Renovations can improve the functionality and efficiency of your space.</li>
                    <li className="benefits-item"><span>Customization:</span> We offer custom design solutions to match your unique style and needs.</li>
                    <li className="benefits-item"><span>Energy Efficiency:</span> Modern renovations can enhance energy efficiency, reducing utility costs.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Masonry