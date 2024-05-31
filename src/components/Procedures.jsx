import React from 'react';
import ProcedureCard from './ProcedureCard';
import Footer from './Footer';

const Procedures = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center">Процедури</h1>
        <div className="grid grid-cols-1 gap-8">
          <ProcedureCard title="Лазерна епилация с Elyson Pro" link="#laser-epilation" />
          <ProcedureCard title="Процедури срещу целулит с BTL EMTone" link="#cellulite" />
          <ProcedureCard title="Лифтинг на лице и тяло с BTL Exilis" link="#lifting" />
        </div>

        {/* Temporary sections for each procedure */}
        <div id="laser-epilation" className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Лазерна епилация с Elyson Pro</h2>
          <p>Temporary content for Лазерна епилация с Elyson Pro.</p>
        </div>
        <div id="cellulite" className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Процедури срещу целулит с BTL EMTone</h2>
          <p>Temporary content for Процедури срещу целулит с BTL EMTone.</p>
        </div>
        <div id="lifting" className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Лифтинг на лице и тяло с BTL Exilis</h2>
          <p>Temporary content for Лифтинг на лице и тяло с BTL Exilis.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Procedures;
