import React from 'react';

const Header = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="flex items-center justify-between w-full h-12 bg-transparent">
      <div className="flex items-center">
        <div className="flex items-center w-6 h-8">
          <div className="w-6 h-3 bg-[#2f6ba2]"></div>
          <div className="w-3 h-1.5 bg-[#2f6ba2] mt-1.5 ml-1.5"></div>
          <div className="w-6 h-3 bg-[#2f6ba2] mt-1.5"></div>
        </div>
        <div className="ml-9 text-lg uppercase text-[#0b2339]">
          Spare Steuern
        </div>
      </div>
      <div className="flex items-center w-1/3 h-12 bg-[#deefff] rounded-md">
        <button
          className="mx-auto text-sm font-bold tracking-wider text-center text-[#2f6ba2] cursor-pointer bg-transparent border-none"
          onClick={handleButtonClick}
        >
          JETZT KOSTENFREIE ANALYSE ANFORDERN
        </button>
      </div>
    </div>
  );
};

export default Header;