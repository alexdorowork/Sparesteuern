import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-between items-center w-full max-w-7xl h-8 mx-auto">
      <div className="flex items-center h-full">
        <div className="flex items-center h-full">
          {/* Vector 1 */}
          <div className="w-6 h-3 bg-blue-600"></div>
          {/* Vector 2 */}
          <div className="w-3 h-1.5 bg-blue-600 ml-1.5 mt-3"></div>
          {/* Vector 3 */}
          <div className="w-6 h-3 bg-blue-600 mt-4.5"></div>
        </div>
        <div className="ml-9 text-2xl uppercase text-center text-[#0b2339]">
          Spare Steuern
        </div>
      </div>
      <div className="text-base font-medium text-[#0b2339]">
        © spare-steuern.com
      </div>
    </div>
  );
};

export default Footer;