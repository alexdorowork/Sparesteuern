import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faPiggyBank, faUniversity, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  const handleClick = () => {
    // Implement the click event logic here
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <div className="w-full h-0.5 bg-[#0b2339] mt-0"></div>
        <h1 className="text-4xl font-bold text-center text-[#0b2339] mt-12">Ziele der kostenfreien Analyse</h1>
        <div className="flex flex-wrap justify-center mt-12">
          <div className="w-72 h-56 bg-[#deefff] rounded-lg m-4 p-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faChartLine} className="text-[#2f6ba2] w-8 h-8" />
            </div>
            <p className="text-xl text-center text-[#2f6ba2] mt-4">Unentdecktes Einsparungspotential entdecken</p>
          </div>
          <div className="w-72 h-56 bg-[#deefff] rounded-lg m-4 p-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faPiggyBank} className="text-[#2f6ba2] w-8 h-8" />
            </div>
            <p className="text-xl text-center text-[#2f6ba2] mt-4">Steuerschonender Vermögensaufbau</p>
          </div>
          <div className="w-72 h-56 bg-[#deefff] rounded-lg m-4 p-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faUniversity} className="text-[#2f6ba2] w-8 h-8" />
            </div>
            <p className="text-xl text-center text-[#2f6ba2] mt-4">Rechtssichere Lösungen</p>
          </div>
          <div className="w-72 h-56 bg-[#deefff] rounded-lg m-4 p-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faShieldAlt} className="text-[#2f6ba2] w-8 h-8" />
            </div>
            <p className="text-xl text-center text-[#2f6ba2] mt-4">Schutz des Vermögens vor dem Zugriff durch Dritte</p>
          </div>
        </div>
        <button onClick={handleClick} className="w-3/4 max-w-2xl h-14 bg-[#2f6ba2] rounded-lg mt-8 text-white text-lg font-bold tracking-wider">
          JETZT KOSTENFREIE ANALYSE ANFORDERN
        </button>
      </div>
    </div>
  );
};

export default Features;