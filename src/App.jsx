import './App.css'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import WorkingProcess from './components/WorkingProcess'

function App() {

  return (
   <div className="font-family">
    <Navbar/>
    <Hero/>
    <Services/>
    <CTA/>
    <CaseStudies/>
    <WorkingProcess/>
    <Team/>
    <Testimonials/>
    <Contact/>
   </div>
  )
}

export default App
