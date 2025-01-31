import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Start with dark mode
  const [currentStep, setCurrentStep] = useState(1); // Track the current step
  const [isMusicPlaying, setIsMusicPlaying] = useState(false); // Track music state

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1); // Move to the next step
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Toggle light/dark mode
    handleNextStep(); // Move to the next step
  };

  const playMusic = () => {
    setIsMusicPlaying(true);
    const audio = new Audio('/abcd.mp3');
    audio.play().catch(error => console.log('Playback error:', error));
    handleNextStep();
  };
  

  const openEnvelope = () => {
    setIsOpen(true); // Open the envelope
    handleNextStep(); // Move to the next step (hide the button)
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="center-container">
        {/* Step 1: Lights On Button */}
        {currentStep === 1 && (
          <button className="action-button" onClick={toggleTheme}>
            {isDarkMode ? 'Lights Off' : 'Lights On'}
          </button>
        )}

        {/* Step 2: Play Music Button */}
        {currentStep === 2 && (
        
          <button className="action-button" onClick={playMusic}>
            Play Music
          </button>
          
        )}

        {/* Step 3: Open the Letter Button */}
        {currentStep === 3 && (
          <button className="action-button" onClick={openEnvelope}>
            Open the Letter
          </button>
        )}

        {/* Envelope and Letter */}
        {currentStep > 3 && (
          <div className={`envelope ${isOpen ? 'open' : ''}`}>
            <div className="flap"></div>
            <div className="letter">
              <h3>Happy Birthday Akhila Garu!!</h3>
              <p>I just wanted to take a moment to wish you a truly wonderful birthday. You’ve always been someone special—kind, bright, and full of life—and I hope today brings you all the happiness you deserve.

No matter where life takes us, I’ll always be grateful for the moments we shared and the way you’ve touched my life. Wishing you love, laughter, and endless joy in the year ahead.</p>
              <h4>I don't regret meeting you!!</h4>
            </div>
          </div>
        )}

        {/* Music Player */}
        {isMusicPlaying && (
          <audio src="./abcd.mp3" autoPlay loop />
        )}
      </div>

      {/* Confetti Animation */}
      {isOpen && <Confetti />}
    </div>
  );
};

export default App;