import React from 'react'
import './services.css'
import { useDispatch, useSelector } from 'react-redux'
import { getServices, selectServices } from '../../features/services/servicesSlice'
import ServiceCard from '../../components/serviceCard/ServiceCard'
import { Link } from 'react-router-dom'

const Services = () => {
    const dispatch = useDispatch()
    const services = useSelector(selectServices)
    const [searchFilter, setSearchFilter] = React.useState('')
    const [filteredServices, setFilteredServices] = React.useState(services.filter(service => service.name.toLowerCase().indexOf(searchFilter.toLowerCase()) >= 0))
    
    const [homeImprovement, setHomeImprovement] = React.useState([])
    const [assembly, setAssembly] = React.useState([])
    const [electrical, setElectrical] = React.useState([])
    const [plumbing, setPlumbing] = React.useState([])
    const [cleaning, setCleaning] = React.useState([])
    const [painting, setPainting] = React.useState([])

    const filterServices = () => {
        const modifiedList = services.filter(service => service.name.toLowerCase().indexOf(searchFilter.toLowerCase()) >= 0)
        setFilteredServices(modifiedList.slice(0, 5))
    }

    const active = () => {
        document.getElementById('search-suggestions').classList.add('active')
    }

    const inactive = () => {
        document.getElementById('search-suggestions').classList.remove('active')
    }

    window.addEventListener('scroll', () => {
        document.getElementById('sidebar').classList.remove('fixed')
        if(window.scrollY > 300){
            document.getElementById('sidebar').classList.add('fixed')
        }
    })


    React.useEffect(() => {
        // dispatch(getServices())
        
       if(services.length > 0){
        setHomeImprovement(services.filter(service => service.categories_id == '499eeba1-4e94-49d6-8bd0-c1b32384a520'))
        setAssembly(services.filter(service => service.categories_id == '46ae3931-45b0-4a87-89af-935496e779be'))
        setElectrical(services.filter(service => service.categories_id == 'bae77677-d599-4011-9af0-bd5bae85d160'))
        setPlumbing(services.filter(service => service.categories_id == '39414d89-c4cf-415d-be6d-19727b0cf6b4'))
        setCleaning(services.filter(service => service.categories_id == 'b9b427a2-f95a-4ab3-b15e-92ff16a00a93'))
        setPainting(services.filter(service => service.categories_id == '72a10f5a-dd0f-4098-b9d4-5185946c8f65')) 

       }
       filterServices()
    
    }, [services])

    const handleChange = async (e) => {
        await setSearchFilter(e.target.value)
        // services.filter(service => service.name.toLowerCase().indexOf(searchFilter.toLowerCase()) >= 0)
        filterServices()
    }

  return (
    <div className='services-container'>
        <div className="services-hero">
           <div onMouseEnter={active} onMouseLeave={() =>inactive()} className="input-container">
            <label htmlFor="filter">Have something in mind?</label>
            <div>
                <input  onChange={handleChange} id='filter' name='filter' className='services-filter' type="text" placeholder='Search for a service...' />
                <div id='search-suggestions' className="search-suggestions">
                    <ul className="suggestions">
                        {
                            filteredServices.length > 0 ?
                            filteredServices.map(service => <li className='suggestion'><Link to={`/services/${service.categories.name.replace(/\s+/g,'')}/${service.id}`}>{service.name}</Link></li>)
                            :
                            <p>No match found</p>

                        }
                    </ul>
                </div>
            </div>
           </div>
        </div>
        <div className="services-body">
            <div id="sidebar" className="categories-sidebar">
                <div className="sidebar-header"><h3>All Categories</h3></div>

                <ul className="categories-items">
                    <li className="categories-item"><a href="#homeImprovement">Home Improvement</a></li>
                    <li className="categories-item"><a href="#assembly">Assembly</a></li>
                    <li className="categories-item"><a href="#electrical">Electrical</a></li>
                    <li className="categories-item"><a href="#plumbing">Plumbing</a></li>
                    <li className="categories-item"><a href="#cleaning">Cleaning</a></li>
                    <li className="categories-item"><a href="#painting">Painting</a></li>
                </ul>
            </div>
            <div className="categories">
                
                <div id="homeImprovement" className="category">
                    <h3 className="category-name">Home Improvement</h3>
                    <div className="category-services">
                        {homeImprovement.map(service => <div className='category-service'><ServiceCard service={service} category={service.categories.name.replace(/\s+/g, '')} id={service.id} name={service.name} img={service.photos} /></div>)}
                    </div>
                </div>
                <div id='assembly' className="category">
                    <h3  className="category-name">Assembly</h3>
                    <div className="category-services">
                        {assembly.map(service => <ServiceCard id={service.id} category={service.categories.name.replace(/\s+/g, '')} name={service.name} img={service.photos} />)}
                    </div>
                </div>
                <div id='electrical' className="category">
                    <h3 data-aos='fade-up' className="category-name">Electrical</h3>
                    <div className="category-services">
                        {electrical.map(service => <ServiceCard id={service.id} category={service.categories.name.replace(/\s+/g, '')} name={service.name} img={service.photos} />)}
                    </div>
                </div>
                <div id='plumbing' className="category">
                    <h3 data-aos='fade-up' className="category-name">Plumbing</h3>
                    <div className="category-services">
                        {plumbing.map(service => <ServiceCard id={service.id} category={service.categories.name.replace(/\s+/g, '')} name={service.name} img={service.photos} />)}
                    </div>
                </div>
                <div id='cleaning' className="category">
                    <h3 data-aos='fade-up' className="category-name">Cleaning</h3>
                    <div className="category-services">
                        {cleaning.map(service => <ServiceCard id={service.id} category={service.categories.name.replace(/\s+/g, '')} name={service.name} img={service.photos} />)}
                    </div>
                </div>
                <div id='painting' className="category">
                    <h3 data-aos='fade-up' className="category-name">Painting</h3>
                    <div className="category-services">
                        {painting.map(service => <ServiceCard id={service.id} category={service.categories.name.replace(/\s+/g, '')} name={service.name} img={service.photos} />)}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services