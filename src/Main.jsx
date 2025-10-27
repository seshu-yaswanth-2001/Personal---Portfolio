import { createRoot } from "react-dom/client";
import App from "./App";
import { NavProvider } from "./context/NavContext";
// import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <NavProvider>
    <App />
  </NavProvider>
);
