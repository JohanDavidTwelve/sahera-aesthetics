import React from 'react';
import './index.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContentsSection from './components/ContentsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-light text-dark">
      <Header />
      <HeroSection />
      <ContentsSection />
      <Footer />
    </div>
  );
}

export default App;
