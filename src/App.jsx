import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import GraphicDesign from './pages/GraphicDesign';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import IndustrialProductDesign from './pages/IndustrialProductDesign';
import SocialMediaManagement from './pages/SocialMediaManagement';
import WebDvelopment from './pages/WebDevelopment';
import AppDevelopment from './pages/AppDevelopment';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/industrial-product-design" element={<IndustrialProductDesign />} />
          <Route path="/web-development" element={<WebDvelopment/>} />
          <Route path="/app-development" element={<AppDevelopment/>} />
          <Route path="/social-media-management" element={<SocialMediaManagement />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
      <ButtonGradient />
    </Router>
  )
}

export default App
