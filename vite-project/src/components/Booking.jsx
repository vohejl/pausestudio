import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/css/Booking.css';

function Booking() {
  // Initialize selectedOption with "Enkelt session" as default
  const [selectedOption, setSelectedOption] = useState('Enkelt session');
  const navigate = useNavigate();

  // Handle item click event to navigate to the page
  const handleSelectOption = (option) => {
    setSelectedOption(option); // Update selected option (for visual feedback)

    // Navigate to a different page based on the option clicked
    if (option === 'Floating') {
      navigate('/floating');
    }
  };

  return (
    <>
      <div className="booking-top">
        <h1>Book din næste pause</h1>
      </div>
      <div className="booking-container">
        <p>Hvad ønsker du at booke tid til?</p>

        {/* Buttons for selecting between Enkelt session or Wellnesspakke */}
        <div className="button-group">
          <button
            className={`option-button ${selectedOption === 'Enkelt session' ? 'active' : ''}`}
            onClick={() => setSelectedOption('Enkelt session')}
          >
            Enkelt session
          </button>
          <button
            className={`option-button ${selectedOption === 'Wellnesspakke' ? 'active' : ''}`}
            onClick={() => setSelectedOption('Wellnesspakke')}
          >
            Wellnesspakke
          </button>
        </div>

        {/* Conditionally render different groups of options */}
        <div className="options-grid">
          {selectedOption === 'Enkelt session' && (
            <>
              <div className="option-item" onClick={() => handleSelectOption('Floating')}>
                <p>Floating</p>
                <img src="/public/img/floating.png" alt="Floating" />
              </div>
              <div className="option-item" onClick={() => handleSelectOption('Infrared sauna')}>
                <p>Infrarød sauna</p>
                <img src="/public/img/infrarød.png" alt="Infrared sauna" />
              </div>
              <div className="option-item" onClick={() => handleSelectOption('Recovery boots')}>
                <p>Recovery boots</p>
                <img src="/public/img/recoveryboots.png" alt="Recovery boots" />
              </div>
              <div className="option-item" onClick={() => handleSelectOption('Cryosauna')}>
                <p>Cryosauna</p>
                <img src="/public/img/cryosauna.png" alt="Cryosauna" />
              </div>
              <div className="option-item" onClick={() => handleSelectOption('Lysbehandling')}>
                <p>Lysbehandling</p>
                <img src="/public/img/lysbehandling.png" alt="Lysbehandling" />
              </div>
            </>
          )}

          {selectedOption === 'Wellnesspakke' && (
            <>
              <div className="option-item" onClick={() => handleSelectOption('Massage')}>
              <p>PAUSE de luxe</p>
                <img src="/public/img/deluxe.png" alt="Billede af en drikkevare der bliver hældt op" />
              </div>
              <div className="option-item" onClick={() => handleSelectOption('Par der sidder og hygger')}>
              <p>Stor pause</p>
                <img src="/public/img/storpause.png" alt="" />
              </div>
              <div className="option-item" onClick={() => handleSelectOption('Privat floating rum')}>
              <p>Privat pause</p>
                <img src="/public/img/privatpause.png" alt="Aromatherapy" />
              </div>
              <div className="option-item" onClick={() => handleSelectOption('Billede af kvinde i kåbe der pumper håndcreme i hånden')}>
              <p>Lille pause</p>
                <img src="/public/img/lillepause.png" alt="Aromatherapy" />
              </div>
              {/* Add more wellness pack items as needed */}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Booking;
