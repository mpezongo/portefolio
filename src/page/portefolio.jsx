import React from 'react'
import NewNavbar from '../components/newNavbar'
import About from '../components/about'
import Skills from '../components/skills'
import Services from '../components/services'
import Projects from '../components/projects'
import Certificates from '../components/certificates'
import Experiences from '../components/experiences'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default function Portefolio() {
  
  return (
    <div className='w-full bg-third' id='home'>
      <NewNavbar/>
      <About />
      <Skills />
      <Services />
      <Projects />
      <Certificates />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  )
}
