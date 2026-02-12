import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Skills from '../components/Skills'

const HomePage = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <About/>
        <Experience/>
        <Projects/>
        <Education/>
        <Skills/>
    </div>
  )
}

export default HomePage