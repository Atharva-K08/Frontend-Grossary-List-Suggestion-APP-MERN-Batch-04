import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserProvider from "./context/UserProvider.jsx";
import ProductProvider from "./context/ProductProvider.jsx";
import SuggestionProvider from "./context/SuggestionProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ProductProvider>
        <SuggestionProvider>
          <App />
        </SuggestionProvider>
      </ProductProvider>
    </UserProvider>
  </StrictMode>,
);
