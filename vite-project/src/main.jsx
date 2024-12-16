import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css"; // Opdateret sti til index.css
import App from "./components/App"; // Opdateret sti til App.jsx

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
