import React from 'react';
import './HeroSection.css'; // Import custom CSS for additional styling

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-dark text-white flex items-center justify-center">
      <video
        className="video-bg absolute inset-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./images/sahera_tr2.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 text-center">
        <h2 className="text-6xl font-bold bg-gradient-mesh bg-clip-text text-transparent">
          Ние сме Сахера Естетикс!
        </h2>
        <p className="mt-4 text-3xl text-white">
          Издигаме Вашата красота на следващото ниво!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
