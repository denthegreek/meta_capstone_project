import React from 'react';
import Header from './Navbar';
import HeroSection from './HeroSection';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <HeroSection />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
