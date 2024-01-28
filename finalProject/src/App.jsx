import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import SiteRoutes from './SiteRoutes'



function App() {

  return (
    <>
      <Navbar/>
      <SiteRoutes/>
      <Footer/>

     
    </>
  )
}

export default App
