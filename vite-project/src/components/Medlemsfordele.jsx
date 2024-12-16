import { useState } from "react";
import "/src/css/Medlemsfordele.css";

function Medlemsfordele() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="medlemsfordele-container">
        <h1 className="medlemsfordele-title">Medlemsfordele</h1>
      </div>
      {/* Progress Section */}
      <div className="progress-section">
        <p>Hver 10 behandling er på vores regning</p>
        <p>Se hvor mange behandlinger du mangler her:</p>
        <div className="progress-bar">
          {[...Array(10)].map((_, index) => (
            <div key={index} className={`circle ${index < 3 ? "filled" : ""}`}>
              {index < 3 && <span className="cross">✖</span>}
            </div>
          ))}
        </div>
      </div>

      <div class="benefit-card benefit-card1">
        <img src="/public/img/medlemsfordele.png" alt="Benefit 1" />
        <div class="text-content">
          <p>Optjen større rabatter, jo flere behandlinger du booker</p>
          <a href="#" class="cta-button">
            Se rabatsystemet
          </a>
        </div>
      </div>

      <div class="benefit-card benefit-card2">
        <div class="text-content">
          <p>Adgang til vores hjemme pause program</p>
          <a href="/program" class="cta-button">
            Prøv det her
          </a>
        </div>
      </div>

      <div class="benefit-card benefit-card3">
        <img src="/public/img/gavekort.png" alt="Benefit 3" />
        <div class="text-content">
          <p>15% på gavekort</p>
        </div>
      </div>

      <div class="benefit-card benefit-card4">
        <img src="/public/img/produkter.png" alt="Benefit 4" />
        <div class="text-box">
          <p>15% på alle varer og produkter</p>
        </div>
      </div>
    </>
  );
}
export default Medlemsfordele;
