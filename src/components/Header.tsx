'use client'; 
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="header-content">
        <div className="company-name">
          <Link href="/" className="nav-link">
            Software House 
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/servicess" className="nav-link">Services</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;