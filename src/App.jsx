import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/home/about/about';
import { MovieProvider } from './context/context';

function App() {
  return (
    <MovieProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MovieProvider>
  );
}

export default App; 