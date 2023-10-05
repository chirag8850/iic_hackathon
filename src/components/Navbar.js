import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import React, { useEffect, useState } from 'react';

function Navbar({ isLoggedIn, toggleLoginStatus }) {

  const navigate = useNavigate();
  // Function to handle logout
  const handleLogout = () => {
    toggleLoginStatus(); // Set isLoggedIn to false
    navigate('/'); // Navigate to the home page or another appropriate page
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <h3 className="logo">Health Sahayak</h3>
        <ul className="nav-items">
          <li className="nav-item">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to={'/about'}>About</Link>
          </li>
          <li className="nav-item">
            <Link to={'/articles'}>Articles</Link>
          </li>
          <li className="nav-item">
            <a href="http://localhost:8000" className='connect-button'>Chat with bot</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
