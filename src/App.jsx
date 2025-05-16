// App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/home/about/about';
import Section from './pages/home/partials/section1';
import About0 from './pages/home/about/about0';
import About1 from './pages/home/about/about1';
import About2 from './pages/home/about/about2';
import About3 from './pages/home/about/about3';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        </Routes>
    </>
  );
}

export default App;

