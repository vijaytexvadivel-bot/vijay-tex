// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import './App.css'; // Global styles

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <ContactInfo />
      </main>
     <Footer />
    </div>
  );
};

export default App;