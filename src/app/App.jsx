import React from 'react'
import Navbar from '../components/navbar/Navbar'
import '../styles.css'
import { Routes, Route } from 'react-router'
import Home from '../scenes/home/Home'
import Footer from '../components/footer/Footer'
import Contact from '../components/contact/Contact'
import Services from '../scenes/services/Services'
import About from '../scenes/about/About'
import Service from '../scenes/service/Service'
import { useDispatch } from 'react-redux'
import { getServices } from '../features/services/servicesSlice'
import Bathroom from '../scenes/services/bathroom/Bathroom'
import Kitchen from '../scenes/services/kitchen/kitchen'
import Renovation from '../scenes/services/renovation/Renovation'
import Masonry from '../scenes/services/masonry/Masonry'
import PowerWash from '../scenes/services/powerwash/PowerWash'
import Deck from '../scenes/services/deck/Deck'
import Electrical from '../scenes/services/electrical/Electrical'
import Carpentry from '../scenes/services/carpentry/Carpentry'
import Plumbing from '../scenes/services/plumbing/Plumbing'
import Patio from '../scenes/services/patio/Patio'
import DryWall from '../scenes/services/drywall/DryWall'
import Flooring from '../scenes/services/flooring/Flooring'
import Windows from '../scenes/services/windows/Windows'
import Assembly from '../scenes/services/assembly/Assembly'
import Cleaning from '../scenes/services/cleaning/Cleaning'
import Sink from '../scenes/services/sink/Sink'
import Drain from '../scenes/services/drain/Drain'
import Sanitization from '../scenes/services/sanitization/Sanitization'
import ExteriorPainting from '../scenes/services/exteriorPainting/ExteriorPainting'
import InteriorPainting from '../scenes/services/interiorPainting/InteriorPainting'
import ElectricalFixtures from '../scenes/services/electricalFixtures/ElectricalFixtures'
import Fans from '../scenes/services/fans/fans'
import Fence from '../scenes/services/fence/Fence'
import Toilet from '../scenes/services/toilet/Toilet'
import 'aos/dist/aos.css'
import AOS from 'aos'

function App() {
  const dispatch = useDispatch()
  const toggleContactForm = (func) => {
    document.getElementById('contact-container').classList.toggle('active')
    if(func){
      func()
    }
}

React.useEffect(() => {
  AOS.init({duration: 1000})
  dispatch(getServices())
}, [])



  return (
    <>
      <header>
        <Navbar toggleForm={toggleContactForm} />
      </header>
      
      <main className='main'>
        <Contact toggleForm={toggleContactForm} />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route exact path='/services' element={<Services />}></Route>
          {/* Individual Service Pages */}
          {/* Home Improvement */}
          {/* <Route path='/services/HomeImprovement/3fa3bcc1-c4c9-4a0f-879a-85f073b7034a' element={<Kitchen />} ></Route> */}
          <Route path='/services/HomeImprovement/4225baeb-5291-45ad-a683-6ed68df33322' element={<Bathroom />} ></Route>
          <Route path='/services/HomeImprovement/2534bb59-26ea-45de-a1a1-bd84b803a9f4' element={<Renovation />} ></Route>
          <Route path='/services/HomeImprovement/bc466ced-7865-4a97-b302-cc1e0683c378' element={<Masonry />} ></Route>
          <Route path='/services/HomeImprovement/33c60218-a7d4-42cd-991f-efff1c7a6345' element={<Deck />} ></Route>
          <Route path='/services/HomeImprovement/edf88248-8924-4b18-86c3-3cb2e93bd336' element={<Carpentry />} ></Route>
          <Route path='/services/HomeImprovement/e945dcb0-5850-4921-968c-0a1535ba8391' element={<Patio />} ></Route>
          <Route path='/services/HomeImprovement/d9c71f98-ba14-4a93-9790-bf3b4657d07d' element={<DryWall />} ></Route>
          <Route path='/services/HomeImprovement/720906b2-d295-4c0e-b72c-dea94dfd0be8' element={<Flooring />} ></Route>
          <Route path='/services/HomeImprovement/a4523ba9-a7d8-4edf-bebb-9f59d633e316' element={<Windows />} ></Route>
          <Route path='/services/HomeImprovement/cffa65d9-343f-49bf-b191-4fab970198b0' element={<Fence />} ></Route>
          {/* Assembly */}
          <Route path='/services/Assembly/:id' element={<Assembly />} ></Route>
          {/* Cleaning */}
          <Route path='/services/Cleaning/dfae05ce-ec03-4bf5-8818-83859c0dd32d' element={<PowerWash />}></Route>
          <Route path='/services/Cleaning/661f738f-d27b-476d-994b-e837c7720ccc' element={<Cleaning />}></Route>
          <Route path='/services/Cleaning/0fc804b9-586c-49da-9445-51f6425acc55' element={<Cleaning />}></Route>
          <Route path='/services/Cleaning/8e873a72-a4e5-4de1-b728-b113f51c5093' element={<Sanitization />}></Route>
          <Route path='/services/Cleaning/417793fa-2d1e-4103-9428-13fc5c1a701b' element={<Sanitization />}></Route>
          {/* Electrical */}
          <Route path='/services/Electrical/32bafa0b-4f92-4fa2-a3ad-9087f39ec0ff' element={<Electrical />}></Route>
          <Route path='/services/Electrical/4f306ac8-cf0f-4602-b132-3c7d494ce85a' element={<ElectricalFixtures />}></Route>
          <Route path='/services/Electrical/2ba20aeb-0f3f-4561-a9e4-a1cb49cd8960' element={<ElectricalFixtures />}></Route>
          <Route path='/services/Electrical/b12a254e-b2a6-476d-b94c-ddfff2118e05' element={<ElectricalFixtures />}></Route>
          {/* <Route path='/services/Electrical/8c2baee4-dabd-49a3-a69a-9411bf08132c' element={<Fans />}></Route> */}
          {/* Plumbing */}
          <Route path='/services/Plumbing/4553ef17-7c11-4cde-91c6-75cbd05e2c04' element={<Plumbing />}></Route>
          <Route path='/services/Plumbing/b6035639-a82a-43e0-9854-be92c07bb86f' element={<Sink />}></Route>
          <Route path='/services/Plumbing/9b4c6d3d-e625-4c19-8af9-e6d7e2baed3e' element={<Sink />}></Route>
          <Route path='/services/Plumbing/a5449cb0-efb6-40e7-b0be-7be03fee5704' element={<Sink />}></Route>
          <Route path='/services/Plumbing/af51e30a-be78-4f58-bf9b-3784db7b1b19' element={<Toilet />}></Route>
          {/* Painting */}
          <Route path='/services/Plumbing/a5ab0445-0544-4595-a52c-9d1c44f7f749' element={<Drain />}></Route>
          <Route path='/services/Painting/a3bed2f1-f0dd-4aa5-aff6-fc7171bde4fd' element={<ExteriorPainting />}></Route>
          <Route path='/services/Painting/eef0c1e6-d0a4-462c-929d-9342719ec5a7' element={<InteriorPainting />}></Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
