import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Articles from './components/Articles';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} toggleLoginStatus={toggleLoginStatus} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/articles" element={<Articles />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
