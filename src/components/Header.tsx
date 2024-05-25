import React from 'react';

const Header: React.FC = () => {
  const handleButtonClick = () => {
    // Implement the click event logic here
    console.log('Button clicked');
  };

  return (
    <div className="flex justify-between items-center w-full h-12 max-w-7xl mx-auto">
      <div className="flex items-center">
        <div className="flex items-center w-6 h-8">
          <img src="/images/vector1.jpg" alt="Vector 1" className="h-3" />
          <img src="/images/vector2.jpg" alt="Vector 2" className="h-1.5 ml-1.5" />
          <img src="/images/vector3.jpg" alt="Vector 3" className="h-3 mt-1.5" />
        </div>
        <span className="text-xl uppercase text-primary ml-3">Spare Steuern</span>
      </div>
      <button
        className="w-96 h-12 bg-secondary rounded flex justify-center items-center"
        onClick={handleButtonClick}
      >
        <span className="text-sm font-bold tracking-wider text-accent">JETZT KOSTENFREIE ANALYSE ANFORDERN</span>
      </button>
    </div>
  );
};

export default Header;