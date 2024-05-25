import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="flex justify-between items-center w-full h-12 bg-white shadow-md">
      <div className="flex items-center h-full">
        <div className="flex items-center w-6 h-full">
          <FontAwesomeIcon icon={faChartLine} className="text-[#0b2339]" />
        </div>
        <span className="ml-2 text-xl uppercase text-[#0b2339]">
          Spare Steuern
        </span>
      </div>
      <button
        className="w-[398px] h-10 bg-[#deefff] rounded-md flex items-center justify-center hover:bg-[#cde7ff] transition-colors duration-200"
        onClick={handleButtonClick}
        aria-label="Request free analysis"
      >
        <span className="text-sm font-bold tracking-wide text-center text-[#2f6ba2]">
          JETZT KOSTENFREIE ANALYSE ANFORDERN
        </span>
      </button>
    </div>
  );
};

export default Header;