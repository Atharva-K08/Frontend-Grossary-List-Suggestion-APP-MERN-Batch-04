import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserProvider from "./context/UserProvider.jsx";
import ProductProvider from "./context/ProductProvider.jsx";
import SuggestionProvider from "./context/SuggestionProvider.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <SuggestionProvider>
            <App />
          </SuggestionProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
