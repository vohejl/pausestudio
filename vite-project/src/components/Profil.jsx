import "/src/css/Profil.css";

function Profil() {
  return (
    <>
      {/* Profil titel */}
      <div className="profil-container">
        <h1 className="profil-title">Min profil</h1>
      </div>

      {/* Profil info */}
      <div className="profile-info">
        <div className="profile-picture">
          <img src="/public/img/profil.png" alt="Profile" />
        </div>
        <div className="profile-name">
          <p className="profile-bold">Sasha</p>
          <span className="profile-subtitle">Mit medlemskab</span>
        </div>
      </div>

      {/* Profil muligheder */}
      <div className="profile-options">
        <div className="option">
          <a href="/medlemsfordele" className="option-link">
            <div className="option-left">
              <img
                src="/public/img/badge.png"
                alt="Medlemsfordele"
                className="option-icon"
              />
              <p>Medlemsfordele</p>
            </div>
          </a>
        </div>

        <div className="option">
          <a href="/medlemsfordele" className="option-link">
            <div className="option-left">
              <img
                src="/public/img/kalender.png"
                alt="Mine bookings"
                className="option-icon"
              />
              <p>Mine bookings</p>
            </div>
          </a>
        </div>

        <div className="option">
          <a href="/medlemsfordele" className="option-link">
            <div className="option-left">
              <img
                src="/public/img/brugertilpasning.png"
                alt="Brugertilpasning"
                className="option-icon"
              />
              <p>Brugertilpasning</p>
            </div>
          </a>
        </div>

        <div className="option">
          <a href="/medlemsfordele" className="option-link">
            <div className="option-left">
              <img
                src="/public/img/hjaelp.png"
                alt="Hjælpecenter"
                className="option-icon"
              />
              <p>Hjælpecenter</p>
            </div>
          </a>
        </div>

        <div className="option">
          <a href="/medlemsfordele" className="option-link">
            <div className="option-left">
              <img
                src="/public/img/om.png"
                alt="Om Pause Studio"
                className="option-icon"
              />
              <p>Om Pause studio recovery</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Profil;
