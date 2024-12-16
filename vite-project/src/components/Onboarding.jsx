import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/css/Onboarding.css";

function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Data til slides
  const slides = [
    {
      id: 1,
      title: "Nemt booking system",
      text: "Vores bookingsystem gør det nemt for dig at finde og reservere behandlinger nemt og hurtigt. Du kan altid ændre eller aflyse direkte i appen.",
      backgroundImage: "/public/img/onboarding1.png",
    },
    {
      id: 2,
      title: "Optjen belønninger",
      text: "Hver 10. behandling er på vores regning. Hold styr på dine fordele direkte i appen og se, hvor tæt du er på din næste belønning.",
      backgroundImage: "/public/img/onboarding3.png",
    },
    {
      id: 3,
      title: "Få adgang til mere",
      text: "Udforsk vores eksklusive rabatsystem og vores hjemme-pause-program",
      backgroundImage: "/public/img/onboarding2.png",
      cta: "Kom igang",
    },
  ];

  // Funktion til at skifte til næste slide
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // Funktion til at skifte til forrige slide
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Funktion til at lukke onboarding og gå til Forside.jsx
  const goToHome = () => {
    navigate("/Forside");
  };

  // Funktion til at håndtere klik på venstre/højre side
  const handleScreenClick = (e) => {
    const screenWidth = window.innerWidth; // Hele skærmbredden
    const clickPosition = e.clientX; // Hvor på skærmen der blev klikket

    if (clickPosition < screenWidth / 2) {
      prevSlide(); // Klik på venstre side
    } else {
      nextSlide(); // Klik på højre side
    }
  };

  return (
    <div
      className="onboarding-slide"
      style={{
        backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
      }}
      onClick={handleScreenClick} // Tilføjer klik-event på hele skærmen
    >
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Luk-knap */}
      <button className="close-btn" onClick={goToHome}>
        &times;
      </button>

      {/* Tekstindhold */}
      <div className="content">
        <h1>{slides[currentSlide].title}</h1>
        <p>{slides[currentSlide].text}</p>

        {/* CTA-knap kun på sidste slide */}
        {currentSlide === slides.length - 1 && (
          <button className="cta-btn" onClick={goToHome}>
            {slides[currentSlide].cta}
          </button>
        )}
      </div>

      {/* Navigationsprikker */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation(); // Forhindrer klik på prikker i at skifte slide
              setCurrentSlide(index);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Onboarding;
