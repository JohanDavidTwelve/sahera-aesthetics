import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure this is correct

const Header = () => {
  return (
    <header className="bg-dark text-light py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="./images/Sahera_Aesthetics_LOGO_White.svg" alt="Сахера Естетикс" className="h-16" />
        </Link>
        <nav>
          <ul className="flex space-x-8 font-bold">
            <li><Link to="/" className="nav-link">Начало</Link></li>
            <li><Link to="/procedures" className="nav-link">Процедури</Link></li>
            <li><Link to="/contact" className="nav-link">Контакт</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
