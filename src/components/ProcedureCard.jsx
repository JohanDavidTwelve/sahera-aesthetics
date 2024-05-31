import React from 'react';
import { HashLink } from 'react-router-hash-link';

const ProcedureCard = ({ title, link }) => {
  return (
    <HashLink
      to={link}
      className="block transform transition duration-300 hover:scale-105"
      smooth
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          {/* Image and description to be added later */}
        </div>
      </div>
    </HashLink>
  );
};

export default ProcedureCard;
