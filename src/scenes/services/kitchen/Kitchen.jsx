import React from 'react'
import { selectServices } from '../../../features/services/servicesSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import Process1 from '../../../components/process1/Process1'
import Form1 from '../../../components/inquiryForms/form1/Form1'
import Container1 from '../../../components/templates/container1/container1'
import Hero from '../../../components/templates/hero/Hero'
import kitchenImg from '../../../assets/kitchen.jpg'
import consultationImg from '../../../assets/consultation.jpg'
import bluePrintImg from '../../../assets/blueprint.jpg'
import materialImg from '../../../assets/material2.jpg'
import constructionImg from '../../../assets/construction.jpg'
import inspectImg from '../../../assets/inspect.jpg'
import walkThroughImg from '../../../assets/walkthrough.jpg'
import ProcessCard from '../../../components/process1/processCard/ProcessCard'



const Kitchen = () => {
    const [service, setService] = React.useState({})
    const services = useSelector(selectServices)
    const params = useParams()
    console.log(params.id)

    React.useEffect(() =>{
        setService(services.find(s => s.id == params.id))
    }, [services])

  return (
    <div className='display1-container'>
        <Hero img={kitchenImg} title={'Kitchen Remodels.'} />
        <div className="display1-body">
                <div  className="kitchen-intro">
                    <h2 className='kitchen-title'>Transform Your Kitchen</h2>
                    <br />
                    <p className='introduction-body'>Handy SoCal, where kitchen dreams come to life. Our kitchen remodeling services in the Southern California area are a testament to our commitment to transforming kitchens into beautiful and functional spaces. Whether you're looking for a minor update or a complete kitchen makeover, we have the expertise to turn your vision into reality.</p>
                </div>
                <Form1 name={'Kitchen Remodeeling'} category={'Home Improvement'} />
                <Container1 aos={'fade-up'}>
                    <h3>Our Remodeling Services:</h3>
                    <ul className='container1-items'>
                        <li className='container1-item'><span>Cabinet Refinishing and Replacement:</span> Transform the look of your kitchen with cabinet refinishing or opt for brand-new custom cabinets.</li>
                        <li className='container1-item'><span>Countertop Upgrades:</span> Choose from a variety of materials, such as granite, quartz, or marble, to give your kitchen a fresh, modern look.</li>
                        <li className='container1-item'><span>Flooring and Tile Work:</span> Enhance the durability and aesthetics of your kitchen with new flooring and tile options.</li>
                        <li className='container1-item'><span>Lighting Solutions:</span> Improve visibility and ambiance with upgraded lighting fixtures and designs.</li>
                        <li className='container1-item'><span>Appliance Installation:</span> We can install new appliances, giving your kitchen a modern and efficient feel.</li>
                        <li className='container1-item'><span>Plumbing and Electrical Work:</span> We handle plumbing and electrical updates to ensure safety and functionality.</li> 
                    </ul>
                </Container1>
        </div>
        <Process1 >
            <ProcessCard img={consultationImg} aos={'fade-right'}   >
                <h4 >Design Consultation: Understanding Your Vision</h4>
                <p>We begin with a comprehensive consultation to understand your vision, style preferences, and specific requirements. During this phase, we:</p>
                <ul>
                    <li>Your desired kitchen style and aesthetics.</li>
                    <li>Your functional requirements and any specific features you want.</li>
                    <li>Your budget and any constraints.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={bluePrintImg} aos={'fade-left'}  >
                <h4>Design and Planning: Translating Ideas into a Plan</h4>
                <p>After gathering all your input, our design experts get to work creating a comprehensive plan. This includes:</p>
                <ul>
                    <li>Detailed design drawings and layouts that bring your vision to life.</li>
                    <li>Material and finish selection, from countertops to cabinet options.</li>
                    <li>An itemized project proposal, ensuring transparency and accuracy.</li>
                </ul>
            </ProcessCard>
            <ProcessCard img={materialImg} aos={'fade-right'} >
                    <h4> Material Selection: Choosing Quality Finishes</h4>
                    <p>We help you select high-quality materials and finishes that best suit your design and budget, including:</p>
                    <ul>
                        <li>Cabinetry materials, styles, and finishes.</li>
                        <li>Countertop materials, such as granite, quartz, marble, or laminate.</li>
                        <li>Backsplash materials and designs to enhance the visual appeal of your kitchen.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={constructionImg} aos={'fade-left'}  >
                    <h4>Construction: Bringing Your Kitchen to Life</h4>
                    <p>With your design approved, it's time to roll up our sleeves and get to work. Our experienced craftsmen execute the plan with precision and care. This stage involves:</p>
                    <ul>
                        <li>Demolition of the existing kitchen elements, if needed.</li>
                        <li>Precise installation of custom cabinetry, countertops, and fixtures.</li>
                        <li>Electrical and plumbing work to accommodate new appliances, lighting, and fixtures.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={inspectImg} aos={'fade-right'} >
                    <h4>Quality Inspection: Ensuring Excellence</h4>
                    <p>Before considering the project complete, we conduct a thorough quality inspection. This includes:</p>
                    <ul>
                        <li>Reviewing every detail to ensure it meets our high-quality standards.</li>
                        <li>Testing all appliances, plumbing, and electrical systems.</li>
                        <li>Making any necessary adjustments to guarantee the project's functionality and aesthetics.</li>
                    </ul>
            </ProcessCard>
            <ProcessCard img={walkThroughImg} aos={'fade-left'} >
                <h4>Client Walkthrough: Your Satisfaction is Our Priority</h4>
                <p>We invite you to join us for a client walkthrough, during which you can inspect the completed kitchen and ensure it meets your expectations. This is your opportunity to:</p>
                <ul>
                    <li>Verify that the kitchen design and installation align with the agreed-upon plan and meet your specific requirements.</li>
                    <li>Ask any questions or request adjustments if necessary.</li>
                    <li>Confirm your satisfaction with the finished kitchen.</li>
                </ul>
            </ProcessCard>
        </Process1>
        <div data-aos='fade-up' style={{position: 'relative', marginBottom: '20vh'}} className="benefits">
            <div className="benefits">
                <h3>Benefits of Professional Kitchen Remodeling</h3>
                <ul className="benefits-items">
                    <li className="benefits-item"><span>Increased Home Value:</span> A well-designed and updated kitchen can significantly increase the value of your home.</li>
                    <li className="benefits-item"><span>Enhanced Aesthetics:</span> Aesthetic upgrades can transform your kitchen into a stylish and inviting space.</li>
                    <li className="benefits-item"><span>Improved Functionality:</span> Efficient use of space and modern appliances make your kitchen more functional.</li>
                    <li className="benefits-item"><span>Customization:</span> Tailor your kitchen to your unique needs with custom cabinetry and storage solutions.</li>
                    <li className="benefits-item"><span>Energy Efficiency:</span> Modern appliances and lighting can reduce energy consumption and utility costs.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Kitchen