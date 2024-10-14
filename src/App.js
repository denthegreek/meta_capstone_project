import React from 'react';
import Header from './Navbar';
import HeroSection from './HeroSection';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import BookingForm from './Reservations';
import Confirmation from './Confirmation';
import './App.css';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<><HeroSection /><Specials /><Testimonials /><About /></>} />
            <Route path="/about" element={<div>Order</div>} />
            <Route path="/menu" element={<div>Order</div>} />
            <Route path="/reservations" element={<BookingForm />} />
            <Route path="/reservations/confirmation" element={<Confirmation />} />
            <Route path="/order" element={<div>Order</div>} />
            <Route path="/login" element={<div>Login</div>} />
            {/* Optional: Default route */}
            <Route path="/" element={<HeroSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
