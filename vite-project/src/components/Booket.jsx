import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "/src/css/Booket.css"; // Ensure CSS file is linked correctly

function Booket() {
  const navigate = useNavigate(); // Use the hook here inside the component function

  // Close button logic
  const goToHome = () => {
    navigate("/Forside"); // Navigate to the home page
  };

  return (
    <div className="booking-container">
      {/* Close Button */}
      <button className="close-btn-booket" onClick={goToHome}>
        &times;
      </button>

      <div className="image-booket">
        <img
          src="/img/floating.png" // Path to your image in the 'public' folder
          alt="Floating"
          className="floating-image"
        />
      </div>

      <div className="text-container">
        <h2 className="booking-title">Floating</h2>
        <p className="booking-thanks">Tak for din booking</p>
        <p className="booking-details">
          Du har reserveret floating den <strong>6/12</strong> kl.{" "}
          <strong>10</strong>
          <br />
          Vi glæder os til at byde dig velkommen hos{" "}
          <strong>Pause Studio</strong>
        </p>
      </div>
    </div>
  );
}

export default Booket;
