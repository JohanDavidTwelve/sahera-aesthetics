import React from 'react';

const ContentsSection = () => {
  return (
    <section id="procedures" className="py-16 bg-light text-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-12">Процедури</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Процедура 1</h3>
            <p>Описание на процедурата.</p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Процедура 2</h3>
            <p>Описание на процедурата.</p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Процедура 3</h3>
            <p>Описание на процедурата.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentsSection;
