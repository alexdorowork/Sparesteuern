import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const CTA = () => {
  const handleButtonClick = () => {
    // Implement the click event logic here
    console.log('Button clicked');
  };

  return (
    <div className="w-full h-screen bg-blue-100 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center">
        <div className="w-24 h-0.5 bg-blue-700 mt-12"></div>
        <h1 className="text-4xl font-bold text-blue-700 text-center mt-6">
          Für wen eignet sich ein Steuersparmodell?
        </h1>
        <p className="text-xl text-blue-900 text-center mt-4 mx-4">
          Es gilt der Grundsatz: Nur wer Steuern zahlt, kann auch welche sparen. Der Jahresgewinn sollte mindestens 50.000 EUR betragen. Liegt dieser darunter lohnen sich Gestaltungen mit Stiftungen für Sie nicht.
        </p>
        <div className="w-152 h-1.5 bg-blue-700 mt-4"></div>
        <p className="text-base font-medium text-blue-900 text-center mt-4 mx-4">
          Wir vermitteln Sie an einen seriösen Steuerberater oder Rechtsanwalt, der Ihnen direkt weiterhelfen kann.
        </p>
        <button 
          className="w-136 h-14 bg-blue-700 rounded mt-10 flex items-center justify-center"
          onClick={handleButtonClick}
        >
          <span className="text-lg font-bold text-white tracking-wide">JETZT KOSTENFREIE ANALYSE ANFORDERN</span>
        </button>
      </div>
    </div>
  );
};

export default CTA;