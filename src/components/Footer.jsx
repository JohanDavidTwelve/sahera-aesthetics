import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Адрес</h3>
            <p>ул. Примерна 123, София, България</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакти</h3>
            <p>Телефон: 0123 456 789</p>
            <p>Email: info@clinic.bg</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Навигация</h3>
            <ul>
              <li className="mb-2"><a href="#home" className="hover:text-indigo transition duration-300">Начало</a></li>
              <li className="mb-2"><a href="#procedures" className="hover:text-indigo transition duration-300">Процедури</a></li>
              <li className="mb-2"><a href="#contact" className="hover:text-indigo transition duration-300">Контакт</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p>© 2024 Сахера Естетикс. Всички права запазени.</p>
      </div>
    </footer>
  );
};

export default Footer;
