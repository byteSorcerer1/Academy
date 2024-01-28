import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from './pages/Home'
import Services from './pages/Services'
import Events from './pages/Events'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import PagesNotFound from './pages/PagesNotFound'

function SiteRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PagesNotFound />} />
        
      </Routes>
    </div>
  );
}

export default SiteRoutes;
