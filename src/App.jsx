import { Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';

import Home from './assets/pages/home/Home';
import About from './assets/pages/about/About';
import Services from './assets/pages/services/Services';
import Contact from './assets/pages/contact/Contact';
import Review from './assets/pages/review/Review';
import Booking from './assets/pages/booking/Booking'; 
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review" element={<Review />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
