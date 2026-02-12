import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import OfficeProjectPage from './pages/OfficeProjectPage'
import SelfProjectPage from './pages/SelfProjectPage'
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/officeProjectPage' element={<OfficeProjectPage/>} />
      {/* <Route path='/selfProjectPage' element={<SelfProjectPage/>} /> */}
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App

