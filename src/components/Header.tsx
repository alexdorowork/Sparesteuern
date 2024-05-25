import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="flex justify-between items-center w-full h-12 bg-white">
      <div className="flex items-center h-full">
        <div className="flex items-center w-6 h-full">
          <FontAwesomeIcon icon={faChartLine} className="text-[#0b2339]" />
        </div>
        <span className="ml-2 text-xl uppercase text-[#0b2339]">
          Spare Steuern
        </span>
      </div>
      <button
        className="w-[398px] h-full bg-[#deefff] rounded-md flex items-center justify-center"
        onClick={handleButtonClick}
      >
        <span className="text-sm font-bold tracking-wide text-center text-[#2f6ba2]">
          JETZT KOSTENFREIE ANALYSE ANFORDERN
        </span>
      </button>
    </div>
  );
};

export default Header;