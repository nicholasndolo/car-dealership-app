import React, {useRef} from 'react';
//import { Link } from 'react-router-dom'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import "../styles/Navbar.css";

function NavBar() {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav")
    }
    return (
        <header>
            <h3>Logo</h3>
          <nav ref= {navRef}>
              <a href="/#">Home</a>
              <a href="/#">About Us</a>
              <a href="/#">Contact us</a>
              <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                  <FaTimes />
              </button>
          </nav>
            <button className="nav-btn" onClick={{showNavbar}}>
                <FaBars />
            </button>
        </header>
    )
}

export default NavBar