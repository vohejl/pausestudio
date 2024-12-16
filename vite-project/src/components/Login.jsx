import { useState } from "react";
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../firebase"; // Sørg for at have firebase opsat
import { useNavigate } from "react-router-dom";
import "/src/css/Login.css"; // Importer CSS til login-siden

function LoginPage() {
  console.log("LoginPage rendered");

  // State variabler til at håndtere login/tilmeldings formularerne
  const [showLogin, setShowLogin] = useState(false); // Bestemmer om login formularen skal vises
  const [showSignUp, setShowSignUp] = useState(false); // Bestemmer om opret bruger formularen skal vises
  const [email, setEmail] = useState(""); // Håndterer email input
  const [password, setPassword] = useState(""); // Håndterer adgangskode input
  const [confirmPassword, setConfirmPassword] = useState(""); // Håndterer bekræftelse af adgangskode
  const [error, setError] = useState(""); // Håndterer fejlmeddelelser
  const navigate = useNavigate(); // Bruges til at navigere mellem sider

  // Funktion til at vise login formularen
  const handleLoginClick = () => {
    console.log("Login clicked");
    setShowLogin(true); // Sætter showLogin til true for at vise login formularen
    setShowSignUp(false); // Skjuler opret bruger formularen
  };

  // Funktion til at vise opret bruger formularen
  const handleSignUpClick = () => {
    setShowSignUp(true); // Sætter showSignUp til true for at vise opret bruger formularen
    setShowLogin(false); // Skjuler login formularen
  };

  // Funktion til at håndtere login
  const handleLogin = (e) => {
    e.preventDefault(); // Forhindrer standard formularindsendelse

    // Bruger Firebase signInWithEmailAndPassword funktion til login
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Logged in as:", userCredential.user.email);
        navigate("/Onboarding");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // Håndter specifikke fejl ved login
        if (errorCode === "auth/wrong-password") {
          setError("Forkert adgangskode. Prøv igen.");
        } else if (errorCode === "auth/user-not-found") {
          setError("Bruger ikke fundet med denne email.");
        } else {
          setError(errorMessage); // Andre fejlmeddelelser vises her
        }

        console.error("Login error:", errorMessage);
      });
  };

  // Funktion til at håndtere opret bruger
  const handleSignUp = (e) => {
    e.preventDefault(); // Forhindrer standard formularindsendelse

    // Tjekker om adgangskoderne matcher
    if (password !== confirmPassword) {
      setError("Adgangskoderne stemmer ikke overens.");
      return; // Stopper funktionen, hvis adgangskoderne ikke matcher
    }

    // Bruger Firebase createUserWithEmailAndPassword funktion til oprettelse af bruger
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User created:", userCredential.user.email);
        navigate("/Onboarding"); // Naviger til forsiden efter oprettelse af bruger
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // Håndter specifikke fejl ved oprettelse af bruger
        if (errorCode === "auth/weak-password") {
          setError("Adgangskoden skal være mindst 6 tegn lang.");
        } else if (errorCode === "auth/email-already-in-use") {
          setError("Email er allerede i brug.");
        } else {
          setError(errorMessage); // Andre fejlmeddelelser vises her
        }

        console.error("Sign up error:", errorMessage);
      });
  };

  return (
    <div className="page-container">
      {/* Logo - vises kun hvis ingen formular er aktiv */}
      {!showSignUp && !showLogin && (
        <div className="logo">
          <img src="img/pause-logo.png" alt="Logo" />
        </div>
      )}

      {/* Knapper til at vælge login eller opret bruger */}
      {!showLogin && !showSignUp && (
        <div className="button-container">
          <button onClick={handleLoginClick} className="login-btn">
            Log ind
          </button>
          <button onClick={handleSignUpClick} className="signup-btn">
            Opret bruger
          </button>
        </div>
      )}

      {/* Login formular */}
      {showLogin && (
        <div className="form-container">
          <h2>Log ind</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Indtast din email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Adgangskode:</label>
              <input
                type="password"
                id="password"
                placeholder="Indtast din adgangskode"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Log ind
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      )}

      {/* Opret bruger formular */}
      {showSignUp && (
        <div className="form-container">
          <h2>Opret bruger</h2>
          <form onSubmit={handleSignUp}>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Indtast din email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Adgangskode:</label>
              <input
                type="password"
                id="password"
                placeholder="Indtast din adgangskode"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="confirm-password">Bekræft adgangskode:</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Bekræft din adgangskode"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="signup-btn">
              Opret bruger
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
