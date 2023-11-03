import React from 'react'
import './bathroom.css'
import { selectServices } from '../../../features/services/servicesSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import Hero from '../../../components/templates/hero/Hero'
import bathroomImg from '../../../assets/bathroom.jpg'
import Form1 from '../../../components/inquiryForms/form1/Form1'
import Container1 from '../../../components/templates/container1/container1'
import Process1 from '../../../components/process1/Process1'
import kitchenImg from '../../../assets/kitchen.jpg'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import materialImg from '../../../assets/material2.jpg'
import constructionImg from '../../../assets/construction.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import completeImg from '../../../assets/complete.jpg'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'

const Bathroom = () => {
    const [service, setService] = React.useState({})
    const services = useSelector(selectServices)
    const params = useParams()
    console.log(params.id)

    React.useEffect(() =>{
        setService(services.find(s => s.id == params.id))
    }, [services])


    return (
        <div className="display1-container bathroom-container">
            <Hero img={bathroomImg} title={'Bathroom Remodels'} />
            <div className="display1-body bathroom-body">
                <div  className="bathroom-intro">
                    <h2 className='bathroom-title'>Transform Your Bathroom</h2>
                    <p className='container1-body'>At Handy SoCal, we take pride in transforming bathrooms into elegant, functional, and rejuvenating spaces. Our bathroom remodeling services in Southern California are designed to enhance your daily routine and add value to your home. Whether you're considering a small update or a complete bathroom makeover, we have the expertise to bring your vision to life.</p>
                    
                </div>
                <Form1 />
                <Container1 aos={'fade-up'}>
                    <h3>Remodeling Services: </h3>
                    <ul className="container1-items">
                        <li className="container1-item"><span>Tub and Shower Updates:</span> Whether you're looking to replace or refinish your bathtub or shower, we provide options that match your style and budget.</li>
                        <li className="container1-item"><span>Vanity Installation:</span> Choose from a variety of vanities, sinks, and countertops to create a stylish and functional bathroom.</li>
                        <li className="container1-item"><span>Tile Work:</span> From intricate mosaics to elegant porcelain tiles, we handle all types of tile work, including shower and floor tile installation.</li>
                        <li className="container1-item"><span>Plumbing and Electrical:</span> Our experts ensure your plumbing and electrical systems are safe, functional, and energy-efficient.</li>
                        <li className="container1-item"><span>Lighting Solutions:</span> Enhance your bathroom's ambiance with updated lighting fixtures and designs.</li>
                        <li className="container1-item"><span>Accessibility Features:</span> We can install grab bars, ramps, and other accessibility features for those with mobility needs.</li>
                    </ul>
                </Container1>
                
            </div>
            <Process1>
                <ProcessCard img={consultationImg} aos={'fade-right'}>
                    <h4> Initial Consultation: Your Vision Takes Center Stage</h4>
                    <p>We begin with a comprehensive consultation to understand your vision. During this phase, we:</p>
                    <ul>
                        <li>Collaborate with you to define your project goals and design preferences.</li>
                        <li>Discuss space planning and layout options to optimize your bathroom's functionality.</li>
                        <li>Explore material and finish choices to match your design vision.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={bluePrintImg} aos={'fade-left'}>
                    <h4> Design and Planning: Crafting Your Dream Bathroom</h4>
                    <p>Based on our consultation, we develop a customized design plan tailored to your project. This includes:</p>
                    <ul>
                        <li>Creating detailed bathroom layouts, including cabinetry, fixtures, and tiling.</li>
                        <li>Selecting materials, fixtures, and finishes to match your style and functional requirements.</li>
                        <li>Fine-tuning the design to match your exact specifications.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={materialImg} aos={'fade-right'}>
                    <h4>Material Selection: Quality and Aesthetics</h4>
                    <p>We help you select high-quality materials and finishes that best suit your design and budget, including:</p>
                    <ul>
                        <li>Tiles, including those for walls, floors, and backsplashes.</li>
                        <li>Plumbing fixtures, including sinks, faucets, and showerheads.</li>
                        <li>Countertops, cabinetry, and mirrors that enhance aesthetics and functionality.</li>
                        <li>Lighting fixtures to create the desired ambiance.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={constructionImg} aos={'fade-left'}>
                    <h4>Construction: Turning Plans into Reality</h4>
                    <p>Our skilled team of professionals works diligently to bring your bathroom design to life. This includes:</p>
                    <ul>
                        <li>Demolition and removal of existing materials, including vanities, tubs, and fixtures.</li>
                        <li>Precise installation of custom cabinetry, countertops, and fixtures.</li>
                        <li>Electrical and plumbing work to accommodate new lighting, fixtures, and shower features.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={inspectImg} aos={'fade-right'}>
                    <h4>Final Inspection: Ensuring Excellence</h4>
                    <p>Before considering the project complete, we conduct a thorough quality inspection. This includes:</p>
                    <ul>
                        <li>Checking for proper alignment, fit, and functionality of fixtures and cabinetry.</li>
                        <li>Testing all appliances, plumbing, and electrical systems for optimal functionality.</li>
                        <li>Addressing any issues or making adjustments as necessary to guarantee the project's functionality and aesthetics.</li>
                    </ul>
                </ProcessCard>
                <ProcessCard img={walkThroughImg} aos={'fade-left'}>
                    <h4>Client Walkthrough: Your Satisfaction Matters</h4>
                    <p>We invite you to join us for a client walkthrough, during which you can inspect the completed bathroom and ensure it meets your expectations. This is your opportunity to:</p>
                    <ul>
                        <li>Verify that the remodeling project aligns with the agreed-upon plan and meets your specific requirements.</li>
                        <li>Ask any questions or request adjustments if necessary.</li>
                        <li>Confirm your satisfaction with the finished bathroom.</li>
                    </ul>
                </ProcessCard>
            </Process1>
            <div style={{position: 'relative', marginBottom: '20vh'}} className="benefits" data-aos='fade-up'>
                <div className="benefits">
                    <h3>Benefits of Professional Bathroom Remodeling</h3>
                    <ul className="benefits-items" >
                        <li className="benefits-item"><span>Increased Home Value:</span> A well-designed and updated bathroom can significantly increase the value of your home.</li>
                        <li className="benefits-item"><span>Improved Aesthetics:</span> Aesthetic upgrades can transform your bathroom into a stylish and inviting space.</li>
                        <li className="benefits-item"><span>Enhanced Functionality:</span> Efficient use of space and modern fixtures make your bathroom more functional.</li>
                        <li className="benefits-item"><span>Accessibility:</span> ADA-compliant features can improve accessibility for all family members.</li>
                        <li className="benefits-item"><span>Safety:</span> Safety upgrades reduce the risk of accidents in the bathroom.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Bathroom