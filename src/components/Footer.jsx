import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Адрес</h3>
            <p>бул. "Христо Ботев" 109А, Пловдив</p>
            <div className="mt-4">
              <iframe
                title="Our location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d739.6629800569277!2d24.76033512851577!3d42.13633439269053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd1a9cf8da917%3A0x2821320e880a6fbd!2zS2FtZW5pdHNhIDFQbG92ZGl2IENlbnRlciwg0LHRg9C7LiDigJ7QpdGA0LjRgdGC0L4g0JHQvtGC0LXQsuKAnCAxMDksIDQwMDAgUGxvdmRpdg!5e0!3m2!1sen!2sbg"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакти</h3>
            <p>
              Телефон: <a href="tel:0897881311" className="hover:text-gold transition duration-300">089 788 1311</a>
            </p>
            <p>
              Instagram: <a href="https://www.instagram.com/saheraaesthetics/" className="hover:text-gold transition duration-300" target="_blank" rel="noopener noreferrer">@saheraesthetics</a>
            </p>
            <p>
              Facebook: <a href="https://www.facebook.com/people/Sahera-Aesthetics/61559260479030/" className="hover:text-gold transition duration-300" target="_blank" rel="noopener noreferrer">Sahera Aesthetics</a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Меню</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-base hover:text-gold transition duration-300">Начало</Link>
              </li>
              <li className="mb-2">
                <Link to="/procedures" className="text-base hover:text-gold transition duration-300">Процедури</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-base hover:text-gold transition duration-300">Контакт</Link>
              </li>
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
