import React from "react";
import { NavLink } from "react-router-dom";
import "../css/menubar.css"; // Importing BottomNav.css for styling

function Menubar() {
  return (
    <nav className="menubarbottom">
      <NavLink to="/Forside" className="nav-item">
        <img src="ikoner/hjem.svg" alt="Home Icon" />
      </NavLink>
      <NavLink to="/Program" className="nav-item">
        <img src="ikoner/pause.svg" alt="Home Icon" />
      </NavLink>
      <NavLink to="/Booking" className="nav-item">
        <img src="ikoner/kalender.svg" alt="Home Icon" />
      </NavLink>
      <NavLink to="/Profil" className="nav-item">
        <img src="ikoner/profil.svg" alt="Home Icon" />
      </NavLink>
    </nav>
  );
}

export default Menubar;