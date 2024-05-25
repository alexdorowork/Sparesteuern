import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faChartPie, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="relative w-full h-screen">
      <img
        src="/images/a87db576eca3208b30414af99e04dd64e32f9eb3.png"
        className="absolute w-full h-full object-cover"
        alt="Background"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-6xl font-bold text-center">
          Raus aus der Steuerfalle!
        </h1>
        <p className="text-white text-xl text-center mt-4">
          So sparen Sie legal Steuern
        </p>
        <div className="flex justify-center mt-12 space-x-8">
          <div className="flex items-center bg-[#0b2339] rounded-lg overflow-hidden w-96 h-24">
            <div className="bg-[#2f6ba2] w-16 h-full flex items-center justify-center">
              <FontAwesomeIcon icon={faBan} className="text-white" />
            </div>
            <p className="text-white text-lg font-medium ml-4">
              Schluss mit unseriösen Steuersparmodellen!
            </p>
          </div>
          <div className="flex items-center bg-[#0b2339] rounded-lg overflow-hidden w-96 h-24">
            <div className="bg-[#2f6ba2] w-16 h-full flex items-center justify-center">
              <FontAwesomeIcon icon={faChartPie} className="text-white" />
            </div>
            <p className="text-white text-lg font-medium ml-4">
              Setzen Sie auf legale Gestaltungsmöglichkeiten!
            </p>
          </div>
          <div className="flex items-center bg-[#0b2339] rounded-lg overflow-hidden w-96 h-24">
            <div className="bg-[#2f6ba2] w-16 h-full flex items-center justify-center">
              <FontAwesomeIcon icon={faBriefcase} className="text-white" />
            </div>
            <p className="text-white text-lg font-medium ml-4">
              Vertrauen Sie auf erfahrene Steuerberater und Rechtsanwälte!
            </p>
          </div>
        </div>
        <button
          className="mt-12 px-8 py-3 bg-white text-[#2f6ba2] text-sm font-bold tracking-wider rounded-lg"
          onClick={handleButtonClick}
        >
          JETZT KOSTENFREIE ANALYSE ANFORDERN
        </button>
      </div>
    </div>
  );
};

export default Hero;