import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Procedures from './components/Procedures';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-light text-dark">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
