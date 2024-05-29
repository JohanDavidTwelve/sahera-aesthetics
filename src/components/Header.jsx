import React from 'react';
import './Header.css'; // Import the custom CSS

const Header = () => {
  return (
    <header className="bg-premium-dark text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="logo-link">
          <img src="./images/Sahera_Aesthetics_LOGO_White.svg" alt="Сахера Естетикс" className="h-16 logo" />
        </a>
        <nav>
          <ul className="flex space-x-8 text-lg font-bold">
            <li><a href="#home" className="nav-link">Начало</a></li>
            <li><a href="#procedures" className="nav-link">Процедури</a></li>
            <li><a href="#contact" className="nav-link">Контакт</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
