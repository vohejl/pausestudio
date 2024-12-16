import React, { useState } from "react";
import "/src/css/Program.css"; // Importerer CSS-fil til styling

const Program = () => {
  // Definerer programdataene som en liste
  const programs = [
    {
      id: 1,
      title: "Strækøvelser for ryggen",
      description: "Lette strækøvelser til at lindre rygsmerter.",
      length: "10 min",
      rating: 4,
      category: "Strækøvelser",
      image: "img/program1.jpg", // Billedsti i public/img
      goals: "Lindre rygsmerter",
      benefits: "Forbedrer rygfleksibilitet og reducerer smerter.",
    },
    {
      id: 2,
      title: "Vejrtrækningsøvelser for ro",
      description: "Enkle åndedrætsøvelser til stressreduktion.",
      length: "5 min",
      rating: 5,
      category: "Vejrtrækning",
      image: "/img/program2.jpg", // Billedsti i public/img
      goals: "Reducér stress",
      benefits: "Beroliger sindet og fremmer ro.",
    },
    {
      id: 3,
      title: "Meditation til afslapning",
      description: "En guidet meditation til at slippe stress.",
      length: "15 min",
      rating: 3,
      category: "Meditation",
      image: "/img/program3.jpg", // Billedsti i public/img
      goals: "Slap af",
      benefits: "Reducerer angst og forbedrer fokus.",
    },
    {
      id: 4,
      title: "Strækøvelser for nakken",
      description: "Øvelser til at afhjælpe nakkespændinger.",
      length: "12 min",
      rating: 4,
      category: "Strækøvelser",
      image: "/img/program4.jpg", // Billedsti i public/img
      goals: "Afhjælp nakkespændinger",
      benefits: "Øger mobilitet og lindrer spændinger.",
    },
    {
      id: 5,
      title: "Avanceret vejrtrækning",
      description: "Lær dybe vejrtrækningsøvelser til ro og afslapning.",
      length: "8 min",
      rating: 5,
      category: "Vejrtrækning",
      image: "/img/program5.jpg", // Billedsti i public/img
      goals: "Fremme dyb afslapning",
      benefits: "Øger iltoptagelse og reducerer stress.",
    },
    {
      id: 6,
      title: "Kombineret meditation og vejrtrækning",
      description: "Kombiner meditation med dyb vejrtrækning.",
      length: "20 min",
      rating: 4,
      category: "Meditation",
      image: "/img/program6.jpg", // Billedsti i public/img
      goals: "Kombinér ro og fokus",
      benefits: "Forbedrer mental klarhed og afslapning.",
    },
    {
      id: 7,
      title: "Yogastræk for benene",
      description: "Strækøvelser for at forbedre benstyrke.",
      length: "8 min",
      rating: 5,
      category: "Strækøvelser",
      image: "/img/program7.jpg", // Billedsti i public/img
      goals: "Øg benstyrke og fleksibilitet",
      benefits: "Forbedrer mobilitet og reducerer muskeltræthed.",
    },
    {
      id: 8,
      title: "Kombineret vejrtrækning og meditation",
      description: "Lær at kombinere meditation og dybe vejrtrækningsøvelser.",
      length: "18 min",
      rating: 4,
      category: "Meditation",
      image: "/img/program8.jpg", // Billedsti i public/img
      goals: "Opnå dyb ro og fokus",
      benefits: "Reducerer stress og forbedrer søvnkvalitet.",
    },
    {
      id: 9,
      title: "Strækøvelser for skuldre",
      description: "Skulderøvelser for afslapning og fleksibilitet.",
      length: "10 min",
      rating: 3,
      category: "Strækøvelser",
      image: "/img/program5.jpg",
      goals: "Afspænd skuldre",
      benefits: "Lindrer spændinger og øger bevægelighed.",
    },
    {
      id: 10,
      title: "Guidet meditation for søvn",
      description: "En meditation for at hjælpe dig med at falde i søvn.",
      length: "15 min",
      rating: 5,
      category: "Meditation",
      image: "/img/program5.jpg",
      goals: "Få bedre søvn",
      benefits: "Fremmer dyb søvn og reducerer søvnbesvær.",
    },
  ];

  // States til at håndtere filtrering, søgning og synliggørelse af programmer
  const [filterCategory, setFilterCategory] = useState("all"); // Kategori-filter
  const [filterSort, setFilterSort] = useState("none"); // Sorteringsfilter
  const [searchTerm, setSearchTerm] = useState(""); // Søgeterm
  const [visiblePrograms, setVisiblePrograms] = useState(6); // Antal synlige programmer
  const [isShowMore, setIsShowMore] = useState(true); // Tilstand for "Vis mere"
  const [expandedProgram, setExpandedProgram] = useState(null); // Tilstand for udvidede beskrivelser
  const [favorites, setFavorites] = useState([]); // Favoritter
  const [progress, setProgress] = useState(0); // Fremskridt (for eksempel for færdiggørelse af programmer)
  const [completedPrograms, setCompletedPrograms] = useState(0); // Færdiggjorte programmer

  // Filter- og søgelogik
  const filteredPrograms = programs
    .filter((program) => {
      const matchesCategory =
        filterCategory === "all" || program.category === filterCategory;
      const matchesSearch =
        program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch; // Returner kun programmer, der matcher kategorien og søgningen
    })
    .sort((a, b) => {
      if (filterSort === "popular") return b.rating - a.rating; // Sorter efter popularitet (bedømmelse)
      if (filterSort === "newest") return new Date(b.date) - new Date(a.date); // Sorter efter nyeste
      return 0;
    });

  // Event handlers
  const handleSearchChange = (e) => setSearchTerm(e.target.value); // Opdater søgning
  const handleFilterClick = (category) => setFilterCategory(category); // Filtrering af programmer
  const handleSortChange = (sortType) => setFilterSort(sortType); // Sortering af programmer
  const handleShowToggle = () => {
    setIsShowMore(!isShowMore);
    setVisiblePrograms(isShowMore ? filteredPrograms.length : 6); // Skift synlige programmer ved "Vis mere"
  };

  // Favoritfunktionalitet
  const handleFavoriteClick = (id) => {
    setFavorites(
      (prevFavorites) =>
        prevFavorites.includes(id)
          ? prevFavorites.filter((favId) => favId !== id) // Fjern fra favoritter
          : [...prevFavorites, id] // Tilføj til favoritter
    );
  };

  const handleRemoveFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favId) => favId !== id)
    ); // Fjern favorit
  };

  // Udvidelse af programbeskrivelse
  const handleExpandDescription = (id) =>
    setExpandedProgram(expandedProgram === id ? null : id);

  // Opdatering af fremskridt
  const handleCompleteChallenge = () => {
    setCompletedPrograms(completedPrograms + 1); // Øg antallet af færdiggjorte programmer
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100)); // Øg fremskridtet med 10%
  };

  return (
    <div>
      {/* Header sektion */}
      <div className="header">
        <h1>Velkommen til Pause Studios Programmer</h1>
      </div>

      {/* Favoritter */}
      {favorites.length > 0 && (
        <div className="favorites-slider">
          <h2>Favoritter</h2>
          <div className="favorites-slider-container">
            {programs
              .filter((program) => favorites.includes(program.id))
              .map((program) => (
                <div key={program.id} className="program-card-small">
                  <div
                    className="program-image"
                    style={{ backgroundImage: `url(${program.image})` }}
                  ></div>
                  <div className="program-content">
                    <h2>{program.title}</h2>
                    <p>{program.description}</p>
                    <p className="program-length">Længde: {program.length}</p>
                    <div
                      onClick={() => handleRemoveFavorite(program.id)}
                      style={{ cursor: "pointer", fontSize: "20px" }}
                    >
                      🗑️ Fjern fra favoritter
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Dagens Udfordring */}
      <div className="daily-challenge">
        <h2>Dagens Udfordring</h2>
        <p>Udfør 10 minutters meditation for at reducere stress.</p>
        <button onClick={handleCompleteChallenge}>Gennemfør Udfordring</button>
      </div>

      {/* Fremskridt */}
      <div className="progress-tracker">
        <h2>Dine Fremskridt</h2>
        <p>Programmer gennemført: {completedPrograms}</p>
        <div className="circular-progress-container">
          <div
            className="circular-progress-bar"
            style={{
              background: `conic-gradient(#222222 ${
                progress * 3.6
              }deg, #c3c8b3 0deg)`,
            }}
          ></div>
          <div className="circular-progress-text">{progress}%</div>
        </div>
      </div>

      {/* Filter og sortering */}
      <div className="filter-bar">
        <div className="filter-buttons-container">
          <div className="filter-buttons-slider">
            <button
              className="filter-btn"
              onClick={() => handleFilterClick("all")}
            >
              Alle
            </button>
            <button
              className="filter-btn"
              onClick={() => handleFilterClick("Strækøvelser")}
            >
              Strækøvelser
            </button>
            <button
              className="filter-btn"
              onClick={() => handleFilterClick("Vejrtrækning")}
            >
              Vejrtrækning
            </button>
            <button
              className="filter-btn"
              onClick={() => handleFilterClick("Meditation")}
            >
              Meditation
            </button>
            <button
              className="filter-btn"
              onClick={() => handleSortChange("popular")}
            >
              Populære
            </button>
            <button
              className="filter-btn"
              onClick={() => handleSortChange("newest")}
            >
              Nyeste
            </button>
          </div>
        </div>
      </div>

      {/* Programliste */}
      <div className="program-list">
        {filteredPrograms.slice(0, visiblePrograms).map((program) => (
          <div key={program.id} className="program-card">
            <div
              className="program-image"
              style={{ backgroundImage: `url(${program.image})` }}
            ></div>
            <div className="program-content">
              <h2>{program.title}</h2>
              <p>
                {expandedProgram === program.id
                  ? program.description
                  : `${program.description.slice(0, 100)}...`}
                <span onClick={() => handleExpandDescription(program.id)}>
                  {expandedProgram === program.id ? " Læs mindre" : " Læs mere"}
                </span>
              </p>
              <div
                onClick={() => handleFavoriteClick(program.id)}
                style={{ cursor: "pointer", fontSize: "20px" }}
              >
                {favorites.includes(program.id) ? "❤️" : "🤍"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vis mere-knap */}
      {filteredPrograms.length > 6 && (
        <div className="show-more-btn">
          <button onClick={handleShowToggle}>
            {isShowMore ? "Vis mere" : "Vis mindre"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Program;
